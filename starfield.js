const starCount = 1000; // Number of stars
const stars = [];

// Create stars randomly placed across the screen with random sizes and movement
function createStars() {
  const starfield = document.querySelector(".starfield");

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Random size for each star
    const size = Math.random() * 20 + 1; // Stars between 1px and 4px in size
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation direction and distance
    const xMove = `${Math.random() * 40 - 20}vw`; // Move between -100vw and 100vw
    const yMove = `${Math.random() * 40 - 20}vh`; // Move between -100vh and 100vh
    const duration = Math.random() * 30000 + 300; // Animation duration between 5 and 15 seconds

    star.style.setProperty("--x-move", xMove);
    star.style.setProperty("--y-move", yMove);

    // Apply the float animation
    star.style.animation = `float ${duration}s infinite alternate ease-in-out`;

    // Add a data attribute to store whether the star has been hovered
    star.dataset.hovered = "false";

    starfield.appendChild(star);
    stars.push(star);
  }
}

createStars();

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Brighten stars and change their color when the mouse is near
document.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  stars.forEach((star) => {
    const starX = star.getBoundingClientRect().left + star.offsetWidth / 2;
    const starY = star.getBoundingClientRect().top + star.offsetHeight / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
    );

    // If the mouse is near the star, make it brighter, larger, and change its color if it hasn't been changed yet
    if (distance < 100) {
      star.style.opacity = 1;
      star.style.transform = `scale(2)`; // Increase the size on hover

      // Change to a random color only if it hasn't been hovered before
      if (star.dataset.hovered === "false") {
        star.style.backgroundColor = getRandomColor();
        star.dataset.hovered = "true"; // Mark the star as hovered
      }
    } else {
      star.style.opacity = 0.4;
      star.style.transform = `scale(1)`;
      star.style.backgroundColor = "#ffffff"; // Reset the scale when far from the mouse
    }
  });
});
