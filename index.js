const checkToSymbols = document.querySelector("#symbols");
const checkToNumber = document.querySelector("#number");
const password = document.querySelector(".password");
const inputLimitedCaracteres = document.querySelector(".number-caracters");
const btnCreatePass = document.querySelector(".created-password");
const btnCopyPass = document.querySelector(".copy-password");

btnCreatePass.addEventListener("click", createdPassword);
btnCopyPass.addEventListener("click", copyPassword);

let symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";
let latter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";

function checkCaracters() {
  if (checkToSymbols.checked && checkToNumber.checked) {
    return symbols + number + latter;
  }
  if (checkToSymbols.checked) {
    return symbols + latter;
  }
  if (checkToNumber.checked) {
    return number + latter;
  }
  return latter;
}

function createdPassword() {
  let LimitedCaracteres =
    inputLimitedCaracteres.value === ""
      ? 8
      : Number(inputLimitedCaracteres.value);

  let pass = "";
  for (let i = 0; i < LimitedCaracteres; i++) {
    let caracters = checkCaracters();
    let random = Math.floor(Math.random() * caracters.length);
    let randomCaracter = caracters[random];
    pass += randomCaracter;
  }
  password.textContent = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(password.innerText);
}
