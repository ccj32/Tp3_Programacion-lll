const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
const cargarBtn = document.getElementById("cargar-btn");
const cargandoDiv = document.getElementById("cargando");
const contenedorTareas = document.getElementById("tareas-completadas");
const errorDiv = document.getElementById("error-msg");

cargarBtn.addEventListener("click", async () => {
  contenedorTareas.innerHTML = "";
  errorDiv.textContent = "";
  cargandoDiv.style.display = "block";

  try {
    const respuesta = await fetch(todosEndpoint);
    if (!respuesta.ok) {
      throw new Error(`Error de red: ${respuesta.status}`);
    }

    const todos = await respuesta.json();
    const completadas = todos.filter(t => t.completed === true);

    if (completadas.length === 0) {
      contenedorTareas.innerHTML = "<p>No hay tareas completadas.</p>";
    } else {
      const ul = document.createElement("ul");
      completadas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.title;
        ul.appendChild(li);
      });
      contenedorTareas.innerHTML = `<h3>Tareas completadas </h3>`;
      contenedorTareas.appendChild(ul);
    }
  } catch (err) {
    errorDiv.textContent = `No se pudieron cargar las tareas: ${err.message}`;
  } finally {
    cargandoDiv.style.display = "none";
  }
});
