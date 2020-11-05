<template>
  <div class="full-page">
    <page-header />
    <main class="layout">
      <div class="container">
        <nuxt />
      </div>
    </main>
    <page-footer />
  </div>
</template>
<script>
import PageHeader from '@/components/MainComponents/PageHeader';
import PageFooter from '@/components/MainComponents/PageFooter';

export default {
  name: 'default',
  components: { PageHeader, PageFooter },
};
</script>
<style lang="scss">
.full-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $WhiteSmoke;
  overflow: hidden;

  .layout {
    display: flex;
    flex-grow: 1;
  }
}
</style>
