<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a :href="item.url">{{ item.title }}</a>
      <span>{{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></span>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>
