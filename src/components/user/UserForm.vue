<template>
  <p class="title">Изменение профиля</p>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>

        <v-col class="d-flex flex-column align-center justify-content-center " cols="4">
          <image-input v-model="avatar"/>
        </v-col>

        <v-col class="d-flex flex-column gap-5">
          <v-form fast-fail @submit.prevent>
            <v-text-field
                v-model="model.name"
                :rules="rules.name"
                label="имя"/>
            <v-text-field
                v-model="model.surname"
                :rules="rules.surname"
                label="фамилия"/>
            <v-text-field
                v-model="model.patronymic"
                :rules="rules.patronymic"
                label="отчество"/>
            <v-text-field
                v-model="model.number"
                :rules="rules.number"
                label="телефон"/>
            <v-text-field
                v-model="model.about_me"
                :rules="rules.about_me"
                label="о себе"/>
<!--            TODO сделать кнопке размер-->
            <v-btn class="mt-2 text-white fw-bold" color="#FFC59E" type="submit" block>Изменить</v-btn>
          </v-form>
        </v-col>

      </v-row>
    </v-card-text>
  </v-card>

</template>

<script setup>
import {reactive} from 'vue'

import ImageInput from "@/components/base/ImageInput.vue"


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
      return 'Введите свой номер телефона'
    },
  ],
  //TODO это не обязательное поле
  // about_me: [
  //   value => {
  //     if (value > 0) return true
  //     return 'Расскажите о себе'
  //   },
  // ],
}

const model = reactive({
  type: "",
  gender: "",
  breed: "",
  age: "",
})
</script>

<style scoped>
:deep(.v-field__field label) {
  margin-left: 10px !important;
}
</style>