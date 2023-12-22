<template>
  <v-app>
    <LoadingComp v-if="isLoading"></LoadingComp>
    <NavigationComp v-if="!$route.meta.hideNavbar" :color="color" :flat="flat" />
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" small dark fixed bottom right color="black" @click="toTop" style="z-index:100;">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <FooterComp v-if="!$route.meta.hideFooter" />
  </v-app>
</template>

<script>
import '@/assets/scss/style.scss';
import '@/assets/scss/responsive.scss';
import Vue from "vue";
import NavigationComp from "./components/Navigation";
import FooterComp from "./components/Footer";
import LoadingComp from "@/components/Loading";

export default Vue.extend({
  name: "App",
  components: {
    NavigationComp,
    FooterComp,
    LoadingComp
  },


  data: () => ({
    fab: null,
    color: "white",
    flat: null,
    isLoading: true,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 120) {
      this.color = "white";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "white";
        this.flat = false;
      } else {
        this.color = "white";
        this.flat = true;
      }
    }
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
});
</script>
