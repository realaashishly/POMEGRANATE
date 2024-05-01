gsap.registerPlugin(ScrollTrigger)

const imageSlider = document.querySelector(".hero__images-wrapper");
const scrollImage = document.querySelector(".image-fill");

const sizeOfImage = scrollImage.clientWidth;

let tl = gsap.timeline();

tl.to(imageSlider, {
    x: "-450px",
    scrollTrigger: {
        trigger: imageSlider,
        start: "top bottom",
        end: "+500px",
        scrub: 1,
        // pin: true,
        markers: true
      }
})
