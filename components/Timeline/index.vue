<template>
  <div class="timeline">
    <Title />
    <iframe
      src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI&font=Default&lang=zh-tw&start_at_end=true&initial_zoom=0&timenav_position=top&height=650"
      width="100%"
      height="650"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import Title from "@/components/Timeline/Title.vue";
</script>

<style scoped>
.timeline {
  width: 100%;
  height: auto;
}
#timeline_wrapper {
  position: absolute;
  top: 210px;
  left: 0;
  right: 0;
  bottom: 0;
}

#panel {
  background: #ededed;
  height: 156px;
  padding: 6px 4px;
  border-top: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
#panel button {
  width: 100px;
}
#panel label {
  margin-right: 4px;
}
</style>
