<template>
  <v-container>
    <Lageplan />
    <vue-pdf-embed
      source="/mixed-dm-2022/GeländeplanMixedDM_220831.pdf"
      style="max-width: 800px"
      class="mx-auto"
    />
    <v-card-text>
      <strong>
        Feld 5 (Warm-Up-Feld) nur mit Tausendfüßlern oder Laufschuhen benutzen
        (ist ein Hockeyrasen)</strong
      >
    </v-card-text>

    <Vor-Ort />
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>