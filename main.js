
let tareas = [];

// Función para agregar una tarea
function agregarTarea(nombreTarea) {
    if (nombreTarea.trim() !== "") {
        const tarea = {
            nombre: nombreTarea,
            completada: false
        };
        tareas.push(tarea);
        alert(`Tarea "${nombreTarea}" agregada.`);
    } else {
        alert("La tarea no puede estar vacía.");
    }
}

// Función para eliminar una tarea del array
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        alert(`Tarea "${tareas[indice].nombre}" eliminada.`);
        tareas.splice(indice, 1);
    } else {
        alert("Índice inválido.");
    }
}

// Función para listar las tareas del array
function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        alert("Lista de tareas:");
        for (let i = 0; i < tareas.length; i++) {
            alert(`${i + 1}. ${tareas[i].nombre} `);
        }
    }
}

// Función para gestionar el menú de tareas
function gestionarListaDeTareas() {
    let continuar = true;

    while (continuar) {
    const opcion = prompt(`Elige una opción:
        1. Agregar tarea
        2. Listar tareas
        3. Eliminar tarea
        4. Salir de las listas de tarea`);

        // Condicionales para gestionar las opciones
        if (opcion === "1") {
            const nuevaTarea = prompt("Escribe la nueva tarea:");
            agregarTarea(nuevaTarea)
        } else if (opcion === "2") {
            listarTareas();
        } else if (opcion === "3") {
            const indiceEliminar = prompt("Introduce el número de la tarea a eliminar:");
            eliminarTarea(indiceEliminar - 1);
        } else if (opcion === "4") {
            continuar = false;
            alert("Saliendo de la aplicación...");
        } else {
            alert("Opción no válida.");
        }
    }
}

gestionarListaDeTareas();
