import Vue from 'vue';

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
})
