<template>
  <section id="about">
    <TextlayoutComp :feeds="dataclients" class="mt-120" />
    <SectionCTAComp />
  </section>
</template>
  
<script>
import TextlayoutComp from "@/components/About/TextLayout.vue";
import SectionCTAComp from "@/components/SectionCTA.vue";
import axios from "axios";
export default {
  name: "AboutView",
  components: {
    TextlayoutComp,
    SectionCTAComp,
  },
  data: () => ({
    menu: [
      {
        label: "Home",
        link: "/home",
      },
      {
        label: "Tentang Kami",
        link: "/about",
      },
    ],
    dataclients: [],
  }),
  methods: {},
  mounted() {
    const urlclients =
      "https://administrator.missingpiece-agency.com/API/get_clients";

    axios({
      method: "GET",
      url: urlclients,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.dataclients = response.data.data;
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
  

