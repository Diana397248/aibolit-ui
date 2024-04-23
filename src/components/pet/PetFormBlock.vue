<template>
  <template v-if="isEdit">
    <PetForm @close="changeMode" class="mb-8"/>
  </template>

  <template v-else>
    <AddPetBtn @click="changeMode" class="mb-8"/>
  </template>
</template>

<script setup>
import AddPetBtn from "@/components/base/AddPetBtn.vue"
import {ref} from "vue";
import PetForm from "@/components/pet/PetForm.vue";

const isEdit = ref(false)

const changeMode = () => {
  isEdit.value = !isEdit.value
}

</script>

<style scoped>

</style>