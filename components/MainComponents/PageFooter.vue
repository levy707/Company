<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__description">
        Powered by Company
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid $DodgerBlue;
  color: $Nobel;
  background: $Nero;

  &__description {
    max-width: 300px;
    margin: 18px auto 28px;
    padding-top: 20px;
    border-top: 1px solid $Charcoal;
    text-align: center;
  }
}
</style>
