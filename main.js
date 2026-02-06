
  // End date: Feb 13, 7:00 AM (local time)
  const endDate = new Date("February 13, 2026 11:15:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML =
        "<h3>⏰ Program Ended</h3>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);

  const card = document.querySelector(".card");

  window.addEventListener("load", () => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300);
  });
  

  document.querySelectorAll('a[href]').forEach(link => {
    if (!link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.href;
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = target;
        }, 400);
      });
    }
  });
