const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  msg.textContent = "Submitting...";
  msg.style.color = "white";

  const data = {
    name: form.name.value,
    department: form.department.value,
    semester: form.semester.value,
    phone: form.phone.value,
    email: form.email.value
  };

  fetch("https://script.google.com/macros/s/AKfycbwyEInb2RPV4rdUznTOh03eDXwqZRxgoI--jElCMXiSfE38AZMYtqAaU0tpeeiKmhQa/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    if (result.status === "success") {
      msg.textContent = "✅ Registration Successful!";
      msg.style.color = "green";
      form.reset();
    } else {
      throw new Error("Server error");
    }
  })
  .catch(err => {
    console.error(err);
    msg.textContent = "❌ Registration Failed. Try again.";
    msg.style.color = "red";
  });
});
