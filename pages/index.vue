<template>
  <div class="page">
    <Loading />
    <Introduce />
    <!-- <IntroduceBox /> -->
    <Policy />
    <Timeline />
    <Sponsor />
    <Contact />
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
