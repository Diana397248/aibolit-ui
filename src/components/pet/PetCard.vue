<template>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>


        <v-col class="d-flex flex-column">
          <Picture
              :img="props.pet.img"
              text-btn="Изменить"/>
        </v-col>

        <v-col class="d-flex flex-column gap-5">
          <p class="pet-name">{{ props.pet.name }}</p>
          <div>
            <Field label="тип" :text="props.pet.type"/>
            <Field label="пол" :text="props.pet.species"/>
            <Field label="порода" :text="props.pet.year_birth"/>
            <Field label="возраст" :text="props.pet.gender"/>
          </div>
        </v-col>


        <v-col>
          <div class="mb-7">
            <p class="text-aibolit-gray mb-3">медецинская карта</p>

            <div class="d-flex flex-column gap-3">
              <CardAnalysis></CardAnalysis>
            </div>
          </div>

          <div class="mb-7">
            <p class="text-aibolit-gray mb-3">результаты анализов</p>
            <div class="d-flex flex-column gap-3">
              <CardAnalysis></CardAnalysis>
              <CardAnalysis></CardAnalysis>
            </div>
          </div>

        </v-col>

      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import CardAnalysis from "@/components/profile/CardAnalysis.vue"
import Picture from "@/components/profile/Picture.vue"
import Field from "@/components/profile/Field.vue"

const props = defineProps({
  pet: Object
})
</script>

<style scoped>
.card {
  border-radius: 20px;
}

.pet-name {
  font-size: 30px;
  display: flex;
  gap: 20px;
}

</style>