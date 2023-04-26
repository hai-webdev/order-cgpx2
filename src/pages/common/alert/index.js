import "./index.less";
window.onload = function () {
  $(".video-open").on("click", function () {
    const videoSrc = $(this).data("video");
    $(".alert-video").attr("src", videoSrc);
    $(".alert-video").get(0).play();
    $(".alert-container").fadeIn();
  });

  $(".alert-container .mask").on("click", function () {
    $(".alert-video").attr("src", "");
    $(".alert-video").get(0).pause();
    $(".alert-container").fadeOut();
  });
  $(".alert-container .close").on("click", function () {
    $(".alert-video").attr("src", "");
    $(".alert-video").get(0).pause();
    $(".alert-container").fadeOut();
  });
};
