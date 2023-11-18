import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
  
  let tl = gsap.timeline();
  tl.to('.big-title', {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".landing",
      scrub: true,
    },
  });
  tl.to('.sub-title', {
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".landing",
      scrub: true,
    }
  })
  tl.to('.content', {
    yPercent: -60,
    ease: "none",
    scrollTrigger: {
      trigger: ".landing",
      scrub: true,
    }
  })

  general.scrollLenis = new Lenis()

  general.scrollLenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    general.scrollLenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);
}