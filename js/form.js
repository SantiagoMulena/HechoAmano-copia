
let  botonregistrar=document.getElementById(`registrar`);

botonregistrar=addEventListener(`click`, registrar);


function registrar(e){
    e.preventDefault();
    
     let nombre = document.getElementById(`txtnom`).value
     let apellido = document.getElementById(`txtape`).value
     let mail = document.getElementById(`txtmail`).value
     let txt = document.getElementById(`txtarea`).value
    
    
   if(nombre===``|| apellido===`` || mail===``||txt===``){
    swal({
        title: "¡error!",
        text: `Completa todos los campos`,
        icon: "error",
        buttons: {
            cerrar: {
                text: "Cerrar",
                value: false
            }},
   })
}else{
    swal({
        title: "Tu consulta fue enviada",
        icon: "success",
        buttons: {
            cerrar: {
                text: "Cerrar",
                value: false
            }},

    })
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("mail",mail );
    localStorage.setItem("txt", txt);
}
}

