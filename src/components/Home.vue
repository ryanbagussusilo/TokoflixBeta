<template>
  <section class="home">
    <div class="saldo">
      <h3>Saldo Anda {{this.$cookie.get('saldo')}}</h3>
    </div>
    <movies-list v-for="item in listTypes" v-if="item.isCategory" :type="'component'" :mode="'collection'" :category="item.query" :shortList="true"></movies-list>
  </section>
</template>

<script>
import storage from '../storage.js'
import MoviesList from './MoviesList.vue'

export default {
  components: { MoviesList },
  name: 'home-category',
  data () {
    return {
      listTypes: storage.listTypes
    }
  },
  created () {
    document.title = 'Tokoflix'
    storage.backTitle = document.title
    this.$cookie.get('saldo')
  }
}
</script>

<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";
.home{
  &__header{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    background-color: $c-dark;
    @include tablet-min{
      height: 384px;
    }
    &:before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($c-light, 0.7);
    }
    &-wrap{
      text-align: center;
      position: relative;
    }
    &-title{
      font-weight: 500;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: $c-dark;
      margin: 0;
      @include tablet-min{
        font-size: 28px;
      }
    }
    &-subtitle{
      display: block;
      font-size: 14px;
      font-weight: 300;
      color: $c-dark;
      margin: 5px 0;
      @include tablet-min{
        font-size: 16px;
      }
    }
    &-link{
      text-decoration: none;
      color: $c-dark;
      font-size: 13px;
      font-weight: 300;
      opacity: 0.7;
      transition: opacity 0.5s ease;
      &:hover{
        opacity: 1;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
      &-icon{
        display: inline-block;
        vertical-align: middle;
        margin-right: 2px;
        width: 16px;
        height: 15px;
        fill: $c-dark;
      }
    }
  }
  .saldo{
    text-align: right;
  }
  .wrapper{
    min-height: 0;
  }
  .movies__list{
    .movies__item:last-child{
      display: none;
      @include desktop-min{
        display: block;
      }
    }
  }
}
</style>
