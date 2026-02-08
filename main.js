// ================= COUNTDOWN =================
const endDate = new Date("February 13, 2026 11:15:00").getTime();
const countdown = document.getElementById("countdown");

if (countdown) {
  const timer = setInterval(() => {
    const diff = endDate - Date.now();

    if (diff <= 0) {
      countdown.innerHTML = "<h3>⏰ Program Ended</h3>";
      clearInterval(timer);
      return;
    }

    document.getElementById("days").textContent =
      Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent =
      Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").textContent =
      Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").textContent =
      Math.floor((diff / 1000) % 60);
  }, 1000);
}

// ================= PAGE TRANSITION =================
document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");

  if (!href || href.startsWith("#")) return;

  link.addEventListener("click", e => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });
});
