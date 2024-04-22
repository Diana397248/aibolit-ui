<template>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>


        <v-col class="d-flex flex-column">
          <Picture
              img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              text-btn="Изменить"/>
        </v-col>

        <v-col class="d-flex flex-column gap-5">
          <p class="pet-name">Громопетр</p>
          <div>
            <Field label="тип" text="Собака"/>
            <Field label="пол" text="Мужской"/>
            <Field label="порода" text="Без породы"/>
            <Field label="возраст" text="1 год"/>
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