<template>
  <div class="page">
    <Loading />
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <Card />
    <!-- <NuxtLink
      to="https://store.line.me/stickershop/product/24123123/zh-Hant"
      title="另開新視窗 前往line貼圖"
      target="_blank"
      external
      >line貼圖</NuxtLink
    > -->
  </div>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
