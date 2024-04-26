 
 function MainEscope(){
 const form = document.getElementById("teste");
 if(form ==null){
   window.alert("Nada")
 }

 form.addEventListener('submit', function(evento){
    evento.preventDefault();
    window.alert(1);
 })

};

MainEscope();

