// console.log(Math.random());
// console.log(Math.random().toString(36));

let simbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";
let latter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
function confereCaracteres() {
  if (simbols && number) {
    return latter + number;
  }
}
function gerarSenha() {
  let pass = "";
  for (let i = 0; i < 10; i++) {
    let junta = confereCaracteres();
    let random = Math.floor(Math.random() * junta.length);
    let randomCaracter = junta[random];
    pass += randomCaracter;
  }
  return pass;
}

console.log(gerarSenha());
