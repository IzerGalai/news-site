<template>
  <div id="app" class="main-wrap">
    <div class="content">
      <header>
        <div class="wrap">
          <div class="logo">
            <img src="./assets/logo.png" alt="News">
          </div>
          <div class="title">
            Новостной портал
          </div>
        </div>
      </header>
      <div class="menu">
        <div class="menu-center">
          <nav>
            <router-link to="/" exact>Новости</router-link>
            <router-link to="/about">О нас</router-link>
          </nav>
          <div class="menu-time">
            {{ date.format(new Date(), 'ddd, DD MMMM YYYY г, HH:mm') }}
          </div>
        </div>
        <div class="menu-right"></div>
      </div>
      <main>
        <div class="wrap">
          <router-view/>
        </div>
      </main>
    </div>
    <footer class="footer">
      <div class="wrap">
        <div class="footer-info">
           Контент, представленный на нашем сайте, связанных сайтах, форумах, а также в приложениях, аккаунтах в социальных сетях, блогах и на других платформах, получен из сторонних источников и предназначен исключительно для информационных целей. Мы не даем гарантий в отношении этого контента, в том числе в отношении его актуальности и достоверности. 
        </div>
        <div class="copyright">Copyright © 2022 IzerGalai</div>
      </div>
      <back-to-top
        bottom="50px"
        right="50px"
        :visibleoffset="300">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="12px" height="12px" fill="#FFF" viewBox="0 0 30.728 30.729" style="enable-background:new 0 0 30.728 30.729;" xml:space="preserve">
          <g>
            <path d="M29.996,24.08c-0.977,0.978-2.561,0.978-3.535,0L15.365,12.985L4.268,24.081C3.78,24.568,3.14,24.812,2.5,24.812
              s-1.28-0.244-1.768-0.731c-0.977-0.978-0.977-2.56,0-3.535L15.364,5.915l14.63,14.629C30.972,21.521,30.972,23.104,29.996,24.08z"
              />
          </g>
        </svg>
      </back-to-top>
    </footer>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import date from 'date-and-time'
import ru from 'date-and-time/locale/ru'
date.locale(ru);


export default Vue.extend({
  name: 'App',
  metaInfo: {
    title: 'Главная',
    titleTemplate: '%s - Новостной портал',
  },
  data () {
    return {
      date: date
    }
  },
});
</script>


<style lang="scss">

</style>
