gsap.from("#page2 h1", {
   opacity:0,
    x: 500,
    duration:2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})

gsap.from("#page2 h2", {
    opacity:0,
     x: -500,
     duration:2,
     scrollTrigger: {
         trigger: "#page2 h2",
         scroller: "body",
         markers: true,
         start: "top 50%"
     }
 })

 gsap.from("#page3 #box", {
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub:2,
    }
})