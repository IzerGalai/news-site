<template>
  <div class="home">
    <div class="news-items">
        <news-item
          v-for="(i, k) in news" :key="k" :title="i.title" :img="i.img"
          :datetime="i.dt" :description="i.desc" :tag="i.tag" :source="i.source"
          />
        <paginate
          :page-count="8"
          :click-handler="clickPageH"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'">
        </paginate>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsItem from '@/components/NewsItem.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    NewsItem,
  },
  data () {
    let news = [
      {
        title: "Криптозима уже наступила». Как обваливалась цена биткоина и что дальше",
        img: '/news-item1.png',
        dt: 1629184013000,
        desc: `Биткоин подешевел на 40% с исторического максимума. Эксперты рассказали, стоит ли ждать повторения сценария 2018 года, когда криптовалюты потеряли в цене 80-90%.
13 апреля биткоин торгуется по $41 тыс. В ноябре прошлого года криптовалюта установила исторический максимум на отметке в $69 тыс. С тех пор она подешевела на 40%.
Период, когда котировки криптовалют падают в течение длительного времени, называется криптозимой. Также она сигнализирует о падении интереса к сфере цифровых активов.`,
        tag: 'BTC',
        source: 'РБК',
      },
      {
        title: "Названа особенность будущих процессоров Intel",
        img: '/news-item2.png',
        dt: Date.now() - 3654000,
        desc: `Следующее поколение процессоров Intel для компьютеров будут работать с повышенной частотой. Об этом сообщает портал WCCF Tech со ссылкой на собственный источник в отрасли.
Речь идет о чипах 13-го поколения, которые получат название Raptor Lake. В них частота больших ядер может возрасти примерно на 300 МГц относительно процессоров текущей серии. То есть, условный флагман линейки i9 вплотную приблизится к рекордным 6 ГГц.`,
        tag: 'Intel',
        source: 'WCCF Tech',
      }
    ];
    return {
      news: [news[0], news[1],news[0], news[1],news[0], news[1],news[0], news[1],]
    }
  },
  methods: {
    clickPageH () {

    }
  }
});
</script>

<style lang="scss">
.home {
  padding-top: 2rem;
}
</style>