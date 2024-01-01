<template>
  <section class="overflow-hidden">
    <v-container>
      <v-row
        class=""
        id="whoarewe"
        style="padding-bottom: 150px; padding-top: 20px"
      >
        <v-col cols="12" sm="8" md="6" lg="6" class="mx-auto my-auto">
          <v-card
            :elevation="0"
            color="transparent"
            class="py-0 px-3 card-about"
            tile
            data-aos="fade-in"
            data-aos-anchor-placement="top-center"
            data-aos-duration="400"
          >
            <v-row>
              <v-col cols="12">
                <v-skeleton-loader
                  type="article"
                  v-if="isLoading"
                ></v-skeleton-loader>
                <template v-if="!isLoading">
                  <v-card-title
                    class="text-h4 black--text primary--text text-left"
                    style="line-height: 1.2 !important"
                  >
                    Who Are We?
                  </v-card-title>
                  <v-card-text>
                    <p class="text-p text-justify black--text primary--text">
                      Missing Piece is a storytelling agency & production house
                      based in Surabaya that specializes in making storytelling
                      ideas come to life through videos. We are more than just
                      <b>marketers</b>, we are <b><i>storytellers</i></b
                      >.
                    </p>
                  </v-card-text>
                </template>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="6" class="mx-auto">
          <v-card
            :elevation="0"
            color="transparent"
            class="px-3 card-about"
            tile
          >
            <v-row>
              <v-col cols="12">
                <div relative data-aos="fade-in" data-aos-duration="400">
                  <v-skeleton-loader
                    type="image"
                    v-if="isLoading"
                    height="250"
                    style="border-radius: 20px"
                  ></v-skeleton-loader>
                  <template v-if="!isLoading">
                    <v-img
                      height="250"
                      src="@/assets/img/img-whoarewe.jpg"
                      style="border-radius: 20px"
                      lazy-src="@/assets/img/img-whoarewe.jpg"
                      aspect-ratio="2"
                      class="mx-4 smooth-shadow"
                    ></v-img>
                  </template>
                  <v-img
                    height="150"
                    src="@/assets/img/img-puzzle-left.png"
                    lazy-src="@/assets/img/img-puzzle-left.png"
                    class="puzzle-left"
                    contain
                    data-aos="fade-left"
                    data-aos-anchor-placement="bottom-right"
                    data-aos-duration="400"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row class="" style="padding-bottom: 150px; padding-top: 60px">
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="6"
          class="mx-auto order-2 order-sm-2 order-md-1 order-lg-1"
        >
          <v-card
            :elevation="0"
            color="transparent"
            class="px-3 card-about"
            tile
          >
            <v-row>
              <v-col cols="12">
                <div relative>
                  <v-skeleton-loader
                    type="image"
                    v-if="isLoading"
                    height="250"
                    style="border-radius: 20px"
                  ></v-skeleton-loader>
                  <template v-if="!isLoading">
                    <v-img
                      height="250"
                      src="@/assets/img/img-whystorytelling.png"
                      style="border-radius: 20px"
                      lazy-src="@/assets/img/img-whystorytelling.png"
                      aspect-ratio="2"
                      class="mx-4 smooth-shadow"
                      data-aos="fade-in"
                      data-aos-duration="400"
                      data-aos-anchor-placement="top-center"
                      data-aos-delay="300"
                    ></v-img>
                  </template>
                  <v-img
                    height="150"
                    src="@/assets/img/img-puzzle-right.png"
                    lazy-src="@/assets/img/img-puzzle-right.png"
                    class="puzzle-right"
                    contain
                    data-aos="fade-left"
                    data-aos-duration="400"
                    data-aos-delay="200"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="6"
          class="mx-auto my-auto order-1 order sm-1 order-md-2 order-lg-2"
        >
          <v-skeleton-loader
            type="article"
            v-if="isLoading"
          ></v-skeleton-loader>
          <template v-if="!isLoading">
            <v-card
              :elevation="0"
              color="transparent"
              class="py-0 px-3 card-about"
              tile
              data-aos="fade-in"
              data-aos-anchor-placement="top-center"
              data-aos-duration="400"
              data-aos-delay="200"
              id="whystorytelling"
            >
              <v-row>
                <v-col cols="12">
                  <v-card-title
                    class="text-h4 black--text primary--text text-left"
                    style="line-height: 1.2 !important"
                  >
                    <!-- <div
                    class="text--black text--uppercase text-p font-weight-bold mb-2"
                  >
                    Why Storytelling?
                  </div> -->
                    Why Storytelling?
                  </v-card-title>
                  <v-card-text>
                    <p class="text-p text-justify black--text primary--text">
                      A story is the <i>missing piece</i> you need to complete the
                      puzzle to your business. It is <b>easier to connect and
                      communicate</b> with your audience through storytelling!
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </template>
        </v-col>
      </v-row>
      <hr />
      <v-row
        class=""
        id="whyshouldi"
        style="padding-bottom: 120px; padding-top: 60px"
      >
        <v-col cols="12" sm="8" md="6" lg="6" class="mx-auto my-auto">
          <v-skeleton-loader
            type="article"
            v-if="isLoading"
          ></v-skeleton-loader>
          <template v-if="!isLoading">
            <v-card
              :elevation="0"
              color="transparent"
              class="py-0 px-3 card-about"
              tile
              relative
              data-aos="fade-in"
              data-aos-duration="400"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
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
                    Why Should <br />
                    I Produce A Video?
                  </v-card-title>
                  <v-card-text>
                    <p class="text-p text-justify black--text primary--text">
                      Basically, you can use the video you produced to deliver a
                      clear message to your audience that encapsulates your
                      brand's values, with no hassle. It serves as a branding
                      and marketing tool that could make your
                      customers remember you.
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </template>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="6" class="mx-auto">
          <v-card
            :elevation="0"
            color="transparent"
            class="px-3 card-about"
            tile
          >
            <v-row>
              <v-col cols="12">
                <div relative>
                  <v-skeleton-loader
                    type="image"
                    v-if="isLoading"
                    height="250"
                    style="border-radius: 20px"
                  ></v-skeleton-loader>
                  <template v-if="!isLoading">
                    <v-img
                      height="250"
                      src="@/assets/img/img-whyshouldi.png"
                      style="border-radius: 20px"
                      lazy-src="@/assets/img/img-whyshouldi.png"
                      aspect-ratio="2"
                      class="mx-4 smooth-shadow"
                      data-aos="fade-in"
                      data-aos-duration="400"
                      data-aos-anchor-placement="top-center"
                      data-aos-delay="300"
                    ></v-img>
                  </template>
                  <v-img
                    height="150"
                    src="@/assets/img/img-puzzle-left.png"
                    lazy-src="@/assets/img/img-puzzle-left.png"
                    class="puzzle-left"
                    contain
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-anchor-placement="bottom-right"
                    data-aos-delay="400"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row
        class=""
        id="ourclients"
        style="padding-bottom: 60px; padding-top: 60px"
      >
        <v-col cols="12" class="mx-auto">
          <v-card
            :elevation="0"
            color="transparent"
            class="py-0 px-3"
            tile
          >
            <v-row>
              <v-col cols="12">
                <v-card-title
                  class="text-h3 black--text primary--text text-left mb-5"
                  style="line-height: 1.2 !important"
                  data-aos="fade-in"
                  data-aos-duration="400"
                  data-aos-anchor-placement="top-right"
                  data-aos-delay="200"
                >
                  Our Clients
                </v-card-title>
                <v-card-text>
                  <div class="d-flex flex-row flex-wrap ml-0 justify-start">
                    <template>
                      <v-col
                        cols="4"
                        sm="4"
                        md="3"
                        xl="3"
                        class="pl-0"
                        v-for="(feed, idx) in feeds"
                        :key="idx"
                      >
                        <v-img
                          contain
                          height="60"
                          width="150"
                          :src="
                            'https://administrator.missingpiece-agency.com/img/' +
                            feed.logo
                          "
                          aspect-ratio="2"
                          class="ml-0 mr-3 mb-3"
                          data-aos="zoom-in"
                          data-aos-duration="400"
                          data-aos-anchor-placement="bottom-right"
                          data-aos-delay="400"
                        ></v-img>
                      </v-col>
                    </template>
                  </div>
                </v-card-text>
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
  name: "TextlayoutComp",
  props: {
    feeds: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    isLoading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>