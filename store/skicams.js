import api from '@/src/api';

export const state = () => ({
  loading: false,
  skicams: [],
});

export const mutations = {
  START_LOADING(state) {
    state.loading = true;
  },
  STOP_LOADING(state) {
    state.loading = false;
  },
  SET_SKICAMS(state, payload) {
    state.skicams = [...payload];
  },
};

export const actions = {
  async getSkiCam({ commit }) {
    commit('START_LOADING');
    await api
      .getSkiCam()
      .then((response) => {
        if (response.data) {
          const filterList = ['Bielmonte', 'Livigno'];
          const filteredCams = Object.values(response.data).filter((item) =>
            filterList.includes(item.name)
          );
          commit('SET_SKICAMS', filteredCams);
        }
        commit('STOP_LOADING');
      })
      .catch((error) => {
        console.error(error);
        commit('STOP_LOADING');
      });
  },
};
