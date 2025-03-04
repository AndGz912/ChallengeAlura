// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

listaSorteo = [];
nombrePantalla = [];

    function agregarAmigo() {
      let inputAmigo = document.getElementById("amigo");
      //.toLowerCase(); convierte el texto en minuscula.
      let nombre = document.getElementById(`amigo`).value.toLowerCase().trim();
      let nombreP =document.getElementById(`amigo`).value;

      // Validar que el campo no esté vacío.
      if (nombre.trim() === "") {
        alert("¡Por favor, ingrese un nombre!");
        inputAmigo.value = ""; // Limpia el campo de entrada
        return;
      }

      // Validar que no se ingresen números.
      //isNAN () devuelve true si el valor no es un número.
      if (!isNaN(nombre)) {
        alert("¡No se permiten números!");
        inputAmigo.value = "";
        return;
      }

      // Validar que el nombre no se repita.
      if (listaSorteo.includes(nombre)) {
        alert(`${nombreP} ya se encuentra en la lista.`);
        inputAmigo.value = "";
        return;
      }

      // Si todas las validaciones son correctas, agregar el nombre a la lista.
      listaSorteo.push(nombre);
      nombrePantalla.push(nombreP);

      //limpia el campo de texto, para volver a escribir un nombre nuevo.
      inputAmigo.value = "";
      console.log(listaSorteo);
      console.log(nombrePantalla);
      mostrarLista();
      return;
    }
           
    function nombreAleatorio(){
      let aleatorio = Math.floor(Math.random() * nombrePantalla.length);
      let nombre = nombrePantalla[aleatorio];
      return nombre;
    }

    function sortearAmigo(){
      let nombreSorteado = nombreAleatorio();
      document.getElementById(`resultado`).innerHTML =`Tu amigo secreto es: ${nombreSorteado}.`;
    }

    function mostrarLista(){
      let nombreImput=document.getElementById(`listaAmigos`);
      nombreImput.innerHTML=""; // limpia la lista
      // El método .forEach() en JavaScript se usa para recorrer (iterar) cada elemento 
      // de un array y ejecutar una función para cada uno de ellos.
      nombrePantalla.forEach((nombre, index) => {
        let lista = document.createElement(`li`); // Crea un elemento de lista.
        lista.textContent = `Nombre ${index + 1}: ${nombre}.`; // asignar el nombre.
        nombreImput.appendChild(lista);
      });
    }
