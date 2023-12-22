<template>
  <section id="banner" style="padding-bottom: 50px">
    <v-container>
      <v-row class="">
        <v-col cols="12" sm="6" md="6" lg="6" style="" class="puzzle-desc">
          <v-card
            :elevation="0"
            color="transparent"
            class="py-0"
            tile
            data-aos="fade-in"
            data-aos-duration="400"
          >
            <v-row>
              <v-col cols="12">
                <v-card-title
                  class="text-h4 black--text primary--text text-left"
                  style="line-height: 1.2 !important"
                >
                  {{ title }}
                </v-card-title>
                <v-card-text></v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" class="mx-auto">
          <div id="puzzle" class="puzzle-area" :data-bg="image"></div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
  
<script>
import { ref } from "vue";
import headbreaker from "headbreaker";

export default {
  name: "BannerComp",
  props: ["title", "image"],
  data: () => ({
    imgsrc: null,
    isLoading: true,
  }),
  methods: {},
  mounted() {
    var initialid = document.getElementById("puzzle");
    const initialWidth = 800;
    let banner = document.getElementById("puzzle");
    let vangogh = new Image();
    vangogh.src = banner.dataset.bg;
    vangogh.onload = () => {
      const background = new headbreaker.Canvas("puzzle", {
        width: 800,
        height: 540,
        pieceSize: 100,
        proximity: 20,
        borderFill: 2,
        strokeWidth: 0.6,
        lineSoftness: 0.12,
        image: vangogh,
        preventOffstageDrag: true,
        fixed: true,
        outline: new headbreaker.outline.Rounded(),
        // optional, but it must be set in order to activate image scaling
        maxPiecesCount: { x: 5, y: 5 },
        painter: new headbreaker.painters.Konva(),
      });

      background.adjustImagesToPuzzleHeight();

      //   background.sketchPiece({
      //     structure: "TS--",
      //     metadata: { id: "a", targetPosition: { x: 100, y: 100 } },
      //   });
      //   background.sketchPiece({
      //     structure: "SSS-",
      //     metadata: { id: "b", targetPosition: { x: 200, y: 100 } },
      //   });
      //   background.sketchPiece({
      //     structure: "STT-",
      //     metadata: { id: "c", targetPosition: { x: 300, y: 100 } },
      //   });
      //   background.sketchPiece({
      //     structure: "STT-",
      //     metadata: { id: "d", targetPosition: { x: 400, y: 100 } },
      //   });
      //   background.sketchPiece({
      //     structure: "-TT-",
      //     metadata: { id: "e", targetPosition: { x: 500, y: 100 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TS-T",
      //     metadata: { id: "f", targetPosition: { x: 100, y: 200 } },
      //   });
      //   background.sketchPiece({
      //     structure: "SSST",
      //     metadata: { id: "g", targetPosition: { x: 200, y: 200 } },
      //   });
      //   background.sketchPiece({
      //     structure: "STTS",
      //     metadata: { id: "h", targetPosition: { x: 300, y: 200 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TSTS",
      //     metadata: { id: "i", targetPosition: { x: 400, y: 200 } },
      //   });
      //   background.sketchPiece({
      //     structure: "-SSS",
      //     metadata: { id: "j", targetPosition: { x: 500, y: 200 } },
      //   });
      //   background.sketchPiece({
      //     structure: "ST-T",
      //     metadata: { id: "k", targetPosition: { x: 100, y: 300 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TSTT",
      //     metadata: { id: "l", targetPosition: { x: 200, y: 300 } },
      //   });
      //   background.sketchPiece({
      //     structure: "STSS",
      //     metadata: { id: "m", targetPosition: { x: 300, y: 300 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TTTT",
      //     metadata: { id: "n", targetPosition: { x: 400, y: 300 } },
      //   });
      //   background.sketchPiece({
      //     structure: "-SST",
      //     metadata: { id: "o", targetPosition: { x: 500, y: 300 } },
      //   });
      //   background.sketchPiece({
      //     structure: "ST-S",
      //     metadata: { id: "p", targetPosition: { x: 100, y: 400 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TSTT",
      //     metadata: { id: "q", targetPosition: { x: 200, y: 400 } },
      //   });
      //   background.sketchPiece({
      //     structure: "TTSS",
      //     metadata: { id: "r", targetPosition: { x: 300, y: 400 } },
      //   });
      //   background.sketchPiece({
      //     structure: "SSSS",
      //     metadata: { id: "s", targetPosition: { x: 400, y: 400 } },
      //   });
      //   background.sketchPiece({
      //     structure: "-STT",
      //     metadata: {
      //       id: "t",
      //       targetPosition: { x: 500, y: 400 },
      //       currentPosition: { x: 613, y: 386 },
      //     },
      //   });
      //   background.sketchPiece({
      //     structure: "T--S",
      //     metadata: { id: "u", targetPosition: { x: 100, y: 500 } },
      //   });
      //   background.sketchPiece({
      //     structure: "T-ST",
      //     metadata: { id: "v", targetPosition: { x: 200, y: 500 } },
      //   });
      //   background.sketchPiece({
      //     structure: "T-SS",
      //     metadata: { id: "w", targetPosition: { x: 300, y: 500 } },
      //   });
      //   background.sketchPiece({
      //     structure: "S-ST",
      //     metadata: {
      //       id: "x",
      //       targetPosition: { x: 400, y: 500 },
      //       currentPosition: { x: 425, y: 530 },
      //     },
      //   });
      //   background.sketchPiece({
      //     structure: "--TT",
      //     metadata: {
      //       id: "y",
      //       targetPosition: { x: 500, y: 500 },
      //       currentPosition: { x: 570, y: 560 },
      //     },
      //   });

      //   new
      background.sketchPiece({
        structure: "TS--",
        metadata: { id: "a", targetPosition: { x: 350, y: 100 } },
      });
      background.sketchPiece({
        structure: "SSS-",
        metadata: { id: "b", targetPosition: { x: 450, y: 100 } },
      });
      background.sketchPiece({
        structure: "STT-",
        metadata: { id: "c", targetPosition: { x: 550, y: 100 } },
      });
      background.sketchPiece({
        structure: "STT-",
        metadata: { id: "d", targetPosition: { x: 650, y: 100 } },
      });
      background.sketchPiece({
        structure: "-TT-",
        metadata: { id: "e", targetPosition: { x: 750, y: 100 } },
      });
      background.sketchPiece({
        structure: "TS-T",
        metadata: { id: "f", targetPosition: { x: 350, y: 200 } },
      });
      background.sketchPiece({
        structure: "SSST",
        metadata: { id: "g", targetPosition: { x: 450, y: 200 } },
      });
      background.sketchPiece({
        structure: "STTS",
        metadata: { id: "h", targetPosition: { x: 550, y: 200 } },
      });
      background.sketchPiece({
        structure: "TSTS",
        metadata: { id: "i", targetPosition: { x: 650, y: 200 } },
      });
      background.sketchPiece({
        structure: "-SSS",
        metadata: { id: "j", targetPosition: { x: 750, y: 200 } },
      });
      background.sketchPiece({
        structure: "ST-T",
        metadata: { id: "k", targetPosition: { x: 350, y: 300 } },
      });
      background.sketchPiece({
        structure: "TSTT",
        metadata: { id: "l", targetPosition: { x: 450, y: 300 } },
      });
      background.sketchPiece({
        structure: "STSS",
        metadata: { id: "m", targetPosition: { x: 550, y: 300 } },
      });
      background.sketchPiece({
        structure: "TTTT",
        metadata: { id: "n", targetPosition: { x: 650, y: 300 } },
      });
      background.sketchPiece({
        structure: "-SST",
        metadata: { id: "o", targetPosition: { x: 750, y: 300 } },
      });
      background.sketchPiece({
        structure: "ST-S",
        metadata: {
          id: "p",
          targetPosition: { x: 350, y: 400 },
          currentPosition: { x: 150, y: 280 },
        },
      });
      background.sketchPiece({
        structure: "TSTT",
        metadata: { id: "q", targetPosition: { x: 450, y: 400 } },
      });
      background.sketchPiece({
        structure: "TTSS",
        metadata: { id: "r", targetPosition: { x: 550, y: 400 } },
      });
      background.sketchPiece({
        structure: "SSSS",
        metadata: { id: "s", targetPosition: { x: 650, y: 400 } },
      });
      background.sketchPiece({
        structure: "-STT",
        metadata: {
          id: "t",
          targetPosition: { x: 750, y: 400 },
        },
      });
      background.sketchPiece({
        structure: "T--S",
        metadata: {
          id: "u",
          targetPosition: { x: 350, y: 500 },
          currentPosition: { x: 250, y: 500 },
        },
      });
      background.sketchPiece({
        structure: "T-ST",
        metadata: {
          id: "v",
          targetPosition: { x: 450, y: 500 },
        },
      });
      background.sketchPiece({
        structure: "T-SS",
        metadata: { id: "w", targetPosition: { x: 550, y: 500 } },
      });
      background.sketchPiece({
        structure: "S-ST",
        metadata: {
          id: "x",
          targetPosition: { x: 650, y: 500 },
        },
      });
      background.sketchPiece({
        structure: "--TT",
        metadata: {
          id: "y",
          targetPosition: { x: 750, y: 500 },
        },
      });
      //   background.solve();
      //   background.shuffle(0.7);
      background.draw();

      //   background.autogenerate({
      //     horizontalPiecesCount: 7,
      //     verticalPiecesCount: 5,
      //   });

      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    };
  },
};
</script>
  
  
  