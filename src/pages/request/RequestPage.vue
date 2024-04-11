<template>
  <v-row>
    <v-col cols="4"></v-col>
    <v-col>
      <v-btn
          variant="text"
          prepend-icon="mdi-chevron-left"
          color="#FFC59E"
          size="large"
          class="fw-bold"
      >
        <template v-slot:prepend>
          <v-icon color="#FFC59E"></v-icon>
        </template>

        НАЗАД
      </v-btn>
    </v-col>

  </v-row>
  <v-row>
    <v-col cols="4">
      <div class="text-h2">
        Оформление заявки
      </div>
    </v-col>
    <v-col>
      <v-form v-model="valid">
        <v-container>
          <!--Блок формы-->
          <v-row>
            <v-col cols="12">
              <v-sheet class="pa-2">
                <v-text-field
                    v-model="firstname"
                    :counter="10"
                    :rules="nameRules"
                    label="ФИО"
                    hide-details
                    required
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>


          <v-row>
            <v-col
                cols="6"
            >
              <v-text-field
                  v-model="firstname"
                  :counter="10"
                  :rules="nameRules"
                  label="+7(999) 999 99 99"
                  hide-details
                  required
              ></v-text-field>
            </v-col>

            <v-col
                cols="6"
            >
              <v-text-field
                  v-model="lastname"
                  :counter="10"
                  :rules="nameRules"
                  label="Желаемая дата и время приема"
                  hide-details
                  required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                  label="Кратко опишите проблему"
                  variant="outlined"
              ></v-textarea>
              <!--      <span class="d-block mb-4 text-danger" v-if="errors?.description">{{ errors.description[0] }}</span>-->
            </v-col>
          </v-row>

          <!--      Блок капчи-->
          <v-row>
            <v-col cols="12">
              <v-card
                  variant="flat"
                  class="mx-auto"
                  color="#EDE9E8"
              >
                <v-card-item class="justify-center">
                  <v-row>
                    <v-col
                        cols="6"
                    >
                      <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="g4j2k43"
                          hide-details
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="6"
                    >
                      <v-text-field
                          v-model="lastname"
                          :counter="10"
                          :rules="nameRules"
                          label="Введите текст"
                          hide-details
                          required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с
                      сайтом и
                      для других целей, описанных в нашей политика конфиденциальности.
                    </v-col>
                  </v-row>
                </v-card-item>

                <v-card-actions class="justify-center mb-6">
                  <v-btn class="px-16 text-white py-5 h-100 text-h5" style="border-radius: 34px " color="#FFC59E"
                         variant="flat">
                    Записаться
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "RequestPage.vue"
}
</script>

<style scoped>

</style>