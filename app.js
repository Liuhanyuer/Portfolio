function updateGifPositions(initial) {
  const gifs = document.querySelectorAll(".gif");

  gifs.forEach((gif, index) => {
    const scale = Math.pow(0.9, index);
    const translateX = -20 * index;
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
    const gifContainer = document.querySelector(".gif-container");

    const frontGif = document.querySelector(".gif-container .gif:nth-child(1)");

    const gifId = title.dataset.gif;
    const gif = document.getElementById(gifId);
    gifContainer.insertBefore(gif, frontGif);

    gifContainer.appendChild(frontGif);

    updateGifPositions(false);
    setActiveTitle(titleIndex);
  });
});

updateGifPositions(true);

function shuffleGifs() {
  const gifContainer = document.querySelector(".gif-container");
  const frontGif = document.querySelector(".gif-container .gif:nth-child(1)");
  gifContainer.appendChild(frontGif);
  updateGifPositions(false);
}

function startAutoShuffle(interval) {
  setInterval(() => {
    shuffleGifs();
  }, interval);
}

startAutoShuffle(3000);

function setActiveTitle(index) {
  const titles = document.querySelectorAll(".title");
  titles.forEach((title, i) => {
    if (i === index) {
      title.classList.add("title-selected");
    } else {
      title.classList.remove("title-selected");
    }
  });

  const titleLine = document.querySelector(".title-line");
  const titleHeight = titles[0].offsetHeight;
  titleLine.style.transform = `translateY(${index * titleHeight}px)`;
}

document.querySelectorAll(".title").forEach((title, titleIndex) => {
  title.addEventListener("click", () => {
    setActiveTitle(titleIndex);
  });
});

setActiveTitle(0);
