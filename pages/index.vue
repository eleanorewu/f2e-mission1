<template>
  <div class="page">
    <Loading />
    <Card />
    <IntroduceBox />
    <h2>喵喵的最新軌跡</h2>
    <Timeline />
    <ContactForm />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
