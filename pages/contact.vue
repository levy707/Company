<template>
  <section class="contact">
    <div class="contact__box">
      <contact-form />
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/Forms/ContactForm';
export default {
  name: 'contact',
  components: { ContactForm },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__box {
    width: 100%;
    padding: 40px 30px 50px;
    background: $White;
    box-shadow: $box-shadow;

    @media (min-width: $sm) {
      width: 465px;
      padding: 60px 110px 75px;
    }
  }
}
</style>
