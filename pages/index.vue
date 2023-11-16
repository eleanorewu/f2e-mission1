<template>
  <div class="page">
    <Loading />
    <Landing />
    <Introduce />
    <!-- <IntroduceBox /> -->
    <Policy />
    <Timeline :colorMode="colorMode" :lang="lang" />
    <Sponsor />
    <Contact />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { preference } = useColorMode();
const { locale } = useI18n()

const colorMode = ref(preference)
const lang = ref(locale)

</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
