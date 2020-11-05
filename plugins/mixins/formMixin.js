import regex from '@/plugins/regex';

const formMixin = {
  data() {
    return {
      rules: {
        email: [
          (v) => this.getValidationMessage(v),
          (v) =>
            this.getRegexValidationMessage(
              regex.email,
              v,
              'Email is not correct.'
            ),
        ],
        required: [(v) => this.getValidationMessage(v)],
      },
    };
  },
  methods: {
    getRegexValidationMessage(regex, valueToTest, message) {
      return new RegExp(regex).test(valueToTest) || message;
    },
    getValidationMessage(v) {
      return !!v || 'Field is required.';
    },
  },
};

export default formMixin;
