<template>
  <div class="home">
    <Header/>
    <Search></Search>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Search from '@/components/search.vue'

export default {
  name: 'home',
  components: {
    Header,
    Search
  }
}
</script>
