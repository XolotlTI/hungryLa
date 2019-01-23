<template>
  <section class="container is-fullhd">
    <div class="header-columns content is-medium">
        <h1>{{title}}</h1>
    </div>
    <div class="body-columns content">
      <div class="columns">
        <Boxidea v-for="idea in ideas" :idea="idea" :key="idea.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Boxidea from './Boxidea'
export default {
  name: 'Container',
  components: {
    Boxidea
  },
  data () {
    return {
      title: 'Ideas',
      ideas: [
        {id: 1, name: 'huevo con jamon', img: 'https://via.placeholder.com/150', author: '@suweed'},
        {id: 2, name: 'huevo con salchicha', img: 'https://via.placeholder.com/150', author: '@suweed'}
      ]
    }
  }
}
</script>

<style>
.container.is-fullhd{
  min-height: calc(100vh - 70px);
}
.header-columns{
  text-align: center;
}
.columns {
  margin-left: 0;
  margin-right: 0;
}
</style>
