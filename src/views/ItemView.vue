<template>
  <div>
    <section>
    <div>
      {{ fetchedItem.data.title}}
    </div>
    <div>
      <router-link :to="`/user/${fetchedItem.data.user}`">{{ fetchedItem.data.user }}</router-link>
    </div>
    </section>
    <section>
      <div></div>
      <div></div>
    </section>


  </div>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
  .user-container {

  }
</style>
