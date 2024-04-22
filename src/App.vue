<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import '@mdi/font/css/materialdesignicons.css'
import "vue3-toastify/dist/index.css";
import '@/style.css';
</script>

<template>
  <div class="header-wrapper">
    <Header/>
  </div>

  <div class="container-wrapper">
    <div class="container">
      <main>
        <router-view/>
      </main>
    </div>
  </div>
  <Footer/>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.header-wrapper {
  padding: 50px !important;
}

body {
  background: #FFFEFE;
  font-family: 'Inter', monospace;
}

.container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>