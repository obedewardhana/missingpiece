<template>
    <section class="overflow-hidden">
      <v-container>
        <hr />
        <v-row
          class="align-items-center"
          id="whyshouldi"
          style="padding-bottom: 60px; padding-top: 60px"
        >
          <v-col cols="12" sm="6" md="6" lg="6" class="mx-auto my-auto">
            <v-card
              :elevation="0"
              color="transparent"
              class="py-0 px-3"
              tile
              relative
              data-aos="fade-in"
              data-aos-duration="400"
            >
              <v-row>
                <v-col cols="12">
                  <v-card-title
                    class="text-h4 black--text primary--text text-left mb-5"
                    style="line-height: 1.2 !important"
                  >
                    <!-- <div
                      class="text--black text--uppercase text-p font-weight-bold mb-2"
                    >
                      Why Should I Produce A Video?
                    </div> -->
                    Start crafting
                    <br />
                    your brand story today.
                  </v-card-title>
                  <v-card-text>
                    <v-btn
                      rounded
                      outlined
                      large
                      :href="'https://api.whatsapp.com/send?phone='+datacompany.whatsapp"
                      target="_blank"
                      class="mt-0 text-center text-p text-capitalize"
                    >
                      Let’s talk!
                      <v-icon class="ml-2">mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" class="mx-auto my-auto">
            <v-card :elevation="0" color="transparent" class="px-3" tile>
              <v-row>
                <v-col cols="12">
                  <div relative>
                    <v-img
                      cover
                      height="250"
                      src="@/assets/img/img-cta.jpg"
                      style="border-radius: 20px"
                      lazy-src="@/assets/img/img-cta.jpg"
                      aspect-ratio="2"
                      class="mx-4 smooth-shadow"
                      data-aos="fade-in"
                      data-aos-duration="400"
                    ></v-img>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SectionCTAComp",
    data: () => ({
      datacompany: [],
    }),
    mounted() {
    window.addEventListener("resize", this.onResize, { passive: true });

    const urlcompany =
      "https://administrator.missingpiece-agency.com/API/get_company";

    axios({
      method: "GET",
      url: urlcompany,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.datacompany = response.data;
    });
  },
  };
  </script>