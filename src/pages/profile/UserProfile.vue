<template>
  <v-row>

    <v-col cols="3">
      <LeftSide></LeftSide>
    </v-col>

    <v-col cols="9" class="right-side">
      <div class="my-block">
        <UserInfo></UserInfo>
      </div>
      <div class="my-block">
        <MyPets></MyPets>
      </div>
      <div class="my-block">
        <Appointment/>
      </div>
    </v-col>

  </v-row>
</template>

<script setup>
import LeftSide from "@/components/profile/LeftSide.vue"
import UserInfo from "@/components/profile/UserInfo.vue"
import MyPets from "@/components/pet/MyPets.vue"
import Appointment from "@/components/appointment/Appointment.vue"
</script>

<style scoped>
.right-side .my-block:not(:last-child) {
  margin-bottom: 90px !important;
}
</style>