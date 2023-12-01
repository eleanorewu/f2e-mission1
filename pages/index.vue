<template>
  <div class="page">
    <Loading />
    <Landing />
    <Introduce />
    <!-- <IntroduceBox /> -->
    <Policy />
    <!-- <Timeline class="custom-timeline" :colorMode="colorMode" :lang="lang" /> -->
    <div class="block">
      <h4 class="block-title" id="timeline">{{ $t("nav[2]") }}</h4>
      <div
        class="custom-timeline"
        id="timeline-embed"
        style="width: 1440px; height: 650px"
      ></div>
    </div>
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

const { preference } = useColorMode();
const { locale } = useI18n();
const colorMode = ref(preference);

const srcID = ref("");
srcID.value =
  locale.value === "zhTW"
    ? "1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI"
    : "1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg";

watch(locale, (newValue, oldValue) => {
  if (newValue === "zhTW") {
    srcID.value = "1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI";
  } else {
    srcID.value = "1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg";
  }
  initTimeline();
});

const initTimeline = () => {
  window.timeline = new TL.Timeline(
    "timeline-embed",
    `https://docs.google.com/spreadsheets/d/${srcID.value}/pubhtml`,
    options
  );
};

onMounted(() => {
  if (process.client) {
    initTimeline();
  }
});
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}

.block-title {
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: var(--block-title-bg);
  color: var(--color-text);
  margin-bottom: 0;
}

:deep(.tl-timenav) {
  background-color: var(--main-bg);
  border: none;
}
</style>
