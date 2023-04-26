function updateGifPositions(initial) {
  const gifs = document.querySelectorAll(".gif");

  gifs.forEach((gif, index) => {
    const scale = Math.pow(0.9, index);
    const translateX = -25 * index;
    gif.style.transform = `scale(${scale}) translateX(${translateX}%)`;
    gif.style.zIndex = 6 - index;
    gif.style.filter = index === 0 ? "grayscale(0%)" : "grayscale(100%)";

    if (initial) {
      gif.style.transition = "none";
    } else {
      gif.style.transition = "all 0.3s";
    }
  });
}

document.querySelectorAll(".title").forEach((title, titleIndex) => {
  title.addEventListener("click", () => {
    const gifId = title.dataset.gif;
    const gif = document.getElementById(gifId);
    const gifContainer = gif.parentElement;

    // Move the clicked GIF to the front
    gifContainer.insertBefore(gif, gifContainer.firstChild);

    updateGifPositions(false);
  });
});

updateGifPositions(true);
