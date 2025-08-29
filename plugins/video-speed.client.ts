import { useRouter } from "vue-router";

export default defineNuxtPlugin(() => {
  if (process.server) return;

  const router = useRouter();

  const GLOBAL_DEFAULT_SPEED = 1.0;
  let observer: MutationObserver | null = null;
  const unbindVideoFns = new Set<() => void>();

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

    const rateChangeHandler = () => {
      if (video.playbackRate !== defaultSpeed) {
        video.defaultPlaybackRate = video.playbackRate;
      }
    };

    video.addEventListener("loadedmetadata", setDefaultSpeed);
    video.addEventListener("play", setDefaultSpeed);
    video.addEventListener("ratechange", rateChangeHandler);

    const unbind = () => {
      video.removeEventListener("loadedmetadata", setDefaultSpeed);
      video.removeEventListener("play", setDefaultSpeed);
      video.removeEventListener("ratechange", rateChangeHandler);
    };

    unbindVideoFns.add(unbind);
  }

  function startObserver() {
    document
      .querySelectorAll("video")
      .forEach((v) => initVideoSpeed(v as HTMLVideoElement));

    observer = new MutationObserver((mutations) => {
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
  }

  function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    unbindVideoFns.forEach((fn) => fn());
    unbindVideoFns.clear();
  }

  // 初始化一次
  startObserver();

  // 路由切换时清理 + 重启
  router.beforeEach((to, from, next) => {
    cleanup();
    next();
    requestAnimationFrame(() => startObserver());
  });
});
