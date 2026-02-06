const form = document.getElementById("submitForm");
const overlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  overlay.classList.remove("hidden");
  loadingText.textContent = "Submitting your project…";
  loadingText.className = "";

  const data = {
    name: form.name.value,
    department: form.department.value,
    semester: form.semester.value,
    phone: form.phone.value,
    projectLink: form.projectLink.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyz1H5vljWwNdyu0Pnz2hBsjlsi8BOAPUpR8Xyls_zcPNKa9TV7qsYC3CTs72jlTk6VrQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    loadingText.textContent = "✅ Project Submitted Successfully!";
    loadingText.classList.add("success");
    form.reset();

    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 2000);
  })
  .catch(err => {
    console.error(err);
    loadingText.textContent = "❌ Submission Failed. Try again.";
    loadingText.classList.add("error");

    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 2500);
  });
});
