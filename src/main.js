gsap.registerPlugin(ScrollTrigger, Draggable)


const imageSlider = document.querySelector(".hero__images-wrapper");
const container = document.querySelector(".hero__work-slider");
const scrollImage = document.querySelector(".image-fill");
const wrapProgress = gsap.utils.wrap(0, 1);

var boxWidth = scrollImage.clientWidth;






// const sizeOfImage = scrollImage.clientWidth;

let tl = gsap.timeline();

tl.to(imageSlider, {
    x: "-450px",
    scrollTrigger: {
        trigger: imageSlider,
        start: "top bottom",
        end: "+500px",
        scrub: true,
        // markers: true
      }
})



Draggable.create(imageSlider, {
  type: "x",
  bounds: container,
  inertia: true,
  
});


function updateProgress() {
  if (timeLine)
    timeLine.progress(
      wrapProgress(gsap.getProperty(proxy, "x") / carouselWidth)
    );
};





const faqRows = document.querySelectorAll('.faq__row');

    faqRows.forEach(row => {
        const rowAnswer = row.querySelector('.faq__answer');
        const rowArrow = row.querySelector('.faq__arrow');

        row.addEventListener('click', () => {
          const isAnswerVisible = rowAnswer.style.display !== 'none';

            // Toggle answer visibility
            if (isAnswerVisible) {
                        rowAnswer.style.display = 'none';
                        rowArrow.style.transform = 'rotate(0deg)';
                    } else {
                        rowAnswer.style.display = 'block';
                        rowArrow.style.transform = 'rotate(180deg)';
                    }
        });
    });


