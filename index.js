// 初始化轮播图
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoHeight: true,
  // watchSlidesProgress: true,
});
