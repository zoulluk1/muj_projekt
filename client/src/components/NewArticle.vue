<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Přidejde nový článek</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Zadejte titulek </label>
            <input v-model="article.title" type="text" class="form-control" placeholder="Titulek"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Vložte text článku</label>
            <textarea v-model="article.text" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Vložte obrázek</label>
            <input @change="onImage" class="form-control" type="file" id="file">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click= "send" class="btn float-end btn-primary">Odeslat <em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      article: {

        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    onImage(e) {

    },
    async send() {
      try {
        console.log(this.article);
        await fetch('http://localhost:3000/articles',
            {
              method: 'POST',
              body: JSON.stringify(this.article),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }
}

</script>

<style scoped>

</style>
