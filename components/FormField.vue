<template>
  <label
    :class="[
      'form-field',
      { 'form-field--focused': isFocus },
      { 'form-field--not-empty': !isInputEmpty },
      { 'form-field--has-error': isError },
    ]"
  >
    <input
      v-if="type === 'input'"
      v-model="inputValue"
      :type="type"
      class="form-field__input"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <textarea
      v-if="type === 'textarea'"
      v-model="inputValue"
      :type="type"
      class="form-field__textarea"
      @focus="isFocus = true"
      @blur="isFocus = false"
    ></textarea>
    <span class="form-field__label">
      {{ label }}
      <span v-if="isRequired" class="form-field__label-required">*</span>
    </span>
    <span v-if="isError">
      <span
        v-for="(error, index) in errors"
        :key="`${label}_${index}`"
        class="form-field__error-item"
      >
        {{ error }}
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'input',
    },
    fieldType: {
      type: String,
      default: 'text',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      errors: [],
    };
  },
  computed: {
    isInputEmpty() {
      return this.inputValue.length === 0;
    },
    isError() {
      return this.errors.length !== 0;
    },
  },
  watch: {
    inputValue() {
      this.$emit('inputValueChanged', this.inputValue);
    },
  },
  created() {
    this.$parent.$on('checkError', this.checkError);
  },
  methods: {
    checkError() {
      this.errors = this.rules
        .map((item) => item(this.inputValue))
        .filter((item) => item !== true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
