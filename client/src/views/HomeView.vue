<script >
import Article from '@/components/Article.vue'
import FullArticle from '@/views/FullArticleView.vue'

export default {
  components: {Article,FullArticle},

    data() {
      return {
        articles: []
      }
    },
    async created(){
    const res = await fetch('http://localhost:3000/articles',{method:'GET'});
    console.log(res);
    this.articles=await res.json();
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
      <Article :id="article.id" :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Article>
    </div>
  </div>




</template>
