const initSwiper = () => {
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    autoHeight: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export { initSwiper };

// import Swiper from "./vendor/swiper-bundle.js";
// const activateSwiper = ()=>{
//     new Swiper(".swiper",{
//         loop: !0,
//         grabCursor: !0,
//         pagination: {
//             el: ".swiper__pagination",
//             bulletElement: "button",
//             bulletClass: "swiper__bullet button",
//             bulletActiveClass: "swiper__bullet--active",
//             clickable: !0
//         },
//         navigation: {
//             nextEl: ".swiper__button--next",
//             prevEl: ".swiper__button--prev"
//         },
//         wrapperClass: "swiper__wrapper",
//         slideClass: "swiper__slide",
//         slideActiveClass: "swiper__slide--active",
//         slideNextClass: "swiper__slide--next",
//         slidePrevClass: "swiper__slide--prev",
//         autoplay: {
//             delay: 5e3,
//             disableOnInteraction: !0
//         }
//     })
// }
// ;
// export {activateSwiper};
