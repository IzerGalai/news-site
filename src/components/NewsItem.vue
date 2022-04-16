<template>
  <article>
    <a class="" href="/fds/">
      <div class="img">
        <div class="wrap">
          <img :src="this.img" alt="">
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="info">
            <p class="tag">{{ this.tag }}</p>
            <p class="source">{{ this.source }}</p>
          </div>
          <h2>{{ this.title }}</h2>
          <div class="desc">
            <p>{{ this.description }}</p>
          </div>
          <time>
            <svg fill="#707070" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"/></svg>
            <span>{{ date.format(new Date(this.datetime), 'ddd, MMMM DD, YYYY, HH:mm') }}</span>
          </time>
        </div>
      </div>
    </a>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import date from 'date-and-time'
import ru from 'date-and-time/locale/ru'
date.locale(ru);

export default Vue.extend({
  name: 'NewsItem',
  components: {
    
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    img: String,
    datetime: {
      type: Number,
      required: true,
    },
    description: String,
    tag: String,
    source: String
  },
  data () {
    return {
      date: date
    }
  },
  methods: {

  }
})
</script>


<style lang="scss" scoped>
@import '@/assets/vars';

  h2 {
    margin: 0.3em 0;
    font-size: 1.6em;
    transition-duration: $time-hover;
  }
  a {
    height: 100%;
    display: flex;
    color: #000;
    text-decoration: none;
    border-bottom: none;
  }
  article {
    height: 11rem;

    & + article {
      margin-top: 2rem;
    }
    
    &:hover h2 {
      color: $link-color;
    }
    p {
      margin: 0;
    }
  }
  .img {
    width: 25%;
  }
  .content {
    width: 70%;

    > .wrap {
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      padding-left: 1.5rem;
    }
  }
  .info {
    display: flex;
    align-items: center;
    color: #707070;

  }
  .tag {
    color: $link-color;
    font-weight: bold;
  }
  p.source {
    margin-left: 1.5em;
    font-size: 0.8em;
  }
  .duration {
    position: relative;
    margin-left: 0;
    font-size: 0.8em;
    
    &::before {
      content: '•';
      margin: 0 0.7em;
    }
  }
  .desc {
    position: relative;
    height: 60%;
    overflow: hidden;
    text-align: justify;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      height: 2rem;
      background: linear-gradient(transparent, #F8F8F8);
    }
  }
  time {
    display: flex;
    align-items: center;
    color: #707070;
    margin-top: 0.3em;

    svg {
      margin-right: 0.7em;
      height: 1.35em;
    }
    span {
      font-size: 0.85em;
    }
  }
</style>