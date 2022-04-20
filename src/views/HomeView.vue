<template>
  <div class="home">
    <div class="news-items">
      <news-item
        v-for="(i, k) in news" :key="k"
        :title="i.attributes.name" :href="'/news/'+i.attributes.slug" :datetime="i.attributes.createdAt" :description="i.attributes.description"
        :img="i.attributes.preview_img.data ? 'http://localhost:1337' + i.attributes.preview_img.data.attributes.url : ''"
        :tag="i.attributes.tags.data ? i.attributes.tags.data[0].attributes.name : ''"
        :source="i.attributes.source.data ? i.attributes.source.data.attributes.name : ''"
        />
      <div v-if="this.pageCount > 1">
        <paginate
          :page-count="pageCount"
          :click-handler="clickPageH"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'">
        </paginate>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsItem from '@/components/NewsItem.vue'; // @ is an alias to /src
import axios from 'axios'
import qs from 'qs';

export default Vue.extend({
  name: 'HomeView',
  components: {
    NewsItem,
  },
  data () {
    return {
      pageCount: 0,
      baseUrl: '//localhost:1337/api',
      page: 1,
      limit: 6,
      news: []
    }
  },
  methods: {
    clickPageH (n) {
      this.page = n
      this.getNews()
    },
    getNews () {
      axios.get(this.baseUrl+'/news', {
        params: {
          //locale: 'ru-RU',
          sort: [ 'createdAt:desc' ],
          pagination: {
            start: (this.page-1)*this.limit,
            limit: this.limit
          },
          fields: ['name', 'slug', 'description', 'createdAt'],
          populate: {
            preview_img: {
              fields: ['name', 'url'],
            },
            source: {
               fields: ['name'],
            },
            tags: {
               fields: ['name'],
            }
          }
        },
        paramsSerializer: p => {
          return qs.stringify(p)
        }
      })
        .then(response => {
          this.news = response.data.data;
          this.pageCount = Math.ceil(response.data.meta.pagination.total / this.limit);
        })
        .catch(response => {
          console.log(response);
        })
    }
  },
  created () {
    this.getNews()
  }
});
</script>

<style lang="scss">
.home {
  padding-top: 2rem;
}
</style>