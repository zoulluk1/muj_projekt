<script >
import Article from '@/components/Article.vue'
export default {
  components: {
    Article
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
}
</script>

<template>
  <main>

    <button type= "button" @click="onClick">count : {{ count }}</button>
    <Article/>
  </main>
</template>
