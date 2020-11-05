<template>
  <article class="item">
    <div class="item__container">
      <picture>
        <img
          :src="getImage(data.image)"
          :alt="data.title"
          class="item__image"
        />
      </picture>
      <div class="item__text-box">
        <div class="item__title">
          {{ data.title }}
        </div>
        <div class="item__description">
          {{ data.description }}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getImage(image) {
      try {
        return require(`~/assets/images/about-us/${image}`);
      } catch (e) {
        return require(`~/assets/images/about-us/default.png`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding: 20px 12px;

  @media (min-width: $md) {
    padding: 20px;
  }

  &__container {
    box-shadow: $box-shadow;
  }

  &__image {
    max-width: 100%;
  }

  &__text-box {
    padding: 24px 19px 34px 19px;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
