const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarformulario() {

    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}



function  esconderformulario() {

     form.style.left = "-311px"
     mascara.style.visibility="hidden"
}