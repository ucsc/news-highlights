<template>
  <div class="row">
    <div>
      <Highlight
        v-for="item in highlights"
        :id="item.id"
        :key="item.id"
        :date="item.date"
        :title="item.title"
        :teaser="item.teaser"
        :url="item.url"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
import Highlight from '../components/Highlight'
export default {
  name: 'Home',
  components: {
    Highlight,
  },
  async asyncData ({ $content }) {
    const highlights = await $content('2021-articles').sortBy('id', 'asc').fetch();
    return {
      highlights
    };
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */

.links {
  padding-top: 15px;
}
</style>
