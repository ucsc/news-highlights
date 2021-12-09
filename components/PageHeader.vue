<template>
  <div class="row">
    <div>
      <h1 class="text-3xl leading-10 md:text-4xl md:leading-normal">2021: A year of giving voice to the challenges of our time</h1>
      <p>With purpose-driven and persistent effort, we sought to advance justice, push the envelope of knowledge, and advocate for transformative change.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
}
</script>

<style lang="scss" scoped>

  div {
    @apply my-4;
  }

  h1 {
    @apply text-blue-800 font-bold mb-0;
    animation: .5s appear;

  }

  p {
    @apply text-2xl text-blue-700 font-medium mt-1 py-0;
    animation: .85s appear;
  }

  @keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
