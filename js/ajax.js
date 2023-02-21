(() => {

  //1) Instanciar el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //console.log(xhr);

  //2) Asignar eventos.
  xhr.addEventListener("readystatechange", (e)=>{
    // La logica de programacion va acá
  });

  //3) Abrir la petición. Establecer el metodo en el que lo vamos a hacer y el recurso (endpoint).
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //4) Enviar la petición
  xhr.send();

})();