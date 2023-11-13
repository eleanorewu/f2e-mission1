<template>
  <div class="page">
    <Loading />
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <Card />
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
