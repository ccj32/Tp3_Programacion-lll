const endpointTareas   = "https://jsonplaceholder.typicode.com/todos";
const botonCargar      = document.getElementById("cargar-btn");
const listaTareas      = document.getElementById("lista-completadas");
const divError         = document.getElementById("error");

botonCargar.addEventListener("click", () => {
  listaTareas.innerHTML = "";
  divError.textContent = "";

  fetch(endpointTareas)
    .then(respuesta => {
      if (!respuesta.ok) throw new Error(`${respuesta.status} ${respuesta.statusText}`);
      return respuesta.json();
    })
    .then(tareas => {
      const completadas = tareas.filter(tarea => tarea.completed);

      if (completadas.length === 0) {
        listaTareas.innerHTML = "<li>No hay tareas completadas.</li>";
      } else {
        completadas.forEach(tarea => {
          const li = document.createElement("li");
          li.textContent = `(${tarea.id}) ${tarea.title}`;
          listaTareas.appendChild(li);
        });
      }
    })
    .catch(error => {
      divError.textContent = `No se pudieron cargar las tareas: ${error.message}`;
    });
});
