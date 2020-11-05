<template>
  <form>
    <form-field
      label="Name"
      :rules="rules['required']"
      :is-required="true"
      @inputValueChanged="form.name = $event"
    />
    <form-field
      label="Email"
      :rules="rules['email']"
      :is-required="true"
      @inputValueChanged="form.email = $event"
    />
    <form-field
      label="Message"
      type="textarea"
      @inputValueChanged="form.message = $event"
    />
    <div class="button-box">
      <button class="page-button" @click.prevent="validate()">Send</button>
    </div>
  </form>
</template>

<script>
import formMixin from '@/plugins/mixins/formMixin';
import FormField from '@/components/FormField';
export default {
  name: 'ContactForm',
  components: { FormField },
  mixins: [formMixin],
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    validate() {
      this.$emit('checkError', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  padding-top: 20px;
  justify-content: flex-end;
}
</style>
