<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ props.cardData.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          {{ props.cardData.price }}р.
          <small class="text-muted fw-light">&times; {{ props.cardData.count }} шт.</small>
        </h1>
        <button @click="inc(props.cardData.product_id)" type="button" class="btn btn-lg btn-info mb-3">+</button>
        <button @click="dec(props.cardData.product_id)" type="button" class="btn btn-lg btn-warning mb-3">&minus;</button>
        <button @click="deleteItem(props.cardData.product_id)" type="button" class="btn btn-lg btn-outline-danger mb-3">
          Удалить из корзины
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {http} from "../../axios/index.js";

const props = defineProps({
  cardData: Object,
  updateCard: Function
})
const deleteItem = (id) => {
  http.delete(`/api/cart/${id}`)
      .then((res) => {
        props.updateCard()
      })
}

const inc = (id) => {
  http.post(`/api/cart/${id}`)
      .then((res) => {
        props.updateCard()
      })
}

const dec = (id) => {
  http.post(`/api/cart/${id}/decrement`)
      .then((res) => {
        props.updateCard()
      })
}
</script>

<style scoped>

</style>