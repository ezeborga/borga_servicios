 function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let celular = document.getElementById("celular").value;
    let correo = document.getElementById("correo").value;
    let consulta = document.getElementById("consulta").value;
    let boleana = false;

    //Test campo obligatorio
    if (nombre == null || nombre.length == 0) {
        alert(
            "ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco"
        );
        return false;
    }

    //Test celular
    if (celular == null || celular.length == 0 || isNaN(celular) || celular.length != 10) {
        alert("ERROR: Debe ingresar una numero correcto");
        return false;
    }
    

    //Test correo
    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("ERROR: Debe escribir un correo válido");
        return false;
    }

    //Test consulta
    if (consulta == null || consulta.length == 0) {
        alert("ERROR: Debe ingresar una consulta");
            return false;
    }



    //Test RadioButtons
    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            boleana = true;
            break;
        }
    }
    if (!boleana) {
        alert("ERROR: Debe elegir una opción de radio button");
        return false;
    }

    return true;
}
