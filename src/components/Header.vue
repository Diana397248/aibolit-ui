<template>
  <header class="desktop">
    <div class="d-flex flex-column flex-md-row align-items-center">
      <router-link
          :to="{ name: 'Posts' }"
          class="d-flex align-items-center text-dark text-decoration-none"
      >
        <img :src="imgLogo" class="fs-4 py-2"/>
      </router-link>
      <nav class="mx-12">
        <router-link
            :to="{ name: 'Posts' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Новости
        </router-link>
        <router-link
            :to="{ name: 'Friends' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Друзья
        </router-link>
        <router-link
            :to="{ name: 'Chats' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Чаты
        </router-link>
        <router-link
            :to="{ name: 'Profile' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Профиль
        </router-link>

        <router-link
            v-if="store.isAuth && store.isAdmin"
            :to="{ name: 'CategoryPage' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Категории
        </router-link>
      </nav>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto align-center">
        <template v-if="store.isAuth && !store.isAdmin">
          <router-link :to="{ name: 'AddPost' }">
            <img :src="addButton"/>
          </router-link>
        </template>
        <!--        auth routes-->
        <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Login' }"
            class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
        >
          Авторизация
        </router-link>
        <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Register' }"
            class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
        >
          Регистрация
        </router-link>

        <span
            v-if="store.isAuth"
            @click="logOut"
            role="button"
            class="me-3 py-2 text-white text-decoration-none fs-5 ml-4"
        >Выход</span
        >
      </nav>
    </div>
  </header>


  <v-container class="mobile">
    <v-row>
      <v-col cols="9">

      </v-col>
      <v-col cols="3">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="#001427" v-bind="props">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="white"
                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
                />
              </svg>
            </v-btn>
          </template>

          <v-list bg-color="#001427">
            <v-list-item>
              <nav class="mx-12">
                <router-link
                    :to="{ name: 'Posts' }"
                    class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
                >
                  Новости
                </router-link>
                <router-link
                    :to="{ name: 'Friends' }"
                    class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
                >
                  Друзья
                </router-link>
                <router-link
                    :to="{ name: 'Chats' }"
                    class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
                >
                  Чаты
                </router-link>
                <router-link
                    :to="{ name: 'Profile' }"
                    class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
                >
                  Профиль
                </router-link>
                <router-link
                    v-if="store.isAuth && store.isAdmin"
                    :to="{ name: 'CategoryPage' }"
                    class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
                >
                  Категории
                </router-link>
                <v-spacer class="pb-3"></v-spacer>
                <router-link
                    v-if="!store.isAuth"
                    :to="{ name: 'Login' }"
                    class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold text-teachat__hover"
                >
                  Авторизация
                </router-link>
                <router-link
                    v-if="!store.isAuth"
                    :to="{ name: 'Register' }"
                    class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold text-teachat__hover"
                >
                  Регистрация
                </router-link>

                <span
                    v-if="store.isAuth"
                    @click="logOut"
                    role="button"
                    class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold"
                >Выход</span
                >
              </nav>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

    </v-row>
  </v-container>

  <template v-if="store.isDebug">
    <h1 class="text-white"> Current user id: {{ store }}</h1>
  </template>
</template>

<script setup>
import {onMounted} from "vue";
import {http} from "../axios/index.js";
import {useRouter} from "vue-router";
import {clearStore, store} from "../store/index.js";
import imgLogo from "@/assets/logo.png";
import addButton from "@/assets/addButton.png";

const router = useRouter();
const logOut = () => {
  http
      .get(`/api/logout`)
      .then((res) => {
        clearStore()
        // todo
        window.location.href = "/login";
      })
      .catch(() => {
        clearStore()
      });
};

onMounted(() => {
});
</script>
<script>
import {clearStore} from "../store/index.js";

export default {
  data: () => ({
    valid: false,
    search: "@",
    searchEngine: [
      (value) => {
        if (value) return true;

        return "Используйте идентификатор @";
      },
      (value) => {
        if (value?.length <= 13) return true;

        return "Имя не может быть длиннее 12 знаков";
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
.text-teachat {
  color: #f4d58d;
}

.text-teachat__hover:hover {
  color: #f4d58d;
}


.mobile {
  display: none;
}

.desktop {
  display: block;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }
}

@media only screen and (min-device-width: 481px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}

</style>
