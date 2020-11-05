<template>
  <section class="skicams">
    <template v-if="loading">
      <page-loader />
    </template>
    <template v-else>
      <article
        v-for="(skicam, index) in skicams"
        :key="`ski_cam_${index}`"
        class="skicams__item"
      >
        <div class="skicams__container">
          <div class="skicams__title">
            {{ skicam.name }}
            <div class="skicams__date">
              {{ getCurrentDate() | localDate }}
            </div>
          </div>
          <picture v-if="isImageAvailable(skicam.cams, 0)">
            <img
              :src="getCameraPath(skicam.cams, 0)"
              :alt="getCameraName(skicam.cams, 0)"
              class="skicams__image"
            />
          </picture>
          <picture v-if="isImageAvailable(skicam.cams, 2)">
            <img
              :src="getCameraPath(skicam.cams, 2)"
              :alt="getCameraName(skicam.cams, 2)"
              class="skicams__image"
            />
          </picture>
        </div>
      </article>
    </template>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PageLoader from '@/components/MainComponents/PageLoader';

export default {
  name: 'skicams',
  components: { PageLoader },
  computed: {
    ...mapState('skicams', ['skicams', 'loading']),
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions('skicams', ['getSkiCam']),
    isImageAvailable(cams, element) {
      return Object.values(cams).length > element;
    },
    getCameraPath(cams, element) {
      return Object.values(cams)[element].url;
    },
    getCameraName(cams, element) {
      return Object.values(cams)[element].name;
    },
    getCurrentDate() {
      return new Date();
    },
    async init() {
      if (this.skicams.length === 0) {
        await this.getSkiCam();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.skicams {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: 0 -12px;

  @media (min-width: $md) {
    margin: 0 -20px;
  }

  &__item {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 20px 12px;

    @media (min-width: $sm) {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 20px;
    }
  }

  &__container {
    height: 100%;
    box-shadow: $box-shadow;
    background: $White;
  }

  &__title {
    position: relative;
    padding: 18px 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: $Matterhorn;
  }

  &__date {
    position: absolute;
    top: 8px;
    right: 11px;
    font-size: 12px;
    font-weight: 400;
    color: $Gainsboro;
  }

  &__image {
    display: block;
    max-width: 100%;
  }
}
</style>
