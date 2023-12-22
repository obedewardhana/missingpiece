
<template>
  <section id="work" style="z-index: 10">
    <v-container>
      <hr />
      <v-row>
        <v-col cols="12">
          <v-card :elevation="0" color="transparent" style="padding-top:40px" tile>
            <v-row>
              <v-col cols="12" class="">
                <v-card-title
                  class="text-h4 black--text primary--text text-left mb-5"
                  style="line-height: 1.2 !important"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  Our work
                </v-card-title>
                <div
                  class="feed-control single"
                  style="height: 220px !important"
                >
                  <!-- <v-btn @click="slidePrev" class="btn-control btn-feed-prev">
                    <v-icon size="24px">mdi-arrow-left</v-icon>
                  </v-btn> -->
                  <!-- <v-btn @click="slideNext" class="btn-control btn-feed-next btn-work-next">
                    <v-icon size="24px">mdi-arrow-right</v-icon>
                  </v-btn> -->
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="12" class="pt-0">
                <div
                  class="loading-box work-box"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <VueSlickCarousel
                    v-bind="settings"
                    ref="carousel"
                    @init="onInit"
                    @reInit="onUpdate"
                    @beforeChange="onBeforeChange"
                    @afterChange="onAfterChange"
                    id="work-slider"
                    v-if="feeds.length"
                  >
                    <div
                      :class="{
                        'video-item hovered-item': hover,
                        'video-item': !hover,
                      }"
                      v-for="(feed, idx) in feeds"
                      :key="idx"
                      @mouseover.stop="selectIndex(idx)"
                      @mouseleave="unselect(idx)"
                      :data-id="idx"
                    >
                      <v-skeleton-loader
                        type="image"
                        height="180"
                        v-if="isLoading"
                      >
                      </v-skeleton-loader>
                      <div class="work-content" v-if="!isLoading">
                        <v-overlay
                          value="true"
                          color="grey"
                          opacity=".4"
                          absolute
                          style="border-radius: 20px"
                        >
                        </v-overlay>
                        <div v-for="(client, idx) in clients" :key="idx">
                          <div
                            class="work-brand"
                            v-if="feed.perusahaan == client.id"
                          >
                            <v-img
                              height="30"
                              :src="
                                'https://administrator.missingpiece-agency.com/img/' +
                                client.logo
                              "
                              aspect-ratio="1"
                              class="brand-img fill-height"
                              style="display: block !important"
                              contain
                            ></v-img>
                          </div>
                        </div>
                        <v-img
                          height="180"
                          :src="
                            'https://administrator.missingpiece-agency.com/img/' +
                            feed.poster
                          "
                          :lazy-src="
                            'https://administrator.missingpiece-agency.com/img/' +
                            feed.poster
                          "
                          aspect-ratio="2"
                          class="fill-height"
                          cover
                        ></v-img>
                      </div>
                      <div
                        v-show="ItemIndex == idx"
                        class="video-hover"
                        :data-id="idx"
                        :id="'hover-' + idx"
                        :data-src="
                          feed.linkyoutube +
                          '?origin=https://missingpiece-agency.com&rel=0&vq=hd1080'
                        "
                        :data-poster="
                          'https://administrator.missingpiece-agency.com/img/' +
                          feed.poster
                        "
                      >
                        <div class="work-content">
                          <video
                            ref="videoPlayer"
                            class="video-js"
                            :data-id="idx"
                            :id="'video-' + idx"
                            :src="
                              feed.linkyoutube +
                              '?origin=https://missingpiece-agency.com&rel=0&vq=hd1080&controls=0'
                            "
                            :poster="
                              'https://administrator.missingpiece-agency.com/img/' +
                              feed.poster
                            "
                            loop
                            muted
                            controls
                            preload
                          >
                            <source
                              :src="
                                feed.linkyoutube +
                                '?origin=https://missingpiece-agency.com&rel=0&vq=hd1080'
                              "
                              :poster="
                                'https://administrator.missingpiece-agency.com/img/' +
                                feed.poster
                              "
                              type="video/youtube"
                            />
                          </video>
                          <div class="work-description">
                            <v-btn small color="white" rounded="xl" class="btn-play">
                              <v-icon>mdi-play</v-icon>
                            </v-btn>
                            <div class="text-p ml-2">{{ feed.judul }}</div>
                          </div>
                        </div>
                      </div>
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
import { ref } from "vue";
import videojs from "video.js";
import youtube from "videojs-youtube";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "WorkComp.vue",
  components: { VueSlickCarousel },
  props: {
    feeds: {
      type: Array,
      required: true,
      default: () => [],
    },
    clients: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    settings: {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 700,
      slidesToShow: 3,
      rows: 1,
      slidesPerRow: 1,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: false,
      margin: 10,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            infinite: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
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
    hover: false,
    ItemIndex: null,
    player: null,
    playerId: null,
    videoid: null,
    videoOptions: {
      autoplay: true,
      controls: true,
    },
    logos: [],
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
    onUpdate() {},
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
    selectIndex(Index) {
      this.ItemIndex = Index;
      this.hover = true;
      this.playerId = Index;

      const videos = document.querySelectorAll(".video-js");
      videos.forEach((video) => {
        const id = "video-" + video.dataset.id;
        const installed = videojs.getPlayer(id);
        if (video.dataset.id == Index) {
          if (this.player == null) {
            if (!installed) {
              this.player = videojs("#video-" + video.dataset.id, {
                autoplay: true,
                muted: true,
                enableDocumentPictureInPicture: true,
                aspectRatio:"16:9"
              });

              this.player.addClass("vjs-waiting");
            }
          }
        }
      });
    },
    unselect(Index) {
      this.ItemIndex = null;
      // this.hover = false;
      const oldsrc = document.getElementById("hover-" + Index);
      const newid = Index;
      const newsrc = oldsrc.dataset.src;
      const newposter = oldsrc.dataset.poster;

      if (this.player != null) {
        this.player.muted(true);
        // console.log("pause");

        const html =
          "<video ref='videoPlayer'" +
          "class='video-js '" +
          "data-id='" +
          newid +
          "'" +
          "id='video-" +
          newid +
          "'" +
          "src='" +
          newsrc +
          "'" +
          "poster='" +
          newposter +
          "'" +
          "loop muted controls preload>" +
          "<source src='" +
          newsrc +
          "' poster='" +
          newposter +
          "'" +
          "type='video/youtube'" +
          "/></video>";

        var target = document.getElementById("hover-" + newid);
        var targetClass = target.querySelector(".work-content");
        targetClass.insertAdjacentHTML("beforeend", html);

        var oldPlayer = document.getElementById("video-" + this.playerId);
        videojs(oldPlayer).dispose();
        this.player = null;
      }
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // this.player = videojs(this.$refs.videoPlayer, this.options, () => {
    //   this.player.log("onPlayerReady", this);
    // });
  },
  setup({ data }) {
    const hover = ref(false);
  },
  beforeDestroy() {
    // if (this.player) {
    //   this.player.dispose();
    // }
  },
};
</script>