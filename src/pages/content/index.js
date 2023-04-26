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

const videoPage = new Vue({
  el: "#video-page",
  data() {
    return {
      videoList: [],
      index: 0,
      limit: Math.ceil(window.videoList.length / 4),
      total:window.videoList.length
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let videoList = window.videoList.slice(
        this.index * 4,
        this.index * 4 + 4
      );
      this.videoList.push(...videoList.slice(0, 4));
    },
    videoOpen(video) {
      $(".alert-video").attr("src", video);
      $(".alert-video").get(0).play();
      $(".alert-container").fadeIn();
    },
    changeIndex(i) {
      this.index = i;
      this.getList();
    },
    showMore(){
      this.index ++;
      this.getList();
    }
  },
});
const schoolPage = new Vue({
  el: "#school-page",
  data() {
    return {
      schoolList: [],
      index: 0,
      limit: Math.ceil(window.schoolList.length / 6),
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let schoolList = window.schoolList.slice(
        this.index * 6,
        this.index * 6 + 6
      );
      console.log(schoolList);
      this.schoolList[this.index] = schoolList.slice(0, 6);
    },
    videoOpen(item) {
      if (item.type === "视频") {
        $(".alert-box .video img").hide();
        $(".alert-video").show();
        $(".alert-video").attr("src", item.video);
        $(".alert-video").get(0).play();
      } else if (item.type === "图片") {
        $(".alert-video").hide();
        $(".alert-box .video").find("img").remove();
        $(".alert-box .video").append(`<img src="${item.img}" />`);
        $(".alert-box .video img").show();
      }
      $(".alert-container").fadeIn();
    },
    changeIndex(i) {
      this.index = i;
      this.getList();
    },
  },
});
let recommendSwiper = new Swiper(".recommend-swiper", {
  loop:true,
  navigation: {
    prevEl: ".recommend-button-prev",
    nextEl: ".recommend-button-next",
  },
})
let textSwiper = new Swiper(".text-swiper", {
  loop:true,
  controller: {
    control: recommendSwiper,
  }
})

recommendSwiper.controller.control = textSwiper;//recommendSwiper控制textSwiper，需要在textSwiper初始化后
textSwiper.controller.control = recommendSwiper;//textSwiper控制recommendSwiper，需要在Swiper1初始化后

new Swiper(".team-swiper", {
  loop: true,

  slidesPerView: 2,
  spaceBetween: 5,
  slidesPerGroup: 2,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 36,
      slidesPerGroup: 4,
    },
  },
  navigation: {
    prevEl: ".team-button-prev",
    nextEl: ".team-button-next",
  },
});
