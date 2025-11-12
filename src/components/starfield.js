const starCount = 1000;
const stars = [];

function createStars() {
  const starfield = document.querySelector(".starfield");

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    const size = Math.random() * 20 + 1; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const xMove = `${Math.random() * 40 - 20}vw`;
    const yMove = `${Math.random() * 40 - 20}vh`;
    const duration = Math.random() * 30000 + 300;

    star.style.setProperty("--x-move", xMove);
    star.style.setProperty("--y-move", yMove);

    star.style.animation = `float ${duration}s infinite alternate ease-in-out`;

    star.dataset.hovered = "false";

    starfield.appendChild(star);
    stars.push(star);
  }
}

createStars();

document.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  stars.forEach((star) => {
    const starX = star.getBoundingClientRect().left + star.offsetWidth / 2;
    const starY = star.getBoundingClientRect().top + star.offsetHeight / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
    );

    if (distance < 100) {
      star.style.opacity = 1;
      star.style.transform = `scale(2)`;


      if (star.dataset.hovered === "false") {
        star.dataset.hovered = "true";
      }
    } else {
      star.style.opacity = 0.4;
      star.style.transform = `scale(1)`;
      star.style.backgroundColor = "#ffffff";
    }
  });
});
