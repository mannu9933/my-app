<template>
  <div class="home-page">
    <div class="home">
      <div class="container">
        <h1 class="logo-font">Order List</h1>
        <v-divider></v-divider>
      </div>
    </div>
    <order-list :orders="orders"/>
  </div>
</template>

<script>
import {
  mapGetters,
} from 'vuex'

import OrderList from '@/components/OrderList'


export default {
  name: 'home',
  components: {
    OrderList
  },

  computed: {
    ...mapGetters('order',['orders']),
  }
}
</script>
