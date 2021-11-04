<template>
  <q-page padding>
    <h3>Hello {{name}}</h3>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.name = this.$route.params.name
  }
}
</script>

<style>

</style>
