const formOpenBtn = document.querySelector("#form_open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");


    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

const pwShowHideLogin = document.getElementById("login_eye");
const pwShowHideSignup = document.getElementById("signup_eye");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
pwShowHideLogin.addEventListener("click", () => {
  const loginPwInput = document.querySelector(".login_form .password input");
  if (loginPwInput.type === "password") {
    loginPwInput.type = "text";
    pwShowHideLogin.classList.replace("uil-eye-slash", "uil-eye");
  } else {
    loginPwInput.type = "password"; 
    pwShowHideLogin.classList.replace("uil-eye", "uil-eye-slash");
  }
});
pwShowHideSignup.addEventListener("click", () => {
  const signupPwInput = document.querySelector(".signup_form .password input");
  if (signupPwInput.type === "password") {
    signupPwInput.type = "text";
    pwShowHideSignup.classList.replace("uil-eye-slash", "uil-eye");
  } else {
    signupPwInput.type = "password";
    pwShowHideSignup.classList.replace("uil-eye", "uil-eye-slash");
  }
});

    

function calculateTotal() {
    const quantityInput = document.getElementById('quantity');
    const totalOutput = document.getElementById('total');
    const pricePerUnit = 1200000;
    const quantity = parseInt(quantityInput.value) || 0;
    const totalPrice = quantity * pricePerUnit;
    totalOutput.value = `${totalPrice} Dh`;
}

document.getElementById('quantity').addEventListener('input', calculateTotal);
document.getElementById('validcommande').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('nom').value.trim();
    const address = document.getElementById('adresse').value.trim();
    const phone = document.getElementById('numero').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    if (!name || !address || !phone || !quantity) {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    alert("Commande validée !");
});

const signupForm = document.querySelector(".signup_form form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const email = signupForm.querySelector('input[type="email"]').value.trim();
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();
    if (!email || !password || !confirmPassword) {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }
    alert("Signup successful!");
});
const loginForm = document.querySelector(".login_form form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();
    if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    alert("Login successful!");
});
const commandeForm = document.getElementById("commande");
commandeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = commandeForm.querySelector("#name").value.trim();
    const email = commandeForm.querySelector("#email").value.trim();
    const phone = commandeForm.querySelector("#phone").value.trim();
    const address = commandeForm.querySelector("#address").value.trim();
    if (!name || !email || !phone || !address) {
        alert("Please fill in all the fields.");
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }
    alert("Form submitted successfully!");
});
