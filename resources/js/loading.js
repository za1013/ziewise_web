const video = document.getElementById("loading_video");
const loading_video_box = document.getElementById("loading_video_box");

video.addEventListener("ended", (e) => {
  loading_video_box.classList.add("close_video");
});
