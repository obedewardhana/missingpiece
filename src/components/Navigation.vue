<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="white"
      style="z-index: 80"
    >
      <v-list>
        <v-list-item
          @click.stop="$router.push('/home').catch(() => {})"
          class="brand-logo"
        >
          <v-list-item-avatar class="mx-auto">
            <img src="@/assets/img/logo-missingpiece-black.png" alt="Logo" />
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider />

      <template>
        <v-list dense>
          <v-list-item
            v-for="([icon, text, link], i) in links"
            :key="i"
            link
            @click="goTo(link)"
          >
            <v-list-item-icon
              class="justify-center grey--text hover-text"
              style="margin-right: 10px !important"
            >
              <v-icon class="white--text hover-text">{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="subtitile-1 grey--text hover-text">{{
                text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            :href="
              'https://api.whatsapp.com/send?phone=' + datacompany.whatsapp
            "
            target="_blank"
          >
            <v-list-item-icon
              class="justify-center grey--text hover-text"
              style="margin-right: 10px !important"
            >
              <v-icon class="white--text hover-text">mdi-email-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="subtitile-1 grey--text hover-text outline"
              >
                Contact
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-0 px-md-15 px-xl-15"
      style="box-shadow: 0px 10px 61px rgba(3, 7, 18, 0.08); z-index: 80"
      :class="{ expand: flat }"
      height="100"
    >
      <v-container class="px-0 py-0">
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center">
              <v-btn
                :ripple="false"
                width="200"
                large
                depressed
                link
                @click.stop="$router.push('/home').catch(() => {})"
                color="transparent"
                elevation="0"
                class="no-hover brand-name"
                rounded
              >
                <v-toolbar-title
                  class="d-flex align-center"
                  style="width: 200px"
                >
                  <v-img
                    src="@/assets/img/logo-missingpiece-black.png"
                    max-width="100px"
                    width="100%"
                    height="100%"
                    object-fit="contain"
                    class="my-auto mr-3"
                  />
                </v-toolbar-title>
              </v-btn>
              <v-spacer />
              <template
                v-if="this.$route.name == '' || this.$route.name == 'Home'"
              >
                <v-app-bar-nav-icon
                  @click.stop="drawer = !drawer"
                  class="mr-4"
                  v-if="isXs"
                />
                <div v-else>
                  <v-btn class="no-hover" text>
                    <router-link
                      class="nav-link grey--text hover-text"
                      to="/home"
                    >
                      <span class="mr-2">Home</span>
                    </router-link>
                  </v-btn>
                  <v-btn class="no-hover" text>
                    <router-link
                      class="nav-link grey--text hover-text"
                      to="/about"
                    >
                      <span class="mr-2">About</span>
                    </router-link>
                  </v-btn>
                  <v-btn
                    class="no-hover"
                    rounded
                    outlined
                    :href="'https://api.whatsapp.com/send?phone='+datacompany.whatsapp"
                    target="_blank"
                  >
                    <span class="mr-2 hover-text">Contact</span>
                  </v-btn>
                </div>
              </template>
              <template v-else>
                <v-app-bar-nav-icon
                  @click.stop="drawer = !drawer"
                  class="mr-4"
                  v-if="isXs"
                />
                <div v-else>
                  <v-btn class="no-hover" text>
                    <router-link
                      class="nav-link grey--text hover-text"
                      to="/home"
                    >
                      <span class="mr-2">Home</span>
                    </router-link>
                  </v-btn>
                  <v-btn class="no-hover" text>
                    <router-link
                      class="nav-link grey--text hover-text"
                      to="/about"
                    >
                      <span class="mr-2">About</span>
                    </router-link>
                  </v-btn>
                  <v-btn
                    class="no-hover"
                    rounded
                    outlined
                    :href="
                      'https://api.whatsapp.com/send?phone=' +
                      datacompany.whatsapp
                    "
                    target="_blank"
                  >
                    <span class="mr-2">Contact</span>
                  </v-btn>
                </div>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 120px !important;
  padding-top: 10px;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    links: [
      ["", "Home", "home"],
      ["", "About", "about"],
    ],
    datacompany: [],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    checkRoute() {
      // console.log(this.$route.name);
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.checkRoute();
    this.onResize();
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
