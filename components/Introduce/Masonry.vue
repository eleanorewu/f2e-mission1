<template>
  <div class="masonry">
    <div class="item item1"><h4>喵立翰</h4></div>
    <div class="item item2"><h4>喵的經歷</h4></div>
    <div class="item item3"><h4>喵最愛看</h4></div>
    <div class="item item4"><h4>競選總部</h4></div>
    <div class="item item5"><h4>喵的主題曲</h4></div>
    <div class="item item6"><h4>喵的愛牌</h4></div>
    <div class="item item7"><h4>喵的盟友</h4></div>
    <div class="item item8"><h4>請喵喝珍奶</h4></div>
    <div class="item item9"><h4>喵的同盟</h4></div>
    <div class="item item10"><h4>喵生再走，貼圖要有</h4></div>
  </div>
</template>

<script setup></script>

<style scoped>
.masonry {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media screen and (width <= 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  & .item {
    min-height: 240px;
    background-color: var(--masonry-card-bg);
    border: 1px solid var(--color-white);
    color: var(--color-text);
    padding: 2rem 1rem;
    border-radius: 1.5rem;
    @media screen and (width <= 760px) {
      min-height: 180px;
    }
  }
}
.item1 {
  /* grid-area: 1 / 1 / 2 / 3; */
  grid-row: span 1;
  grid-column: span 2;
}
.item2 {
  /* grid-area: 1 / 3 / 2 / 4; */
  grid-row: span 1;
  grid-column: span 1;
}
.item3 {
  /* grid-area: 1 / 4 / 3 / 5; */
  grid-row: span 2;
  grid-column: span 1;
}
.item4 {
  /* grid-area: 2 / 1 / 3 / 2; */
  grid-row: span 1;
  grid-column: span 1;
}
.item5 {
  /* grid-area: 2 / 2 / 3 / 3; */
  grid-row: span 1;
  grid-column: span 1;
}
.item6 {
  /* grid-area: 2 / 3 / 4 / 4; */
  grid-row: span 2;
  grid-column: span 1;
  @media screen and (width <= 760px) {
    grid-row: span 1;
  }
}
.item7 {
  /* grid-area: 3 / 4 / 4 / 5; */
  grid-row: span 1;
  grid-column: span 2;
  @media screen and (width <= 760px) {
    grid-row: span 2;
    grid-column: span 1;
  }
}

.item8 {
  /* grid-area: 3 / 1 / 4 / 3; */
  grid-row: span 1;
  grid-column: span 1;
  @media screen and (width <= 760px) {
    grid-row: span 2;
    grid-column: span 1;
  }
}
.item9 {
  /* grid-area: 4 / 1 / 5 / 3; */
  grid-row: span 1;
  grid-column: span 2;
}
.item10 {
  /* grid-area: 4 / 3 / 5 / 5; */
  grid-row: span 1;
  grid-column: span 2;
}
</style>
