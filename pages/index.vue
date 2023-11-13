<template>
  <div class="page">
    <Loading />
    <!-- <select v-model="colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->
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
