gsap.from("#card", {
    y:100,
    duration:2,
    delay:1,
    opacity:0,
})

gsap.to("#text",{
    delay:1,
    duration:2,
    text:{
        value: "Version:V2.0",
        newClass:"text2",
        delimiter:"",
    },
})
