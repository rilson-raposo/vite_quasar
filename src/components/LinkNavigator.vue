<template>
  <q-toolbar color="primary text-white">
    <q-icon name="mdi-menu"></q-icon>
    <q-toolbar-title>
     Vite+Quasar
    </q-toolbar-title>
    <q-space></q-space>
    <q-btn flat stretch label="Home" @click="doNavigate('')"></q-btn>
    <q-btn flat stretch label="Hello" @click="doNavigate('hello')"></q-btn>
  </q-toolbar>
</template>

<script>
export default {
  methods: {
    doNavigate (whereTo) {
      console.log('whereTo', whereTo)
      this.$router.push('/' + whereTo)
    }
  }
}
</script>

<style>

</style>
