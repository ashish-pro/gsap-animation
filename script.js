var tl = gsap.timeline();

tl.from("h2",{
    y: -25,
    opacity:0,
    duration: 1.5,
    delay:0.5
})

tl.from("h4",{
    y: -25,
    opacity:0,
    duration: 1.5,
    stagger:0.3
})

tl.from("h1",{
    y: 25,
    opacity: 0,
    duration: 1.5,
    scale: 0.2
})



