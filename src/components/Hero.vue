<template>
<section class="hero is-dark is-bold">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/title.png" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <b-tooltip label="descubre" position="is-bottom">
            <a class="navbar-item is-active">
              <i class="fas fa-lightbulb"></i>
              <span class="item-navbar-label">descubre</span>
            </a>
          </b-tooltip>
          <b-tooltip label="nueva idea" position="is-bottom">
            <a class="navbar-item">
              <i class="fas fa-plus-circle"></i>
              <span class="item-navbar-label">nueva idea</span>
            </a>
          </b-tooltip>
          <b-tooltip label="mi cuenta" position="is-bottom">
            <a class="navbar-item">
              <i class="fas fa-user-circle"></i>
              <span class="item-navbar-label">mi cuenta</span>
            </a>
          </b-tooltip>
        </div>
      </div>
    </div>
  </nav>
</section>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      title: 'HungryLa',
      subtitle: 'Ideas para comer'
    }
  },
  mounted () {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target
            const $target = document.getElementById(target)
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })
  }
}
</script>

<style>
#navbarMenuHeroA{
  text-align: center;
}
.item-navbar-label{
  font-size: 10px;
  margin-left: 5px;
}
</style>
