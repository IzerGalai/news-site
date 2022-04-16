<template>
  <div>
    <h1>{{ title }} ({{ $route.params.id }})</h1>
    <div class="top">
      <a class="source" href="https://www.bloomberg.com/" target="_blank">Bloomberg News</a>
      <div class="info-time">
        <time>
          <svg fill="#707070" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"/></svg>
          <span>{{ date.format(new Date(dt), 'ddd, MMMM DD, YYYY, HH:mm') }}</span>
        </time>
      </div>
      <div class="separator"></div>
      <img src="/news-detail.png" :alt="title">
    </div>
    <div class="">
      <div class="text"  v-html="text">
      </div>
      <p class="tags">
        <strong>Tags:</strong>
        <ul>
          <li><a href="/tags/crypto">Критовалюты</a>,</li>
          <li><a href="/tags/eth">NFT</a></li>
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
import date from 'date-and-time'
import ru from 'date-and-time/locale/ru'
date.locale(ru);

export default Vue.extend({
  name: 'NewsId',
  components: {

  },
  metaInfo: {
    title: "Государственные СМИ Китая Синьхуа выпустят NFT на фоне подавления криптовалют",
  },
  data () {
    return {
      date: date,
      title: "Государственные СМИ Китая Синьхуа выпустят NFT на фоне подавления криптовалют",
      img: '/news-detail.png',
      dt: 1629184013000,
      text: `<p>Китайская государственная компания Blockchain Services Network (BSN) к концу января намерена развернуть инфраструктуру для оборота NFT-токенов, сообщила South China Morning Post.

        </p><p>Большая часть нынешних новостей о NFT-токенах связана с покупкой и продажей цифровых артефактов, однако власти КНР хотят применить NFT для выдачи различных сертификатов.

        </p><p>NFT (non-fungible tokens) означает «невзаимозаменяемый токен». Токены представляют собой запись в регистре внутри блокчейн-цепочки – базы данных, которая одновременно хранится на большом количестве компьютеров.

        </p><p>Каждый из NFT существует в единственном экземпляре, его нельзя разделить, а вся информация о его авторе, покупателе и всех операциях с ним хранится в блокчейне. То есть NFT – это цифровой сертификат, прикреплённый к уникальному объекту и свидетельствующий о его подлинности и принадлежности.

        </p><p>Чиновники намерены использовать NFT в том числе для выдачи идентификационных номеров автомобилей и дипломов об образовании. К примеру, технология позволит автовладельцам, госслужащим и страховщикам получать доступ к данным о пробеге транспортного средства, номеру двигателя и истории ремонта машины.

        </p><p>Создаваемая инфраструктура не предусматривает возможности оплаты или покупки NFT за криптовалюту. Подобные сделки запрещены в КНР.

        </p><p><strong>Как сообщает BSN:</strong></p>

        <blockquote>Бизнесу и физическим лицам будет предоставлен интерфейс программирования для создания собственных порталов или приложений для работы с NFT. Покупать и продавать токены можно будет только за китайские юани.
        </blockquote>

        </p><p>Среди китайских компаний, которые уже занялись реализацией NFT-токенов, значатся Alibaba Group, Tencent, JD.com и Baidu. В конце декабря коллекцию фоторепортажей в виде NFT выпустило китайское новостное агентство Синьхуа. По словам одного из разработчиков инфраструктуры, в ближайшее время в Китае будут созданы миллиарды NFT-токенов.

        </p>
      `,
    }
  },
})
</script>


<style lang="scss">
@import '~@/assets/vars';
h1 {
  margin-bottom: 1rem;
}
.top {
  
  a {
    display: block;
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

