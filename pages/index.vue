<template>
  <div class="page">
    <Loading />
    <Landing />
    <Introduce />
    <!-- <IntroduceBox /> -->
    <Policy />
    <!-- <Timeline class="custom-timeline" :colorMode="colorMode" :lang="lang" /> -->
    <div
      class="custom-timeline"
      id="timeline-embed"
      style="width: 1440px; height: 650px"
    ></div>
    <Sponsor />
    <Contact />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css",
      crossorigin: "",
    },
  ],
  script: [
    {
      src: "https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js",
      type: "text/javascript",
      body: true,
      defer: true,
    },
  ],
});
const options = {
  timenav_position: "top",
};
onMounted(() => {
  if (process.client) {
    console.log(`srcId`, srcID.value);
    window.timeline = new TL.Timeline(
      "timeline-embed",
      `https://docs.google.com/spreadsheets/d/${srcID.value}/pubhtml`,
      options
    );
  }
});
const { preference } = useColorMode();
const { locale } = useI18n();

const colorMode = ref(preference);
const lang = ref(locale);
// const srcID = ref("");

// const srcID = computed(() => {
//   console.log(`lang.value`, lang.value);
//   if (lang.value === "zhTW")
//     return "1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI";
//   else if (lang.value == "meow")
//     return "1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg";
// });

const srcID = computed({
  // getter
  get() {
    return lang.value === "zhTW"
      ? `1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI`
      : `1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg`;
  },
  // setter
  set(newValue) {
    console.log(`newValue`, newValue);
    if (lang.value === "zhTW")
      return "1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI";
    else if (lang.value == "meow")
      return "1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg";
  },
});
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
.custom-timeline :deep(.tl-timenav) {
  background-color: transparent;
  border: none;
}
</style>
