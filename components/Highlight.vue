<template>
  <a :href="url + '?ref=yir'" :id="'#highlight_' + id" class="transition duration-300 ease-in-out shadow block mb-6 flex flex-col sm:flex-row p-6 font-sans bg-white">
    <div class="text sm:w-3/5">
      <p class="date">{{ date | formatDate }}</p>
      <h2 class="title text-xl md:text-3xl md:leading-10">{{ title }}</h2>
      <p class="teaser text-sm md:text-base">{{ teaser }}</p>
    </div>
    <div class="media sm:w-2/5">
      <img class="image" :src="image.url" :alt="image.text" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Highlight',
  props: ['id', 'date', 'title', 'teaser', 'url', 'image'],
}
</script>

<style lang="scss" scoped>
a {

    @apply rounded-md;

    &:focus,
    &:hover,
    &:active {
      @apply bg-gradient-to-b from-white via-white to-pink-100 shadow-lg;
    }
}

.media {
  @apply h-full block p-2;
}

.date {
  @apply text-gray-700 text-base;
}

.text {
  @apply p-2 text-gray-800;
}

img {
  @apply h-auto w-full block;
}

.title {
  @apply mb-3 font-black text-blue-800;
}

</style>
