import "./image-carousel-style.css";

const imageCarouselSources = document.querySelectorAll(
  ".image-carousel-slides img",
);

imageCarouselSources.forEach((img) => {});

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function scroll() {
  await sleep(5000);
}
