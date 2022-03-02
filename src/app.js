window.onload = function() {
  //declaro variables de elementos (input, ul, empty) a llamar desde index

  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  const empty = document.querySelector(".empty");

  //agrego un event listener al boton
  input.addEventListener("keypress", e => {
    //declaro text igual a la entrada del input
    const text = input.value;
    if (text !== "" && e.key === "Enter") {
      // se añade preventDefault para evitar recargo de pag
      e.preventDefault();
      //declaro li para crear elemento
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = text;
      //appendChild de li y ul
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);

      //coloco input vacio despues de agregar tarea
      input.value = "";
      //al detectar contenido en input desaparece div Empty
      empty.style.display = "none";

      //OBTENER CANTIDAD DE LI
      /*  var elems = document.querySelectorAll("li");
      for (let i = (i = 0); i < elems.length; i++) {
        return console.log(elems.length);} */
    }
  });

  function addDeleteBtn() {
    //creo boton para eliminar
    const deleteBtn = document.createElement("button");
    //caracteristicas de boton eliminar (Contenido y estilo)
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn btn-danger float-end";

    deleteBtn.addEventListener("click", e => {
      //constante para llamar a elemento hijo (item)
      const item = e.target.parentElement;
      //elimino elemento (item)
      ul.removeChild(item);
    });
    return deleteBtn;
  }
};
