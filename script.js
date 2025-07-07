document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "Toggle Mode";
  toggleBtn.className = "mode-toggle";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

const clock = document.createElement("div");
clock.id = "clock";
document.body.appendChild(clock);

const heroClock = document.getElementById("hero-clock");

setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.innerText = timeString;
  if (heroClock) {
    heroClock.innerText = "Current Time: " + timeString;
  }
}, 1000);


  // Email Validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  emailInput.addEventListener("input", () => {
    const value = emailInput.value;
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      emailError.innerText = "Invalid email format!";
    } else {
      emailError.innerText = "";
    }
  });

  // Password Validation
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    if (value.length < 6) {
      passwordError.innerText = "Password must be at least 6 characters.";
    } else {
      passwordError.innerText = "";
    }
  });

  // Tab Switching
  document.querySelectorAll(".tab-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".feature-box").forEach(box => {
        box.style.display = "none";
      });
      const selected = document.getElementById(btn.dataset.tab);
      if (selected) selected.style.display = "block";
    });
  });

  // Initial tab view
  document.getElementById("meals").style.display = "block";
  document.getElementById("payments").style.display = "none";

  // Room Filtering
  document.getElementById("roomFilter").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    document.querySelectorAll(".gallery-item").forEach(item => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(keyword) ? "block" : "none";
    });
  });

  // Book Now button functionality
  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thank you for your interest! Booking feature coming soon.");
    });
  });

  // Contact Form Submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue && passwordValue && emailError.innerText === "" && passwordError.innerText === "") {
      alert("Form Submitted!");
      this.reset();
    } else {
      alert("Please fill in valid email and password.");
    }
  });
});
