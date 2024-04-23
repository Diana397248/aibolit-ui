<template>
  <p class="title">Изменение профиля</p>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>

        <v-col class="d-flex flex-column gap-5">

          <v-form fast-fail @submit.prevent>
            <v-text-field
                v-model="model.name"
                :rules="rules.name"
                label="имя" text="Собака"/>
            <v-text-field
                v-model="model.surname"
                :rules="rules.surname"
                label="фамилия" text="Мужской"/>
            <v-text-field
                v-model="model.patronymic"
                :rules="rules.patronymic"
                label="отчество" text="Без породы"/>
            <v-text-field
                v-model="model.age"
                :rules="rules.age"
                label="телефон" text="1 год"/>
            <v-text-field
                v-model="model.age"
                :rules="rules.age"
                label="О себе" text="1 год"/>
            <v-btn class="mt-2" type="submit" block>Изменить</v-btn>
          </v-form>
        </v-col>

      </v-row>
    </v-card-text>
  </v-card>

</template>

<script setup>
import {reactive} from 'vue'


const rules = {
  name: [
    value => {
      if (false) return true
      return 'Это поле не может быть пустым'
    }
  ],
  surname: [
    value => {
      if (false) return true
      return 'Это поле не может быть пустым'
    }
  ],
  patronymic: [
    value => {
      if (false) return true
      return 'Это поле не может быть пустым'
    }
  ],
  number: [
    value => {
      if (value > 0) return true
      return 'Возраст должен быть больше 0'
    },
  ],
  description: [
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

</style>