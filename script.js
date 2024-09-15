function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}


function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


function page2Animation(){
    // Single selecting b id
    // var relem = document.querySelector("#right-elem1")
    // var relemImg = document.querySelector("#right-elem1 img")

    // relem.addEventListener("mouseenter",function(){
    //     relemImg.style.opacity = 1
    // })

    var rightElem = document.querySelectorAll(".right-elem")

    rightElem.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            // elem.childNodes[3].style.opacity = 1
            gsap.to(elem.childNodes[3],{
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave",function(){
            // elem.childNodes[3].style.opacity = 0
            gsap.to(elem.childNodes[3],{
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x - 90, // Important proprty to move image in x or y axis
                y:dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}


function page3Videoanimation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")
    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })

    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })

    // Video animation for page 4 small video
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

    gsap.from("#btm6-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

    gsap.from("#btm6-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part4",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

function page7Animation(){
    // Single selecting b id
    // var relem = document.querySelector("#footer-animation h1")
    // var relemImg = document.querySelector("footer-animation svg")

    var rightElem = document.querySelector(".footer-animation")
    var cursor  = document.querySelector(".footer-animation svg")

    rightElem.addEventListener("mousemove", function(dets){
        // cursor.style.left = dets.x+"px",
        // cursor.style.top = dets.y+"px",
        gsap.to(cursor,{
            x:dets.x - 200,
            y:dets.y - 300
        })
        cursor.style.opacity = 1,
        cursor.style.scale = 1
    })

    rightElem.addEventListener("mouseleave", function(dets){
        cursor.style.opacity = 0,
        cursor.style.scale = 0
    })

}



locomotiveAnimation()

navAnimation()

page2Animation()

page3Videoanimation()

page6Animations()

loadingAnimation()

page7Animation()