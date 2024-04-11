<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Корзина</h1>
  </div>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <CartCard v-for="c in items" :cardData="c" :updateCard="updateCartData"/>
  </div>
  <div class="row justify-content-center gap-1">
    <h2 v-if="items.length ===0 && requestSuccess" class="mb-5">ваша корзина пуста добавьте продукт</h2>
    <h2 v-if="items.length !==0" class="mb-5">Итоговая стоимость: {{ allPrice }}р.</h2>
    <button @click="confirmOrder" v-if="items.length !==0" type="button" class="col-6 btn btn-lg btn-primary mb-3">
      Оформить заказ
    </button>
  </div>
</template>

<script setup>
import CartCard from "../../components/cart/CartCard.vue"
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";
import {useRouter} from "vue-router";

let items = ref([])
let allPrice = ref(0)
let requestSuccess = ref(false)
const router = useRouter();

const confirmOrder = () => {
  http.post("/api/order")
      .then((res) => {
        router.push({name: 'MyOrders'})
      })
}

const updateCartData = () => {
  http.get("/api/cart")
      .then((res) => {
        requestSuccess.value = true
        items.value = res.data.content
        allPrice.value = 0
        for (const i of res.data.content) {
          allPrice.value += i.price * i.count
        }
      })
}

onMounted(() => {
  updateCartData()
})
</script>

<style scoped>

</style>