const useLandingParallax = () => {
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
};

const useSponsorParallax = () => { 
  let e = gsap.timeline();
  e.to([".coin1", ".coin2", ".coin3", ".coin4"], {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".sponsor",
      scrub: true,
    }
  })
}

export { useLandingParallax, useSponsorParallax }