// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import "../common/alert";
import Swiper from "swiper";

import "./vue.min";

const newItemHeight = $(".news-container .news-box .right-layout .news-list .news-item").outerHeight();
$(".news-container .news-box .right-layout .news-list").css("height",newItemHeight * 6 + "px");


new Swiper(".news-img-container", {
  loop: true,
  pagination: {
    el: ".news-swiper-pagination",
    clickable: true,
  },
});

new Swiper(".baoguo-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".baoguo-swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".baoguo-button-prev",
    nextEl: ".baoguo-button-next",
  },
});

new Swiper(".pingan-swiper", {
  loop: true,
  // pagination: {
  //   el: ".pingan-pagination",
  //   clickable: true,
  // },
  navigation: {
    prevEl: ".pingan-button-prev",
    nextEl: ".pingan-button-next",
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
new Swiper(".safety-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    prevEl: ".safety-button-prev",
    nextEl: ".safety-button-next",
  },
});

new Swiper(".faq-swiper", {
  loop: true,
  // pagination: {
  //   el: ".faq-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // },
  navigation: {
    prevEl: ".faq-button-prev",
    nextEl: ".faq-button-next",
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

new Vue({
  el: "#liuxue",
  data() {
    return {
      liuxueList: window.liuxueList,
      limit: Math.ceil(window.liuxueList.length / 4),
      liuxueIndex: 0,
      newLiuxueList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let liuxueList = this.liuxueList.slice(
        this.liuxueIndex * 4,
        this.liuxueIndex * 4 + 4
      );
      this.newLiuxueList[this.liuxueIndex] = [];
      this.newLiuxueList[this.liuxueIndex].push(liuxueList.slice(0, 1));
      this.newLiuxueList[this.liuxueIndex].push(liuxueList.slice(1, 4));
    },
    videoOpen(video) {
      $(".alert-video").attr("src", video);
      $(".alert-video").get(0).play();
      $(".alert-container").fadeIn();
    },
    changeIndex(i) {
      this.liuxueIndex = i;
      this.getList();
    },
  },
});
