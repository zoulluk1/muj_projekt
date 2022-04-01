<template>

  <div class="card mb-3" style="max-width: 540px;max-height: 600px ">
    <div class="row g-0">
      <div class="col-xl-3 col-lg-4">
        <img :src="image" alt="" class="card-img img-fluid p-1">
      </div>
      <div class="col-xl-9 col-lg-8">
        <div class="card-body">
          <h4 class="card-title">{{ title }} {{id}}</h4>
          <h6 class="card-subtitle">{{ formattedDate }}</h6>
          <p class="card-text text-truncate">{{text}}</p>


          <router-link :to="`/FullArticle/${id}`" class="btn btn-primary">Zobrazit celý článek</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    id: Number,
    title: String,
    date: String,
    text: String,
    image: String
  },
  computed: {

    formattedDate() {

      return new Date(this.date).toLocaleDateString()
    }
  }

}
</script>

<style scoped>


</style>