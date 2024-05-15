<template>

  <!--  <v-img :src="Photoroom"/>-->


  <v-carousel
      height="400"
      show-arrows="hover"
      cycle
      hide-delimiter-background
  >
    <v-carousel-item>
      <v-sheet
      >
        <div>
          <div>
            <p class="text">Собственная современная лаборатория</p>
            <AppointmentBtn/>
          </div>

          <v-img class="imgCarus"
                 :height="500"
                 :width="500"
                 :src="Photoroom"
          ></v-img>
        </div>

      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <!--    <v-carousel show-arrows="hover" cycle>-->

  <!--      &lt;!&ndash;    <v-carousel-item&ndash;&gt;-->
  <!--      &lt;!&ndash;        :src="carousel1"&ndash;&gt;-->
  <!--      &lt;!&ndash;        cover&ndash;&gt;-->
  <!--      &lt;!&ndash;    ></v-carousel-item>&ndash;&gt;-->

  <!--  <v-carousel-item :src="Photoroom">-->

  <!--  </v-carousel-item>-->

  <!--      <v-carousel-item-->
  <!--          :src="carousel2"-->
  <!--          cover-->
  <!--      ></v-carousel-item>-->

  <!--      <v-carousel-item-->
  <!--          :src="carousel3"-->
  <!--          cover-->
  <!--      ></v-carousel-item>-->
  <!--      <v-carousel-item-->
  <!--          :src="carousel4"-->
  <!--          cover-->
  <!--      ></v-carousel-item>-->
  <!--      <v-carousel-item-->
  <!--          :src="carousel5"-->
  <!--          cover-->
  <!--      ></v-carousel-item>-->
  <!--      <v-carousel-item-->
  <!--          :src="carousel6"-->
  <!--          cover-->
  <!--      ></v-carousel-item>-->
  <!--    </v-carousel>-->

</template>

<script setup>
import AppointmentBtn from '@/components/buttons/AppointmentBtn.vue';

import Photoroom from '@/assets/image-Photoroom 4.png'

import carousel1 from '@/assets/carousel-1.png'
import carousel2 from '@/assets/carousel-2.png'
import carousel3 from '@/assets/carousel-3.png'
import carousel4 from '@/assets/carousel-4.png'
import carousel5 from '@/assets/carousel-5.png'
import carousel6 from '@/assets/carousel-6.png'

</script>

<style scoped>
.text {
  font-size: 50px;
}
</style>