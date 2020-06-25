<script>
export default {
  computed: {
    ...mapGetters(['fetchedAsk'])
  },
  created() {
    this.$stre.dispatch('FETCH_ASK')
  }
}


</script>