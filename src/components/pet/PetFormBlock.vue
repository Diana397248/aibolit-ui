<template>
  <template v-if="isEdit">
    <PetForm @updatePets="updatePets" @close="changeMode" class="mb-8"/>
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
const emmit = defineEmits([
  'updatePets'
])

const updatePets = () => {
  emmit('updatePets')
}
</script>

<style scoped>

</style>