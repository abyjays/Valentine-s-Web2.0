const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

/* Loader */
const overlay = document.createElement("div");
overlay.id = "themeLoader";
overlay.innerHTML = `
  <div class="loaderCard">
    <div class="neonLoader"></div>
    <p>Submitting...</p>
  </div>
`;
document.body.appendChild(overlay);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  overlay.classList.add("active");
  msg.textContent = "";
  msg.className = "";

  fetch(
    "https://script.google.com/macros/s/AKfycbydYTbU970-FgRCGphbSgJsaUPhWjwBVHjxDf6A1HesLxWUl00zIawfxHgfoEKiXIaqMw/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    }
  );

  setTimeout(() => {
    overlay.classList.remove("active");
    msg.textContent = "✅ Registration Submitted!";
    msg.classList.add("success");
    form.reset();
  }, 1500);
});
