<template>
<div class="column" :id="idea.id">
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img :src="idea.img" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <router-link to="/new">Navigate to Page2</router-link>
          <strong>{{ idea.name }}</strong>
        </p>
        <p>
          <small>{{ idea.author }}</small>
        </p>
        <p>
          <small>31m</small>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="far fa-eye" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="far fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
</div>
</template>

<script>
export default {
  name: 'Boxidea',
  props: ['idea']
}
</script>

<style>
.content figure {
  margin-left: 0;
  margin-right: 0;
}
.media-left {
  margin-right: 0;
}
.media-content{
  margin-left: 5px;
}
.box{
  padding: 1.25rem 10px;
}
nav.level{
    float: right;
}
</style>
