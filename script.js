const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

/* =========================
   LIVE INPUT EFFECTS
========================= */

emailInput.addEventListener("input", function () {

  if (emailInput.value.length > 0) {
    emailInput.style.border = "1px solid #22c55e";
  } else {
    emailInput.style.border = "1px solid transparent";
  }

});

passwordInput.addEventListener("input", function () {

  if (passwordInput.value.length >= 6) {
    passwordInput.style.border = "1px solid #22c55e";
  } else {
    passwordInput.style.border = "1px solid #ef4444";
  }

});

/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail(email) {

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  return pattern.test(email);

}

/* =========================
   SHOW MESSAGE FUNCTION
========================= */

function showMessage(text, color) {

  message.textContent = text;
  message.style.color = color;

}

/* =========================
   LOGIN BUTTON
========================= */

loginBtn.addEventListener("click", function () {

  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  /* Empty Validation */

  if (email === "" || password === "") {

    showMessage("⚠ Please fill all fields", "#f87171");

    shakeContainer();

    return;
  }

  /* Email Validation */

  if (!validateEmail(email)) {

    showMessage("❌ Invalid Email Address", "#fb7185");

    shakeContainer();

    return;
  }

  /* Password Length */

  if (password.length < 6) {

    showMessage("🔒 Password must contain 6 characters", "#facc15");

    shakeContainer();

    return;
  }

  /* Loading Effect */

  loginBtn.innerHTML = "Checking...";
  loginBtn.disabled = true;

  setTimeout(function () {

    loginBtn.innerHTML = "Login Successful ✓";

    showMessage("🚀 Welcome Back!", "#4ade80");

    loginBtn.style.background =
      "linear-gradient(135deg,#16a34a,#22c55e)";

  }, 2000);

});

/* =========================
   SHAKE EFFECT
========================= */

function shakeContainer() {

  const container = document.querySelector(".login-container");

  container.classList.add("shake");

  setTimeout(function () {

    container.classList.remove("shake");

  }, 500);

}

/* =========================
   ENTER KEY LOGIN
========================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {

    loginBtn.click();

  }

});

/* =========================
   PASSWORD SHOW/HIDE
========================= */

const toggleBtn = document.createElement("span");

toggleBtn.innerHTML = "👁";
toggleBtn.style.position = "absolute";
toggleBtn.style.right = "15px";
toggleBtn.style.top = "50%";
toggleBtn.style.transform = "translateY(-50%)";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.fontSize = "18px";

const passwordGroup = passwordInput.parentElement;

passwordGroup.style.position = "relative";

passwordGroup.appendChild(toggleBtn);

toggleBtn.addEventListener("click", function () {

  if (passwordInput.type === "password") {

    passwordInput.type = "text";
    toggleBtn.innerHTML = "🙈";

  } else {

    passwordInput.type = "password";
    toggleBtn.innerHTML = "👁";

  }

});

/* =========================
   DARK GLOW ON FOCUS
========================= */

const allInputs = document.querySelectorAll("input");

allInputs.forEach(function (input) {

  input.addEventListener("focus", function () {

    input.style.boxShadow = "0 0 20px rgba(99,102,241,0.7)";

  });

  input.addEventListener("blur", function () {

    input.style.boxShadow = "none";

  });

});
const forgotBtn = document.getElementById("forgotBtn");

forgotBtn.addEventListener("click", function () {

  const email = emailInput.value.trim();

  /* Check Email Empty */

  if (email === "") {

    showMessage("📧 Enter your email first", "#facc15");

    shakeContainer();

    return;
  }

  /* Check Valid Email */

  if (!validateEmail(email)) {

    showMessage("❌ Please enter a valid email", "#fb7185");

    shakeContainer();

    return;
  }

  /* Loading Animation */

  forgotBtn.innerHTML = "Sending Link...";

  forgotBtn.disabled = true;

  setTimeout(function () {

    forgotBtn.innerHTML = "Reset Link Sent ✓";

    showMessage(
      "📩 Password reset link sent to your email",
      "#4ade80"
    );

  }, 2000);

});
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function () {

  /* Animation Effect */

  signupBtn.innerHTML = "Opening...";

  signupBtn.disabled = true;

  setTimeout(function () {

    showMessage(
      "📝 Redirecting to Sign Up Page...",
      "#60a5fa"
    );

    signupBtn.innerHTML = "Sign Up";

    signupBtn.disabled = false;

  }, 1500);

});