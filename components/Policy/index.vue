<template>
  <div class="block">
    <Title />
    <div class="container container--policy">
      <div class="flip flip1">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic1.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>政策一</h4>
            <b>全面引入貓咪</b>
            <b>幫助人類演化</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>打造城市貓咪吉祥物</h4>
            <p>
              改善城市設施並提供貓咪友善的空間，例如：貓咪公園和貓咪咖啡廳，讓人類的生活被可愛貓咪入侵，增加身心靈快樂指數♥♥♥
            </p>
            <h4>你領養 ! 我減稅 !</h4>
            <p>
              當人類領養或收留流浪貓時，只要提出相關證明文件通過申請後，可以獲得一定的稅收減免，鼓勵人們合法收養寵物並提供資源支持貓咪的基本護理和保護。
            </p>
            <h4>散播迷因散播愛</h4>
            <p>每日於社群平台發佈貓咪迷因貼文，追蹤起來人生更快樂！</p>
          </div>
        </div>
      </div>
      <div class="flip flip2">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic2.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>政策二</h4>
            <b>人類無障礙</b>
            <b>貓貓才會愛</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>落實友善的無障礙社區</h4>
            <p>
              改善無障礙通行道路、步道，落實無障礙交通設施和公共空間，以便所有人和寵物都能夠輕鬆移動，讓人類和毛孩都能通行無阻享受生活。
            </p>
            <h4>建立無障礙資訊社會</h4>
            <p>
              確保網站和數位應用都具備無障礙功能，提供教育訓練給網站開發者，同時推動無障礙數位內容標準之執行。
            </p>
            <h4>無障礙住房成為基本權利</h4>
            <p>
              供財政激勵計劃鼓勵現有住房進行無障礙改造，新建住房項目應具備無障礙入口和設施。
            </p>
          </div>
        </div>
      </div>
      <div class="flip flip3">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic3.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>政策三</h4>
            <b>友善動物</b>
            <b>快樂人類</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>保護弱勢野生動物</h4>
            <p>
              強化法律保護動物和加強執法措施，打擊動物虐待行為，包括非法盜獵和非法寵物交易，確保動物的生存的權利與福祉。
            </p>
            <h4>設立認養小棧</h4>
            <p>
              持續開發毛孩多元認養管道，結合鄰里辦公室設立愛心認養小棧，增加曝光及認養機會，也讓民眾認養更佳便利。
            </p>
            <h4>犬貓長照服務</h4>
            <p>
              為長期傷殘、罹患慢性疾病或高齡毛孩提供妥善照護友善環境，提升動物長照醫療福祉。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Policy/Title.vue";
</script>

<style scoped>
.container--policy {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  @media screen and (width <= 560px) {
    flex-direction: column;
  }
}
/* base */
.flip {
  position: relative;
  > .front,
  > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  > .front {
    transform: rotateY(0deg);
  }
  > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
}
/* custom */
.flip {
  width: 30%;
  height: 28rem;
  min-width: 20rem;
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  @media screen and (width <= 560px) {
    width: 85%;
    min-width: 16rem;
  }
  > .front,
  > .back {
    width: 100%;
    height: 100%;
    display: block;
    color: var(--color-text);
    padding: 1em 2em;
    background-color: var(--policy-card-bg);
    border-radius: 1rem;
    border: 3px solid var(--color-white);
    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: var(--color-text);
    }
  }
}
.card-img {
  margin: 3rem;
  width: 50%;
}
.card-front-info {
  max-width: 10rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translatex(-50%);
  font-size: 1.25rem;
  & h4 {
    background-color: var(--color-white);
    color: var(--color-primary-dark);
    font-size: 1.5rem;
  }
}
.card-back-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 1rem;
  & h4 {
    font-size: 1.25rem;
  }
  & p {
    font-size: 1rem;
    color: var(--card-content);
    margin-bottom: 1rem;
  }
}
</style>
