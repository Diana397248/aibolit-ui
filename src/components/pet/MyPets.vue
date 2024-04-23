<template>
  <p class="title">Мои питомцы</p>
  <PetFormBlock/>

  <div class="d-flex flex-column gap-5">
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
  </div>

</template>

<script setup>
import PetInfo from "@/components/pet/PetCard.vue"
import PetFormBlock from "@/components/pet/PetFormBlock.vue"

</script>

<style scoped>

</style>