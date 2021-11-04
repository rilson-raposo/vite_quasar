<template>
  <q-page padding>
    <h3>Hello</h3>
    <div class="row q-col-gutter-md justify-around">
      <div class="col-4">
        <q-card>
          <q-card-section>
            <q-input v-model="name" label="Name" filled>
              <template #append>
                <q-btn flat round icon="mdi-content-save" color="primary" @click="doNavigate"></q-btn>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      name: 'RouteSlug'
    }
  },

  methods: {
    doNavigate () {
      this.$router.push('/hello/' + this.name)
    }
  }

}
</script>

<style>
</style>
