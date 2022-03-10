<template>

  <div class ="Titulek">

    <RouterLink to="/FullArticle"><h3>Titulek</h3></RouterLink>
    </div>
  <div class ="Obrazek">
      <img src="https://picsum.photos/200/200">
  </div>
  <div class ="par">
    <span><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Fusce consectetuer risus a nunc. Cras pede libero, t harum quidem rerum facilis est et expedita distinctio. Integer tempor. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. </p>
</span>
  </div>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped>


.Titulek {

  display: flex;
  align-items: center;
  background-color: lightgray;
}
.Obrazek{

  float:left;
}
.par {

  display: flex;
  background-color: lightgray;
  max-height: 200px;
  margin-bottom: 10%;
}


</style>