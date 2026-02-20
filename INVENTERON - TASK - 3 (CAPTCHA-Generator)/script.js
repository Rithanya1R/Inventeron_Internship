const form = document.getElementById("myForm");
const captchaContainer = document.getElementById("captchaContainer");
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");

let firstSubmit = true;
let generatedCaptcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  if (firstSubmit) {
    generatedCaptcha = generateCaptcha();
    captchaText.textContent = "Captcha: " + generatedCaptcha;
    captchaContainer.classList.remove("hidden");
    captchaInput.setAttribute("required", true);
    firstSubmit = false;
  } else {
    if (captchaInput.value === generatedCaptcha) {
      alert("Submitted successfully");
    } else {
      alert("Invalid captcha");
    }
  }
});
