<template>
  <v-app>
    <v-main>
      <RwvHeader />
      <router-view></router-view>
      <RwvFooter />
    </v-main>
  </v-app>
</template>

<script>
import RwvHeader from '@/components/Header'
import RwvFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    RwvHeader,
    RwvFooter
  },
};
</script>
