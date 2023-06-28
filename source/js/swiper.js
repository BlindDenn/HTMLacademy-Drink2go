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
