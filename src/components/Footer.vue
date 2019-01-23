<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>{{ nameapp }}</strong> by <a href="#">{{ autorapp }}</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      nameapp: 'HungryLa',
      autorapp: 'Suweed'
    }
  },
  mounted () {
  }
}
</script>

<style>
.footer{
  height: 50px;
}
.footer a {
    color: #000;
}
</style>
