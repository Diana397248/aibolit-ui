<template>
  <v-card class=" pa-8 card">
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <router-link
              :to="{ name: 'Calendars' }"
              class="me-8 py-2 text-black text-decoration-none fs-4 fw-bold"
          >
            <Picture
                img="/Ellipse.png"
                text-btn="Отменить прием"
            />
          </router-link>
        </v-col>


        <v-col>
          <v-row class="h-100 gap-5">
            <v-col class="d-flex flex-column justify-content-between">
              <Field label="врач" text="Иванова Ирина Владимировна"/>
              <Field label="ветклиника" text="Айболит на Краснополянской"/>
            </v-col>

            <v-col class="d-flex flex-column justify-content-between">
              <Field label="питомец" text="Громопетр"/>
              <Field label="дата" text="15.10.19"/>
              <Field label="время" text="15:35"/>
            </v-col>

          </v-row>
        </v-col>


      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import Field from "@/components/profile/Field.vue"
import Picture from "@/components/profile/Picture.vue"
</script>

<style scoped>
.card {
  border-radius: 20px;
}
</style>