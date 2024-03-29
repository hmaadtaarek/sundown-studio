function locomotive(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
}


const fixedImage = document.querySelector('.fixed_image');
const projectContainer = document.querySelector('.projects_main');
const elems = document.querySelectorAll('.elem');
elems.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        const image = elem.getAttribute('data-image')
        fixedImage.style.display = 'block';
        fixedImage.style.background = `url(${image})`
        fixedImage.style.backgroundSize = 'cover'
        fixedImage.style.backgroundPosition = 'center'
    })
})
// projectContainer.addEventListener('mouseenter',function(){
//     fixedImage.style.display = 'block';
// })
// projectContainer.addEventListener('mouseleave',function(){
//     fixedImage.style.display = 'none';
// })

// const elems = document.querySelectorAll('.elem');
elems.forEach(function(elem){
    elem.addEventListener('mouseleave',function(){
        const image = elem.getAttribute('data-image')
        fixedImage.style.display = 'none';
        // fixedImage.style.background = `url(${image})`       
    })
})
locomotive()

// const footer = document.querySelector(".footer")
// const sectionFooter = document.querySelector(".section_footer")
// gsap.registerPlugin(ScrollTrigger);

//     gsap.to("footer", {
//         y: "-100%",
//         ease: "power2.inOut",
//         scrollTrigger: {
//             trigger: "sectionFooter",
//             start: "top top",
//             end: "bottom bottom",
//             scrub: 1, // Adjust scrub value for the speed of the animation
//         }
//     });