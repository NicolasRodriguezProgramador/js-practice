(() => {

  //1) Instanciar el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //console.log(xhr);

  //2) Asignar eventos.
  xhr.addEventListener("readystatechange", (e)=>{
    //La logica de programacion va acá
    
    //La primer validación del evento es que solo retornará información si el estado es "Complete" porque solo en "complete" podemos manipular el evento XMLHttpRequest
    if( xhr.readyState !== 4 ) return;

    //La segunda validación es para trabajar el objeto Ajax cuando las respuestas son satisfactorias
    if( xhr.status >= 200 && xhr.status < 300 ){
      console.log("Éxito.");

      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}.`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);

    }else{
      console.log("Error");

      let message = xhr.statusText || "Ha ocurrido un inconveniente con la petición Ajax.";
      
      const $li = document.createElement("li");
      $li.style.listStyle = "none";
      $li.innerHTML = `<b>Error ${xhr.status}: ${message}</b>`;
      $fragment.appendChild($li);

      $xhr.appendChild($fragment);

    };

  });

  //3) Abrir la petición. Establecer el metodo en el que lo vamos a hacer y el recurso (endpoint).
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //xhr.open("GET", "assets/user.json");

  //4) Enviar la petición
  xhr.send();

})();