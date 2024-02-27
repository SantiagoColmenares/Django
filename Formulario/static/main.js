// caputura de la variable
const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("correo");
const tel = document.getElementById("telefono")
const generos = document.getElementsByName('genero')
const boton = document.getElementById('boton')
const ciudad = document.getElementById('ciudad')
const habilidad = document.getElementsByName("check[]")

//Funcion para validar ficha cod_***** <---numeros
const validar = function () {
  let reg = /^[a-zA-z]{3}_[0-9]{5}$/;
  reg.test(ficha.value) ? ficha.classList.add('border--green') : ficha.classList.add('border--red');
}

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


const validar_formulario = function (e) {
  let nombre = "";

  for (const valido of generos) {
    if (valido.checked) {
      nombre = valido.value
      break
    }
  }
  e.preventDefault()
  console.log(nombre)

}

//Funcion para validar email

const validarEmail = function () {
  let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  reg.test(email.value) ? email.classList.add('border--green') : email.classList.add('border--red');
};


//solo numero

const telefono = (e) => {
  if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode) {
    e.preventDefault()
  }
}


//Cidades
function validarCiudad() {
  if (ciudad.selectedIndex === 0) {
    /*    console.log(ciudad.selectedIndex) */
    alert("Selecciona una ciudad")
  }
}

//Habilidades

function validarHabilidades(e) {
  let suma = 0;
  for (let i = 0, j = habilidad.length; i < j; i++) {
    if (habilidad[i].checked == true) {
      suma++;
    }
    if (suma < 3) {
      alert("Selecciona 3 o mas habilidades")
    }
    e.preventDefault()
  }
}

//Listeners
email.addEventListener("blur", validarEmail);
ficha.addEventListener("blur", validar);
tel.addEventListener("keypress", telefono);
boton.addEventListener("click", validarHabilidades);
boton.addEventListener("click", validarCiudad);
boton.addEventListener("click", validar_formulario);
nombre.addEventListener("keypress", letras)
apellidos.addEventListener("keypress", letras)
nombre.addEventListener("blur", validarLetras);
apellidos.addEventListener("blur", validarLetras);






