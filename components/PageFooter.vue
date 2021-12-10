<template>
  <div class="row">
      <img src="/change-badge.png" />
    </div>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style lang="scss" scoped>

  div {
    @apply mb-4;
    text-align: center;
  }

  img {
    width:50%;
    max-width: 280px;
    height: auto;
    display: block;
    margin: 1em auto;
    box-shadow: 0px 0px 12px rgba(255, 255, 255, .35);
  }

</style>
