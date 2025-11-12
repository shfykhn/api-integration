document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("promoVideo");
  const overlay = document.getElementById("startOverlay");

  // Wait for user to click once
  overlay.addEventListener("click", () => {
    video.muted = false;   // Enable sound
    video.play();          // Ensure it continues playing
    overlay.classList.add("hidden"); // Hide overlay smoothly
    overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  video.muted = false;
  video.volume = 0; // start silent
  video.play();

  // Fade volume in smoothly
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      video.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200); // increase every 200ms
});

  });
});
