<template>
  <div class="masonry" id="masonry">
    <div class="item item1">
      <div>
        <img class="item-img" src="~/assets/images/avatar.png" alt="喵立翰" />
      </div>
      <div>
        <h4>喵立翰</h4>
        <p class="item-content">
          三歲已結紮公貓<br />
          隸屬 勸世貓黨<br />
          MBTI: ENFJ<br />
          不分區立委候選人1號<br />
          即使什麼都不做還是很可愛
        </p>
        <p class="item-content">#迷因貓貓 #無障礙挑戰 #珍奶殺手</p>
      </div>
    </div>
    <div class="item item2">
      <h4>喵的經歷</h4>
      <p class="item-content">
        人類馴化師<br />
        畢業於青椒田大學<br />
        曾出演百老匯音樂-貓<br />
        門薩會員<br />
        貓咪障礙賽冠軍<br />
        擁有無數個貓奴
      </p>
    </div>
    <div class="item item3">
      <h4>喵最愛看</h4>
      <p class="item-content">
        <b>
          <a href="https://www.youtube.com/channel/UCypzlOdJyyOR2NhKv0o3zig"
            >動物星球頻道</a
          ></b
        ><br />
        動物星球頻道是全球唯一的動物紀實娛樂頻道，有新奇、冒險、歡笑、動人情感、還有生與死，以熱情感性的深度內容，為人類與動物搭起橋樑。
      </p>
      <p class="item-content">
        <b
          ><a href="https://www.youtube.com/@fumeancats">皇阿瑪的後宮生活</a></b
        >
        <br />
        由台灣 YouTuber 志銘與狸貓兩位自稱貓奴的飼主，於2015年創辦的YouTube
        頻道。內容主要紀錄八隻貓咪的生活，受許多愛貓人士的喜愛。
      </p>
      <p class="item-content">
        <b><a href="https://www.youtube.com/@LadyFlavor">好味小姐</a></b
        ><br />
        創建了以貓咪日常和貓食製作為主題的 YouTube 頻道「好味小姐」
      </p>
    </div>
    <div class="item item4">
      <h4>競選總部</h4>
      <p class="item-content">喵星路9487巷87號空紙箱</p>
      <img class="item-img" src="~/assets/images/box.png" alt="空紙箱" />
    </div>
    <div class="item item5">
      <h4>喵的主題曲</h4>
      <p class="item-content">
        勸世寶貝-喵電感應<br />
        林強-向前走<br />
        葉啟田-愛拼才會贏<br />
        黃妃-追追追<br />
        滅火器-長途夜車<br />
      </p>
      <b>
        <a
          href="https://www.youtube.com/playlist?list=PLtClt7-lTL9-S_IQu9-x4aUX0pCByqY2j"
          >前往完整播放清單</a
        ></b
      >
    </div>
    <div class="item item6">
      <h4>喵的愛牌</h4>
      <p class="item-content">
        <b><a href="https://piman.cc/">Piman</a></b
        ><br />
        喵的嚴選品牌，致力打造網路無障礙空間而誕生的ＵＩ框架。
      </p>
      <p class="item-content">
        <b><a href="https://www.instagram.com/piman_a11y/">社群</a></b
        ><br />
        一起來看看 Ｐiman 都在 ig 做什麼。
      </p>
      <p class="item-content">
        <b><a href="https://kusdom.com/piman/zh_tw">周邊商品</a></b
        ><br />
        佛要金裝，貓要衣裝.... 最潮貓貓的衣著配件在這裡
      </p>
    </div>
    <div class="item item7">
      <h4>喵的盟友</h4>
      <p class="item-content">
        <b
          ><a href="https://ithelp.ithome.com.tw/users/20152260/ironman/5614"
            >無障礙大叔</a
          ></b
        ><br />
        本喵在青椒田大學就讀時的大大前輩-無障礙大叔，發表了一系列無障礙挑戰賽文章，看完讓你人生從此通行無阻。
      </p>
    </div>
    <div class="item item8">
      <h4>請喵喝珍奶</h4>
      <p class="item-content">
        本喵的口有點渴<br />
        請我喝一杯珍奶吧
      </p>
      <b
        ><a
          href="https://neillin.bobaboba.me/?source=post_page-----c7466b1faf76--------------------------------"
          >買珍奶給喵喵</a
        ></b
      >
    </div>
    <div class="item item9">
      <h4>喵的同盟</h4>
      <p class="item-content">
        <b><a href="https://www.facebook.com/CatPartyTaiwan/">台灣貓黨</a></b
        ><br />
        關注台灣貓黨，讓你歡樂無法黨（單押1)讓你時時刻刻被可愛籠罩
      </p>
    </div>
    <div class="item item10">
      <h4>喵生再走，貼圖要有</h4>
      <p class="item-content">你的心聲由貓咪來幫你訴說...<br /></p>
      <b
        ><a href="https://store.line.me/stickershop/product/24123123/zh-Hant"
          >點此前往購買Line貼圖</a
        ></b
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.masonry {
  width: 100%;
  display: grid;
  transition: height 0.2s ease;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    "in in ex me"
    "ad mu br me"
    "fr fr br te"
    "al al st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "in in"
      "ex ad"
      "mu te"
      "fr fr"
      "br me"
      "br me"
      "al al"
      "st st";
  }
  & .item {
    min-height: 180px;
    background-color: var(--masonry-card-bg);
    border: 1px solid var(--color-white);
    color: var(--color-text);
    padding: 2rem;
    border-radius: 1.5rem;
    text-align: left;
    transition: all 250ms ease 0s;
    will-change: transform;
    @media screen and (width <= 960px) {
      min-height: 160px;
      padding: 1rem;
    }
  }
}
.introduce {
  grid-template-areas:
    "in in ex ad"
    "mu te br me"
    "fr fr br me"
    "al al st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "in in"
      "mu ex"
      "ad te"
      "fr fr"
      "br me"
      "br me"
      "al al"
      "st st";
  }
  & .item3,
  .item6,
  .item7,
  .item8,
  .item9,
  .item10 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}

