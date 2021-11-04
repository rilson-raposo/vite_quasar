<template>
  <q-page padding>
    <h3>Index Page</h3>
    <div class="row justify-around">
      <div class="col-3">
        <q-card>
          <q-card-section>
            <q-input
              label="Store"
              v-model="countStore.counter"
              filled
            >
              <template #before>
                <q-btn
                  flat
                  round
                  icon="mdi-chevron-left"
                  color="primary"
                  @click="countStore.decrement()"
                ></q-btn>
              </template>
              <template #after>
                <q-btn
                  flat
                  round
                  icon="mdi-chevron-right"
                  color="primary"
                  @click="countStore.increment()"
                ></q-btn>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { countStore } from '../store/count.js'
import { mapStores } from 'pinia'
export default {
  computed: {
    ...mapStores(countStore)
  }
}
</script>

<style>
</style>
