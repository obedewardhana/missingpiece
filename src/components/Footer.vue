<template>
  <v-footer color="grey" class="pt-10 pb-10">
    <v-container>
      <v-row>
        <v-col
          cols="10"
          sm="6"
          md="8"
          xl="8"
          class="py-0 mb-sm-8 order-3 order-sm-1 order-md-1 order-xl-1 mx-auto"
        >
          <v-list color="transparent">
            <v-list-item
              class="justify-center justify-md-start justify-xl-start brand-logo"
            >
              <v-list-item-avatar>
                <img src="@/assets/img/logo-missingpiece-white.png" alt="Logo" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item
              class="justify-center justify-md-start justify-xl-start"
            >
              <span class="mr-2 white--text text-small">
                © {{ new Date().getFullYear() }} — <strong>{{ datacompany.name }}</strong>
              </span>
            </v-list-item>
          </v-list>
        </v-col>
         <v-col
          cols="12"
          sm="6"
          md="4"
          xl="4"
          class="order-2 order-sm-3 order-md-3 order-xl-3 mb-8"
        >
          <v-row>
            <div class="white--text text--uppercase text-h6 pl-4 mb-3">
              Contact us
            </div>
          </v-row>
          <v-row class="flex-column flex-wrap">
            <div class="d-flex flex-row flex-wrap align-start pl-4 mb-3">
              <v-icon size="24px" class="white--text mr-2">mdi-map-marker</v-icon>
              <div class="white--text text-p" style="width:80%;">
                <a href="https://maps.app.goo.gl/HyHKnfSwNV2jfhKm7" target="_blank" class="white--text no-hover" style="text-decoration:none;">{{ datacompany.address }}</a>
              </div>
            </div>
            <div class="d-flex flex-row flex-wrap align-start pl-4 mb-3">
              <v-icon size="24px" class="white--text mr-2">mdi-email</v-icon>
              <a  :href="'mailto:'+datacompany.email" class="white--text no-hover" style="text-decoration:none;width:80%;" target="_blank">{{ datacompany.email }}</a>
            </div>
          </v-row>
          <v-row class="flex-row flex-wrap mx-0">
            <v-btn
              class=" white--text justify-start text-capitalize ml-0 pl-0 pr-0 no-hover" style="min-width:45px"
              :href="datacompany.instagram"
              target="_blank"
              text
            >
              <v-icon size="24px" class="">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              class=" white--text justify-start text-capitalize ml-0 pl-0 pr-0 no-hover" style="min-width:45px"
              :href="datacompany.youtube"
              target="_blank"
              text
            >
              <v-icon size="24px" class="">mdi-youtube</v-icon>
            </v-btn>
            <v-btn
              class=" white--text justify-start text-capitalize ml-0 pl-0 pr-0 no-hover" style="min-width:45px"
              :href="'https://api.whatsapp.com/send?phone='+datacompany.whatsapp"
              target="_blank"
              text
            >
              <v-icon size="24px" class="">mdi-whatsapp</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import axios from "axios";
export default {
  name: "FooterComp",
  data: () => ({
    datacompany: []
  }),
  mounted() {
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
