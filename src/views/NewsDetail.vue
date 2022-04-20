<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="top">
      <a class="source" :href="source.link" target="_blank">{{ source.name }}</a>
      <div class="info-time">
        <time>
          <svg fill="#707070" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"/></svg>
          <span>{{ date.format(new Date(dt), 'ddd, MMMM DD, YYYY, HH:mm') }}</span>
        </time>
      </div>
      <div class="separator"></div>
      <img :src="'http://localhost:1337' + img" :alt="title">
    </div>
    <div class="">
      <div class="text"  v-html="text">
      </div>
      <p v-if="tags.length" class="tags">
        <strong>Теги:</strong>
        <ul>
          <li v-for="(t, k) in tags" :key="k">
            <a :href="'/tags/'+t.attributes.code" @click.prevent="">{{t.attributes.name}}</a>
            <span v-if="k < tags.length - 1">,</span>
          </li>
        </ul>
      </p>
      <!--div class="news-items pure-u-6-24">
        aside
      </div-->

    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';
import date from 'date-and-time'
import Showdown from 'showdown'
import ru from 'date-and-time/locale/ru'
date.locale(ru);

export default Vue.extend({
  name: 'NewsId',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  metaInfo: {
    title: "Государственные СМИ Китая Синьхуа выпустят NFT на фоне подавления криптовалют",
  },
  data () {
    return {
      baseUrl: '//localhost:1337/api/news/',
      date: date,
      title: "",
      source: {
        name: '', link: ''
      },
      tags: [],
      img: '',
      dt: '',
      text: '',
      code: []
    }
  },
  created () {
    axios.get(this.baseUrl + this.$route.params.id, {
      params: {
        fields: ['name', 'createdAt', 'text'],
        populate: {
          img: {
            fields: ['name', 'url'],
          },
          source: {
              fields: ['name', 'link'],
          },
          tags: {
              fields: ['name', 'code'],
          }
        }
      },
      paramsSerializer: p => {
        return qs.stringify(p)
      }
    })
    .then(response => {
      const converter = new Showdown.Converter();

      const attr = response.data.data.attributes
      this.title = attr.name
      this.text = converter.makeHtml(attr.text)
      this.dt = attr.createdAt
      this.img = attr.img.data ? attr.img.data.attributes.url : ''
      if (attr.source.data){
        this.source = attr.source.data.attributes
      }
      this.tags = attr.tags.data
    })
    .catch(response => {
      console.log(response);
    })
  }
})
</script>


<style lang="scss">
@import '~@/assets/vars';
h1 {
  margin-bottom: 1rem;
}
.top {
  
  a {
    color: #000;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    transition: $time-hover;

    &:hover {
      color: $link-color;
    }
  }

  img {
    margin-bottom: 2rem;
    max-width: 600px;
  }
}
.info-time {
  display: flex;
  align-items: center;
  color: #707070;

  time {
    display: flex;
    align-items: center;
    margin: 0.75em 0;
  }

  svg {
    margin-right: 0.7em;
    height: 1.35em;
  }
  span {
    font-size: 0.85em;
  }
}
.text {
  text-align: justify;
}
.separator {
  width: 20rem;
  margin-bottom: 2em;

  &::before {
    content: '';
    border-color: #000 transparent transparent;
    border-style: solid;
    border-width: 8px 3px 0 0;
    display: inline-block;
    width: 77%;
  }

  &::after {
    content: '';
    border-color: transparent transparent #E58614;
    border-style: solid;
    border-width: 0 0 9px 3px;
    display: inline-block;
    margin-left: 10px;
    width: 10%;
  }
}
.tags {
  display: flex;
  margin: 2em 0 1em;
  font-size: 1.15em;
  font-weight: bold;

  ul {
    margin: 0;
    padding-left: 1em;
    list-style-type: none;
    font-weight: normal;

    li {
      display: inline;

      & + li {
        padding-left: 0.5em;
      }
    }
  }
}
</style>

