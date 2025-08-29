export default defineNuxtPlugin(() => {
  if (process.server) return;

  const GLOBAL_DEFAULT_SPEED = 1.0; // 没写 data-speed 时用这个

  function initVideoSpeed(video: HTMLVideoElement) {
    if (video.dataset._initSpeed) return;
    video.dataset._initSpeed = "true";

    const defaultSpeed =
      parseFloat(video.dataset.speed || String(GLOBAL_DEFAULT_SPEED)) ||
      GLOBAL_DEFAULT_SPEED;

    function setDefaultSpeed() {
      video.defaultPlaybackRate = defaultSpeed;
      video.playbackRate = defaultSpeed;
    }

    // 元数据加载后尝试设置
    video.addEventListener("loadedmetadata", setDefaultSpeed);

    // 播放时兜底，确保生效
    video.addEventListener("play", setDefaultSpeed);

    // 用户手动调整 -> 记住用户的选择
    video.addEventListener("ratechange", () => {
      if (video.playbackRate !== defaultSpeed) {
        video.defaultPlaybackRate = video.playbackRate;
      }
    });
  }

  // 初始化已有 video
  document
    .querySelectorAll("video")
    .forEach((v) => initVideoSpeed(v as HTMLVideoElement));

  // 监听 DOM 变化，处理动态添加的 video
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLVideoElement) {
          initVideoSpeed(node);
        } else if (node instanceof HTMLElement) {
          node
            .querySelectorAll("video")
            .forEach((v) => initVideoSpeed(v as HTMLVideoElement));
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
