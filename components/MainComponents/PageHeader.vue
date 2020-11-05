<template>
  <header class="header">
    <div class="container">
      <picture>
        <img
          :src="require('assets/images/logo.png')"
          alt="Company Logo"
          class="header__logo"
        />
      </picture>
      <page-menu />
    </div>
  </header>
</template>

<script>
import PageMenu from '@/components/MainComponents/PageMenu';
export default {
  name: 'PageHeader',
  components: { PageMenu },
};
</script>

<style lang="scss" scoped>
.header {
  background: $White;
  border-bottom: 1px solid $Gainsboro;

  .container {
    padding-bottom: 0;
    flex-direction: column;
  }

  &__logo {
    padding: 26px 0 20px;
    max-width: 100%;
  }
}
</style>
