<template>
  <header class="ucsc-header">
    <div class="row">
      <div class="header-left">
        <Logo />
      </div>
      <div class="header-right">
        <a href="/">Back to Newscenter</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

$blue: #00458c;
$gold: #f1af13;
$white: #fff;

.ucsc-header {
  padding: .5em 0;
  background-color: $blue;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;
  max-width: 67.5em;
  margin-left: auto;
  margin-right: auto;
  color: #333;
}

.header-right {
  display: flex;
  flex-direction: row;

  a:link,
  a:visited {
    color: $white;
    padding: 0.25em;
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }

  a:hover,
  a:focus {
    border-bottom: 1px solid $gold;
    background-color: lighten($blue, 10%);
  }

  a:active {
    background-color: lighten($blue, 14%);
    border-bottom: 1px solid $white;
  }

}

.header-left {
  display: flex;
}

.campus-home {
  font-size: 1.4rem;
  color: $white;
  font-weight: 600;
}

</style>
