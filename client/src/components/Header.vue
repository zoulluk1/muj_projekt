<template>
  <header class="cs-header">
    <div class="container">
      <div class="row">
        <div class="col text-center text-black">
          <h1 class="pt-5">Blog</h1>
          <span class="subheading text-black">Vítejte na mém blogu</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.cs-header {
  background-image: url('https://picsum.photos/id/1/1920/500?blur=1');
  background-repeat: no-repeat;
  background-position: top center;
  height: 40vh;
}
</style>