<template>
  <div class="page">
    <Loading />
    <select v-model="colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <Card />
    <IntroduceBox />
    <!-- <NuxtLink
      to="https://store.line.me/stickershop/product/24123123/zh-Hant"
      title="另開新視窗 前往line貼圖"
      target="_blank"
      external
      >line貼圖</NuxtLink
    > -->
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
