<template>
  <v-container fill-height style="max-width: 600px">
    <!-- https://coolors.co/palette/0081a7-00afb9-fdfcdc-fed9b7-f07167 -->
    <v-row dense>
      <v-col cols="12">
        <v-card color="primary" class="accent--text">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Spielplan</v-card-title>

              <v-card-subtitle>Alternativen Spielplan beachten!</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="80" tile>
              <v-icon large color="accent">mdi-timetable</v-icon>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn to="spielplan"> Spielplan </v-btn>
            <v-btn
              href="https://docs.google.com/spreadsheets/d/1EzHCebxjz8VHn3ol5Ms7yrOwSDSn3Z1YfFdHsfeM50M/edit#gid=424615547"
              target="_blank"
            >
              New tab<v-icon right dark> mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <Lageplan />
      <v-col cols="12">
        <v-card color="error">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Spirit</v-card-title>

              <v-card-subtitle>Google Form</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="80" tile>
              <v-icon large>mdi-heart-multiple</v-icon>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn to="spirit"> Spirit </v-btn>
            <v-btn
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuHjSZraifL-MjsvoZLOscLMfcgRA96VmlG5Or6pLFrifSNg/viewform"
              target="_blank"
            >
              New tab<v-icon right dark> mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="accent">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Live-Stream</v-card-title>
              <v-card-subtitle>Feld 2</v-card-subtitle>
              <v-card-actions>
                <v-btn
                  href="https://www.youtube.com/c/DeutscherFrisbeesportVerband"
                  target="_blank"
                >
                  DFV - Youtube <v-icon right>mdi-youtube</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="80" tile>
              <v-icon large>mdi-television</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="info">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Restaurantliste</v-card-title>
              <v-card-actions>
                <v-btn to="restaurantliste"> Liste </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="80" tile>
              <v-icon large>mdi-food</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat class="mx-auto mt-4" max-width="600px">
      <v-card-text class="py-0">
        <v-card-title>Samstag</v-card-title>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <template v-for="(item, key) in timelines">
            <v-timeline-item :key="key" :color="item.color" small>
              <v-row class="pt-1">
                <v-col>
                  <strong v-if="item.endtime"
                    >{{ item.time }} - {{ item.endtime }}</strong
                  >
                  <strong v-else>{{ item.time }}</strong>
                </v-col>
                <v-col>
                  <strong>{{ item.title }}</strong>
                  <div class="text-caption">{{ item.subtitle_1 }}</div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </template>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    timelines: [
      { time: "08:00", title: "Captains Meeting" },
      { time: "07:00", endtime: "10:00", title: "Frühstück" },
      {
        time: "11:00",
        endtime: "17:00",
        title: "Salatbuffet und Maultaschen(burger)",
      },
    ],
  }),
};
</script>

<style>
</style>
