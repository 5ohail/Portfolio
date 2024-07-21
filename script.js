gsap.to("#slidingText",{

    transform: "translate(-80%,0)",

    scrollTrigger:{
        trigger: "#slidingText",
        slider: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 5,

    }

})
gsap.from("#about h1",{
    y : 50,
    opacity: 0,
    stagger:3,
    duration:5,
    scrollTrigger:{
        trigger: "#about h1",
        slider: "body",
       start: "top 90%`",
       end: "top 50%",
       scrub:5,

    }
})
gsap.to("#arrow svg",{
    rotate:90,
    scrollTrigger:{
        trigger: "#arrow svg",
        start: "top -20%",
        end: "top 100%",
        scrub: 3
    },
})