<template>
  <div class="block">
    <Title />
    <div class="container container--sponsor"></div>
    <button>前往捐款</button>
  </div>
</template>

<script setup>
import Title from "@/components/Sponsor/Title.vue";
</script>

<style scoped>
.container--sponsor {
  height: 200px;
}
</style>
