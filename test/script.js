document.addEventListener('DOMContentLoaded', function() {
  const leftTrack = document.querySelector('.track.left');
  const rightTrack = document.querySelector('.track.right');
  let currentTranslateXLeft = -100;
  let currentTranslateXRight = 100;

  window.addEventListener('wheel', function(event) {
    event.preventDefault();  // 阻止默认滚动行为

    // 左侧文字移动
    currentTranslateXLeft -= event.deltaY * 0.1;
    currentTranslateXLeft = Math.min(Math.max(currentTranslateXLeft, -100), 100);
    leftTrack.style.transform = `translateX(${currentTranslateXLeft}%)`;

    // 右侧文字移动
    currentTranslateXRight += event.deltaY * 0.1;
    currentTranslateXRight = Math.min(Math.max(currentTranslateXRight, -100), 100);
    rightTrack.style.transform = `translateX(${currentTranslateXRight}%)`;
  });
});
