<template>
  <v-btn-toggle v-model="$i18n.locale">
    <v-btn size="small" class="language"
           v-for="idiom in languages"
           :value="idiom">{{ idiom }}</v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "Languages",
  data() {
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

<style scoped>
.language{
  color: black;
  background-color: darkorange;
  border: 3px solid black;
}
</style>
