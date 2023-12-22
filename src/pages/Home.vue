<template>
  <div>
    <BannerComp :title="datatitle" :image="databanner" class="mt-120" />
    <WorkComp :feeds="datawork" :clients="dataclients" />
    <ServiceComp :services="datamedium" />
    <TestimoniesComp :feeds="datatestimonies"  />
    <SectionCTAComp />
  </div>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import WorkComp from "@/components/Home/Work.vue";
import TestimoniesComp from "@/components/Home/Testimonies.vue";
import ServiceComp from "@/components/Home/Service.vue";
import SectionCTAComp from "@/components/SectionCTA.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    TestimoniesComp,
    SectionCTAComp,
    ServiceComp,
    WorkComp,
    BannerComp,
  },
  data: () => ({
    datatitle: "We produce storytelling commercials that speak to your audience.",
    databanner: require("@/assets/img/banner-image.jpeg"),
    datamedium: [],
    datawork: [],
    datatestimonies: [],
    dataclients: []
  }),
  methods: {},
  mounted() {
    const urlmedium =
      "https://administrator.missingpiece-agency.com/API/get_mediums";
    const urlwork =
      "https://administrator.missingpiece-agency.com/API/get_works";
    const urltestimonies =
      "https://administrator.missingpiece-agency.com/API/get_testimonies";

    axios({
      method: "GET",
      url: urlmedium,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.datamedium = response.data.data;
    });

    axios({
      method: "GET",
      url: urlwork,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.datawork = response.data.data;   
    });

    axios({
      method: "GET",
      url: urltestimonies,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.datatestimonies = response.data.data;
    });

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
  },
};
</script>
<style lang="scss" scoped></style>
  

