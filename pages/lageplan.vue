<template>
  <v-card color="#00afb9">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5"> Lageplan</v-card-title>
        <v-card-subtitle>
          PTSV Jahn Freiburg <br />
          Schwarzwaldstr. 187-189
        </v-card-subtitle>

        <v-card-subtitle>
          nächstgelegene Tram-Station heißt Hasemannstraße
          <v-btn
            href="https://www.vag-freiburg.de/fahrplan/fahrplanauskunft"
            target="_blank"
          >
            Fahrplanauskunft<v-icon right dark> mdi-train</v-icon>
          </v-btn>
        </v-card-subtitle>
        <v-card-text>
          Feld 5 (Warm-Up-Feld) nur mit Tausendfüßlern oder Laufschuhen benutzen
          (ist ein Hockeyrasen)
        </v-card-text>
      </div>
      <v-avatar class="ma-3" size="80" tile>
        <v-icon large>mdi-map</v-icon>
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn
        href=" https://www.google.com/maps?q=PTSV+Jahn+Freiburg+Schwarzwaldstra%C3%9Fe.+187-189&biw=1920&bih=933&dpr=1&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiM_7yEoPH5AhWYi_0HHbIxBNcQ_AUoAXoECAIQAw"
        target="_blank"
      >
        Google Maps<v-icon right dark> mdi-google-maps</v-icon>
      </v-btn>

      <v-btn
        href="https://drive.google.com/file/d/1oYIdP5ib4SrkGOmKpr4oF2qoKFo2B7Hy/view"
        target="_blank"
      >
        Lageplan<v-icon right dark> mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>