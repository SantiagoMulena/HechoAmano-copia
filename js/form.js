let  botonregistrar=document.getElementById("registrar");

botonregistrar.onclick= (e)=>{
    e.preventDefault();
    
    let nombre = document.getElementById("txtnom")
    let apellido = document.getElementById("txtape")
    let mail = document.getElementById("txtmail")
    let txt = document.getElementById("txtarea")
   
   
  if(nombre.value == ""|| apellido.value== "" || mail.value==" "||txt.value==" "){
   swal({
       title: "¡error!",
       text: `Completa todos los campos`,
       icon: "error",
       buttons: {
           cerrar: {
               text: "Cerrar",
               value: false
           }},s
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
   localStorage.setItem("nombre", nombre.value);
   localStorage.setItem("apellido", apellido.value);
   localStorage.setItem("mail",mail.value );
   localStorage.setItem("txt", txt.value);
}
}