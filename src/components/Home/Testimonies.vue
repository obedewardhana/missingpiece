<template>
  <section id="testimonies">
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
                  Testimonies
                </v-card-title>
                <div class="feed-control single">
                  <!-- <v-btn @click="slidePrev" class="btn-control btn-feed-prev">
                                        <v-icon size="24px">mdi-arrow-left</v-icon>
                                    </v-btn> -->
                  <v-btn @click="slideNext" class="btn-control btn-feed-next">
                    <v-icon size="24px">mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="12" class="pt-0">
                <div class="loading-box testimony-box">
                  <VueSlickCarousel
                    v-bind="settings"
                    ref="carousel"
                    @init="onInit"
                    @beforeChange="onBeforeChange"
                    @afterChange="onAfterChange"
                    v-if="feeds.length"
                  >
                    <div
                      class="feed-item overflow-hidden"
                      v-for="(feed, idx) in feeds"
                      :key="idx"
                      data-aos="fade-in"
                      data-aos-duration="400"
                    >
                      <v-skeleton-loader
                        type="image"
                        height="300"
                        v-if="isLoading"
                      >
                      </v-skeleton-loader>
                      <template v-if="!isLoading">
                        <div class="testimony-content">
                          <v-overlay
                            value="true"
                            color="grey"
                            opacity=".4"
                            absolute
                          >
                          </v-overlay>
                          <div class="testimony-title">
                            <div class="text-client">{{ feed.nama }}</div>
                            <div class="text-profession">
                              {{ feed.profesi }}
                            </div>
                          </div>
                          <div class="testimony-comment">
                            <div class="text-comment">
                              {{ feed.comment }}
                            </div>
                          </div>
                          <v-img
                            :src="'https://administrator.missingpiece-agency.com/img/'+feed.photo"
                            :lazy-src="'https://administrator.missingpiece-agency.com/img/'+feed.photo"
                            aspect-ratio="1"
                            class="feed-img fill-height"
                          ></v-img>
                        </div>
                      </template>
                    </div>
                  </VueSlickCarousel>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TestimoniesComp.vue",
  components: { VueSlickCarousel },
  props: {
    feeds: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    settings: {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      rows: 1,
      slidesPerRow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      margin: 20,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    },
    options: {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    sliderPageIndex: 0,
    oldSlideIndex: 0,
    newSlideIndex: 0,
    isActive: false,
    overlay: false,
    isLoading: true,
  }),
  methods: {
    slideNext() {
      this.$refs.carousel.next();
    },
    slidePrev() {
      this.$refs.carousel.prev();
    },
    getTanggal() {
      const datetime = new Date();
      let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      // console.log(new Intl.DateTimeFormat("id", options).format(datetime));
    },
    onInit() {},
    onBeforeChange(page, newSlideIndex) {
      const items = document.querySelectorAll(".slick-slide");

      items.forEach(function (item) {
        // item.classList.remove("slick-active");
      });
    },
    onAfterChange() {
      const items = document.querySelectorAll(".slick-slide");

      items.forEach(function (item) {
        // item.classList.add("slick-active");
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>