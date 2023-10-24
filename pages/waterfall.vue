<template>
  <masonry-wall
    :items="items"
    :ssr-columns="1"
    :column-width="widths"
    :gap="16"
    :max-columns="4"
  >
    <template #default="{ item, index }">
      <div
        class="block-container"
        :style="{
          height: item.height,
          padding: '1rem',
        }"
      >
        <img :src="item.url" :alt="item.title" />
        <h1>{{ item.title }}</h1>
        <span>{{ item.description }}</span>
      </div>
    </template>
  </masonry-wall>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  {
    title: "First",
    description: "The first item.",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1143&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "300px",
  },
  {
    title: "Second",
    description: "The second item.",
    url: "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=1802&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "600px",
  },
  {
    title: "Third",
    description: "The third item.",
    url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "300px",
  },
  {
    title: "Forth",
    description: "The forth item.",
    url: "https://plus.unsplash.com/premium_photo-1664371206019-a82ba8d7c2e2?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "300px",
  },
  {
    title: "Fifth",
    description: "The fifth item.",
    url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "600px",
  },
  {
    title: "Sixth",
    description: "The sixth item.",
    url: "https://images.unsplash.com/photo-1572252821143-035a024857ac?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "400px",
  },
  {
    title: "Seventh",
    description: "The seventh item.",
    url: "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "300px",
  },
]);
const widths = ref([300, 300, 400, 300, 300, 600]);
</script>

<style>
.masonry-wall {
  margin: 1rem;
  margin-bottom: 6rem;
}
.block-container {
  position: relative;
}
img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  border-radius: 0.5rem;
}

h1 {
  position: relative;
  z-index: 1;
  color: violet;
}
span {
  position: relative;
  z-index: 1;
  color: violet;
}
</style>
