<template>
  <p class="title">Мои питомцы</p>
  <PetFormBlock/>
  <v-btn @click="getMyPets">x</v-btn>
  {{ JSON.stringify(myPets) }}
  <div class="d-flex flex-column gap-5">
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
  </div>

</template>

<script setup>
import PetInfo from "@/components/pet/PetCard.vue"
import PetFormBlock from "@/components/pet/PetFormBlock.vue"
import {http} from "@/axios/index.js";
import {ref} from "vue";

const myPets = ref([])

const getMyPets = () => {
  http.get('/api/pets')
      .then((res) => {
        myPets.value = res.data
      })
}

</script>

<style scoped>

</style>