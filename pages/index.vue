<template>
  <section class="about-us">
    <div class="about-us__container">
      <article-item
        v-for="(item, index) in items"
        :key="`about-us-item__${index}`"
        :data="item"
        class="about-us__item"
      />
    </div>
  </section>
</template>

<script>
import ArticleItem from '@/components/ArticleItem';
export default {
  name: 'index',
  components: { ArticleItem },
  data() {
    return {
      items: [
        {
          image: 'about_us_1.png',
          title: 'Lorem ipsum',
          description:
            'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas',
        },
        {
          image: 'about_us_2.png',
          title: 'Lorem ipsum',
          description:
            'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas',
        },
        {
          image: 'about_us_3.png',
          title: 'Lorem ipsum',
          description:
            'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: $sm) {
    max-width: 600px;
  }

  @media (min-width: $md) {
    max-width: none;
    margin: 0;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;

    @media (min-width: $md) {
      margin: 0 -20px;
    }
  }

  &__item {
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: $sm) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media (min-width: $md) {
      flex: 0 0 33.333%;
      max-width: 33.333%;
    }
  }
}
</style>
