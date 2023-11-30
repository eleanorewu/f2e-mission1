<template>
  <div class="page">
    <Timeline :colorMode="colorMode" :lang="lang" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { preference } = useColorMode();
const { locale } = useI18n();

const colorMode = ref(preference);
const lang = ref(locale);
</script>

<style scoped></style>
