import "./index.less";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";

new Swiper(".banner-container", {
  pagination: {
    el: ".banner-swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay:{
    delay:3000
  }
});