.friends {
  grid-template-areas:
    "fr fr br me"
    "al al br me"
    "in in ex ad"
    "mu te st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "fr fr"
      "al al"
      "br me"
      "br me"
      "in in"
      "mu ex"
      "ad te"
      "st st";
  }
  & .item1,
  .item2,
  .item4,
  .item5,
  .item8,
  .item10 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}
.support {
  grid-template-areas:
    "te st st ad"
    "br me in in"
    "br me fr fr"
    "al al ex mu";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "st st"
      "te ad"
      "br me"
      "br me"
      "in in"
      "fr fr"
      "al al"
      "mu ex";
  }
  & .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6,
  .item7,
  .item9 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}
.item-content {
  margin-bottom: 0.5rem;
  color: var(--card-content);
  line-height: 150%;
}
.item-img {
  width: 100%;
  max-width: 10rem;
  height: fit-content;
}
.item1 {
  /* grid-area: 1 / 1 / 2 / 3; */
  grid-row: span 1;
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  grid-area: in;
  /* @media screen and (width <= 960px) {
    grid-row: span 1;
  } */
}
.item2 {
  /* grid-area: 1 / 3 / 2 / 4; */
  grid-row: span 1;
  grid-column: span 1;
  grid-area: ex;
}
.item3 {
  /* grid-area: 1 / 4 / 3 / 5; */
  grid-row: span 2;
  grid-column: span 1;
  grid-area: me;
}
.item4 {
  /* grid-area: 2 / 1 / 3 / 2; */
  grid-row: span 1;
  grid-column: span 1;
  grid-area: ad;
}
.item5 {
  /* grid-area: 2 / 2 / 3 / 3; */
  grid-row: span 1;
  grid-column: span 1;
  grid-area: mu;
}
.item6 {
  /* grid-area: 2 / 3 / 4 / 4; */
  grid-row: span 2;
  grid-column: span 1;
  grid-area: br;
  /* @media screen and (width <= 960px) {
    grid-row: span 1;
  } */
}
.item7 {
  /* grid-area: 3 / 4 / 4 / 5; */
  grid-row: span 1;
  grid-column: span 2;
  grid-area: fr;
  /* @media screen and (width <= 960px) {
    grid-row: span 2;
    grid-column: span 1;
  } */
}

.item8 {
  /* grid-area: 3 / 1 / 4 / 3; */
  grid-row: span 1;
  grid-column: span 1;
  grid-area: te;
  /* @media screen and (width <= 960px) {
    grid-row: span 2;
    grid-column: span 1;
  } */
}
.item9 {
  /* grid-area: 4 / 1 / 5 / 3; */
  grid-row: span 1;
  grid-column: span 2;
  grid-area: al;
}
.item10 {
  /* grid-area: 4 / 3 / 5 / 5; */
  grid-row: span 1;
  grid-column: span 2;
  grid-area: st;
}
</style>
