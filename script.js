gsap.registerPlugin(ScrollTrigger);

const homeTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
homeTimeline
  .from("nav", { y: -60, opacity: 0, duration: 0.9 })
  .from("#home h1", { y: 35, opacity: 0, duration: 0.7 }, "-=0.35")
  .from("#home img", { scale: 0.92, opacity: 0, duration: 1 }, "-=0.3")
  .from("#slidingText h2", { xPercent: 6, opacity: 0, duration: 1 }, "-=0.5");

gsap.to("#slidingText", {
  xPercent: -55,
  ease: "none",
  scrollTrigger: {
    trigger: "#slidingText",
    scroller: "body",
    start: "top 82%",
    end: "top 20%",
    scrub: 1.8,
  },
});

gsap.from("#about h1", {
  y: 55,
  opacity: 0,
  stagger: 0.35,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 78%",
    end: "top 38%",
    scrub: 1.5,
  },
});

gsap.from(".skill-container", {
  opacity: 0,
  y: 60,
  stagger: 0.22,
  duration: 0.9,
  ease: "back.out(1.2)",
  scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    start: "top 82%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.to("#arrow svg", {
  rotate: 90,
  scrollTrigger: {
    trigger: "#arrow",
    start: "top -20%",
    end: "top 100%",
    scrub: 2,
  },
});

if (window.innerWidth <= 600) {
  document.querySelector("#resume").textContent = "get resume";
} else {
  document.querySelector("#resume").textContent = "get my resume offline";
}
