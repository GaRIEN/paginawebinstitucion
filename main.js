const iconMenu = document.querySelector(".header__icon-menu");
const menu = document.querySelector(".header__div");
const nav = document.querySelector(".header__div-nav");
const submenuItems = document.querySelectorAll(".li__ul-li");
const main = document.querySelector(".main");
// estilos para formulario
const enviarWhats = document.querySelectorAll(".enviar");
enviarWhats.forEach((enviar) => {
  enviar.addEventListener("click", enviarFormulario);
  console.log("hiciste click en enviar");
});

//para la galeria de fotos del index
let sliderInner = document.querySelector(".slider--inner");
let index = 1;

iconMenu.addEventListener("click", menuMovile);
main.addEventListener("click", salirnav);
submenuItems.forEach((item) => {
  item.addEventListener("click", ocultarsubmenu);
});

function enviarFormulario() {
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let apoderado = document.querySelector("#apoderado").value;
  let telefono = document.querySelector("#telf").value;
  let correo = document.querySelector("#correo").value;
  let nivelacademico = document.querySelector("#nivel-academico").value;
  let numero = "51945143815";
  if (
    nombre.length == 0 ||
    apellidos.length == 0 ||
    apoderado.length == 0 ||
    telefono.length == 0 ||
    nivelacademico.length == 0
  ) {
    console.log("no tengo nada soy vacion");
    // Asignar texto al elemento de párrafo
    alert("Debes srellenar todos los campos");
  } else {
    let mensaje = `HOLA QUIERO NECESITO MAS INFORMES \nNombre: ${nombre}\nApellidos: ${apellidos}\nApoderado: ${apoderado}\nTeléfono: ${telefono}\nCorreo: ${correo}\nNivel Académico: ${nivelacademico}`;
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
    console.log("Mensaje enviado");
  }
}

function menuMovile() {
  menu.classList.toggle("menubar");
  nav.classList.remove("prueba");
}

function ocultarsubmenu() {
  nav.classList.toggle("prueba");
}
function salirnav() {
  menu.classList.remove("menubar");
  nav.classList.remove("prueba");
}

setInterval(function () {
  let imagenes = sliderInner.querySelectorAll("img");
  let porcentaje = index * -100;
  sliderInner.style.transform = "translateX(" + porcentaje + "%)";
  index++;

  if (index > imagenes.length - 1) {
    index = 0;
  }
}, 2100);
