<template>
  <v-container fill-height style="max-width: 600px">
    <!-- https://coolors.co/palette/0081a7-00afb9-fdfcdc-fed9b7-f07167 -->
    <v-row dense>
      <v-col cols="12">
        <v-list disabled dense>
          <v-subheader>Ranking</v-subheader>
          <v-list-item-group color="primary">
            <template v-for="(item, i) in items">
              <v-list-item :key="i">
                <v-list-item-icon>
                  {{ item.rank }}
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-title
                    v-if="item.name == 'Nullacht! Ultimate'"
                    class="amber--text"
                    >Spiritsieger</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <template v-if="item.rank == '11b'">
                <h5 :key="i">Absteiger</h5>
              </template>
            </template>
          </v-list-item-group>
        </v-list>
        <v-btn
          href="https://scores.frisbeesportverband.de/?view=poolstatus&series=1478"
        >
          Zeige alle Gruppe & Ergebnisse</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-card color="primary" class="accent--text">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Spielplan</v-card-title>
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
    items: [
      { rank: "1", name: "Disconnection" },
      { rank: "2", name: "Frau Rauscher & the Bembelboys" },
      { rank: "3", name: "Deine Mudder Bremen" },
      { rank: "4", name: "Colorado" },
      { rank: "5", name: "Nullacht! Ultimate" },
      { rank: "6", name: "NextGen" },
      { rank: "7", name: "Ars Ludendi" },
      { rank: "8", name: "SugarMix" },
      { rank: "9", name: "Huckks Ultimate Club" },
      { rank: "10", name: "Mainzelrenner" },
      { rank: "11a", name: "Maultaschen" },
      { rank: "11b", name: "Hässliche Erdferkel" },
      { rank: "13a", name: "Hamburg Sturmflut" },
      { rank: "13b", name: "Disckick" },
      { rank: "15", name: "Monaco Mix" },
      { rank: "16", name: "Die 7 Todsünden" },
    ],
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
