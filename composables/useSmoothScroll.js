import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {

  general.scrollLenis = new Lenis()

  general.scrollLenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    general.scrollLenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);
}