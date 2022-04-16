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
    </footer>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import date from 'date-and-time'
import ru from 'date-and-time/locale/ru';

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
