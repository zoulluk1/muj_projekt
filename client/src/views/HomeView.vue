<script >
import Article from '@/components/Article.vue'
import TheWelcome from '@/components/TheWelcome.vue'
export default {
  components: {
    Article,

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
<div class>

</div>

  <div class = "">
    <Article/>
    <Article/>
  <Article/>
  </div>

</template>
