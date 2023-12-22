
<template>
  <section id="service">
    <v-container>
      <hr />
      <v-row>
        <v-col cols="12">
          <v-card :elevation="0" color="transparent" class="pt-8" tile>
            <v-row>
              <v-col cols="12" class="">
                <v-card-title
                  class="text-h4 black--text primary--text text-left mb-5"
                  style="line-height: 1.2 !important"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  Our Storytelling Mediums
                </v-card-title>
              </v-col>
            </v-row>
            <v-row style="padding-bottom: 20px">
              <v-col
                cols="12"
                sm="4"
                md="4"
                xl="4"
                class="service-item"
                v-for="(service, idx) in services"
                :key="idx"
              >
                <v-skeleton-loader
                  type="article"
                  v-if="isLoading"
                ></v-skeleton-loader>
                <template v-if="!isLoading">
                  <div data-aos="fade-in" data-aos-duration="400">
                    <v-img
                      src="@/assets/img/puzzle-bullet.png"
                      :lazy-src="service.src"
                      width="80"
                      aspect-ratio="1"
                      class="service-img fill-height"
                      contain
                    ></v-img>
                    <div class="text-h6">
                      {{ service.nama }}
                    </div>
                  </div>
                </template>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "ServiceComp.vue",
  components: {},
  props: {
    services: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    isLoading: true,
  }),
  methods: {},
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>