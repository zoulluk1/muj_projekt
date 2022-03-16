<script >
import Article from '@/components/Article.vue'
import FullArticle from '@/views/FullArticleView.vue'

export default {
  components: {Article,FullArticle},

    data() {
      return {
        articles: [
          {
            id: 1,
            image: 'https://picsum.photos/seed/picsum/500',
            title: "Titulek",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
          {
            id: 2,
            image: 'https://picsum.photos/seed/picsum/500',
            title: "Titulek",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
          {
            id: 3,
            image: 'https://picsum.photos/seed/picsum/500',
            title: "Titulek",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
          },
        ]
      }
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
