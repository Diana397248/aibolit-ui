<template>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>


        <v-col class="d-flex flex-column" cols="4">
          <Picture
              img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              text-btn="Изменить"/>
        </v-col>

        <v-col class="d-flex flex-column gap-5">
          <p class="pet-name">Громопетр</p>
          <v-form fast-fail @submit.prevent>
            <v-text-field
                v-model="model.type"
                :rules="rules.type"
                label="тип" text="Собака"/>
            <v-text-field
                v-model="model.gender"
                :rules="rules.gender"
                label="пол" text="Мужской"/>
            <v-text-field
                v-model="model.breed"
                :rules="rules.breed"
                label="порода" text="Без породы"/>
            <v-text-field
                v-model="model.age"
                :rules="rules.age"
                label="возраст" text="1 год"/>
            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </v-col>

      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import Picture from "@/components/profile/Picture.vue"
import Field from "@/components/profile/Field.vue"

import {reactive} from 'vue'


const rules = {
  type: [
    value => {
      if (false) return true
      return 'Last name can not contain digits.'
    }
  ],
  gender: [
    value => {
      if (false) return true
      return 'Last name can not contain digits.'
    }
  ],
  breed: [
    value => {
      if (false) return true
      return 'Last name can not contain digits.'
    }
  ],
  age: [
    value => {
      if (value > 0) return true
      return 'Возраст должен быть больше 0'
    },
  ],
}

const model = reactive({
  type: "",
  gender: "",
  breed: "",
  age: "",
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