// Duration of the typewriter animation in milliseconds
const typingDuration = 8500;

// Check if the effect has already played
if (sessionStorage.getItem("typewriterPlayed")) {
  // Redirect immediately if the effect has played
  window.location.href = "http://ayotheg.42web.io/?i=1"; // Replace with your main page link
} else {
  // Set session storage to remember the effect played
  sessionStorage.setItem("typewriterPlayed", "true");

  // Redirect after the animation ends
  setTimeout(() => {
    window.location.href = "http://ayotheg.42web.io/?i=1"; // Replace with your main page link
  }, typingDuration);
}

