<template>
  <p class="title">Мои питомцы</p>

  <v-btn color="#FFC59E" class="btn-add mb-8 text-white fs-3 fw-bold" block="">
    <template v-slot:prepend>
      <v-icon
          size="133"
          :icon="AddPetIcon"
      />
    </template>

    Добавить нового питомца

  </v-btn>

  <div class="d-flex flex-column gap-5">
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
    <PetInfo></PetInfo>
  </div>

</template>

<script setup>
import PetInfo from "@/components/profile/PetInfo.vue"
import AddPetIcon from "@/components/icons/AddPetIcon.vue"

</script>

<style scoped>
.btn-add {
  height: 150px !important;
  border-radius: 20px;
}
</style>