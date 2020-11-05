import Vue from 'vue';

Vue.filter('localDate', (value, separator = '-') => {
  if (!value) return '';
  const date = value.toLocaleDateString();

  return separator ? date.replace(/\./g, `${separator}`) : date;
});
