<template>
  <div id="app">
    <Hero />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero'
import Container from './components/Container'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Hero,
    Container,
    Footer
  }
}
</script>

<style>
</style>
