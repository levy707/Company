<template>
  <nav class="page-menu">
    <ul class="page-menu__container">
      <li class="page-menu__item">
        <nuxt-link to="/" exact class="page-menu__link">About us</nuxt-link>
      </li>
      <li class="page-menu__item">
        <nuxt-link to="/skicams" class="page-menu__link">Skicams</nuxt-link>
      </li>
      <li class="page-menu__item">
        <nuxt-link to="/contact" class="page-menu__link">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageMenu',
};
</script>

<style lang="scss" scoped>
.page-menu {
  $root: &;

  &__container {
    display: flex;
    padding: 0;
    margin: 0 -20px;
    list-style: none;
  }

  &__item {
    & + #{$root}__item {
      margin-left: 17px;
    }
  }

  &__link {
    position: relative;
    display: block;
    padding: 11px 20px;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
    color: $Matterhorn;
    transition: color 0.3s ease-in-out;

    &:after {
      position: absolute;
      width: 0;
      height: 2px;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
      background: $BurntOrange;
      transition: width 0.3s ease-in-out;
      content: '';
    }

    &.nuxt-link-active {
      color: $BurntOrange;
      transition: color 0.3s ease-in-out;

      &:after {
        width: calc(100% - 40px);
        transition: width 0.3s ease-in-out;
      }
    }
  }
}
</style>
