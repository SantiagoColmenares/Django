// caputura de la variable
const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("correo");
const tel = document.getElementById("telefono")

//Funcion para validar ficha cod_***** <---numeros
const validar = function () {
  let reg = /^[a-zA-z]{3}_[0-9]{5}$/;
  reg.test(ficha.value) ? ficha.classList.add('border--green') : ficha.classList.add('border--red');
}
ficha.addEventListener("blur", validar);


//Funcion para validar solo letras

const validarLetras = function () {
  let reg = /^[a-zA-Z\s]+$/;
  reg.test(nombre.value) ? nombre.classList.add('border--green') : nombre.classList.add('border--red');
  reg.test(apellidos.value) ? apellidos.classList.add('border--green') : apellidos.classList.add('border--red');
};
const letras = function (e) {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLowerCase();
  const letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
  const especiales = ['8', '32', '37', '39', '46'];
  let tecla_especial = false
  for (const i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    e.preventDefault()
  }
}
nombre.addEventListener("keypress", letras)
apellidos.addEventListener("keypress", letras)
nombre.addEventListener("blur", validarLetras);
apellidos.addEventListener("blur", validarLetras);


//Funcion para validar email

const validarEmail = function () {
  let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  reg.test(email.value) ? email.classList.add('border--green') : email.classList.add('border--red');
};

email.addEventListener("blur", validarEmail);


//solo numero

const telefono = (e) => {
  if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode) {
    e.preventDefault()
  }
}

tel.addEventListener("keypress", telefono);



