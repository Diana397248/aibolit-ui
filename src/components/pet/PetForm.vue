<template>
  <v-card class="pa-8 card ">
    <v-card-text>
      <v-row>

        <v-col class="d-flex flex-column align-center justify-content-center " cols="4">
          <image-input v-model="avatar"/>
        </v-col>

        <v-col class="d-flex flex-column gap-5">

          <v-row justify="space-between" class="mx-3">
            <p class="pet-name">Громопетр</p>
            <v-btn @click="emmit('close')" color="rgba(245, 67, 55, 0.94)" :icon="CloseIcon"></v-btn>
          </v-row>

          <v-form @submit.prevent>
            <v-text-field
                v-model="model.name"
                :rules="rules.name"
                label="имя"/>
            <v-text-field
                v-model="model.type"
                :rules="rules.type"
                label="тип"/>
            <v-text-field
                v-model="model.gender"
                :rules="rules.gender"
                label="пол"/>
            <v-text-field
                v-model="model.breed"
                :rules="rules.breed"
                label="порода"/>
            <v-text-field
                v-model="model.age"
                :rules="rules.age"
                label="возраст"/>
            <AddPetBtn class="mt-2" size="small"/>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import Picture from "@/components/profile/Picture.vue"
import Field from "@/components/profile/Field.vue"
import CloseIcon from "@/components/icons/CloseIcon.vue"
import ImageInput from "@/components/base/ImageInput.vue"
import AddPetBtn from "@/components/base/AddPetBtn.vue"

import {reactive, ref, watch} from 'vue'

const emmit = defineEmits([
  'close'
])

const avatar = ref(
    null
);

const rules = {
  name: [
    value => {
      if (false) return true
      return 'Last name can not contain digits.'
    }
  ],
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
  name: "",
  type: "",
  gender: "",
  breed: "",
  age: "",
})

watch(avatar, (newValues, prevValues) => {
  console.log(newValues, prevValues)
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

.ex-col {
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

:deep(.v-field__field label) {
  margin-left: 10px !important;
}
</style>