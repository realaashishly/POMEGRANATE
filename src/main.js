gsap.registerPlugin(ScrollTrigger, Draggable)

const container = document.querySelector(".hero__images-wrapper");
const scrollImage = document.querySelector(".image-fill");

var boxWidth = scrollImage.clientWidth;






// const sizeOfImage = scrollImage.clientWidth;

let tl = gsap.timeline();
tl.to(container, {
    x: "-450px",
    scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "+500px",
        scrub: true,
        // markers: true
      }
})



Draggable.create(container, {
  type: "x",
  inertia: true,
  bounds: { 
    left: 0,
    width: 1000,
  } 
});


function updateProgress() {
  if (timeLine)
    timeLine.progress(
      wrapProgress(gsap.getProperty(proxy, "x") / carouselWidth)
    );
};



document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.floating-nav__link');

  const scrollPosition = window.scrollY;

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Remove 'active-link' class from all links
          navLinks.forEach(otherLink => {
              otherLink.classList.remove('w--current');
          });

          // Add 'active-link' class to the clicked link
          link.classList.add('w--current');
      });
  });
});





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


