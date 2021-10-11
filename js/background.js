const images = [
  "disney-magic-kingdom-castle.jpg",
  "frozen-olaf.jpg",
  "simba.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";

document.body.appendChild(bgImage);
