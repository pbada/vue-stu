<template>
  <div>
    <p v-for="job in jobs">
      <a :href="job.url">{{ job.title }}</a>
      <span>{{ job.time_ago }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>




