function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tarea = input.value.trim();


    if (tarea !== '') {

        const li = document.createElement('li');


        const textoTarea = document.createTextNode(tarea);


        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'Eliminar';
        buttonEliminar.className = 'button-eliminar-tarea';
        buttonEliminar.onclick = function () {
            eliminarTarea(this);
        };

        const buttonCompletar = document.createElement('button');
        buttonCompletar.textContent = 'Completar';
        buttonCompletar.className = 'button-completar-tarea';
        buttonCompletar.onclick = function () {
            marcarCompletada(this);
        };


        li.appendChild(textoTarea);
        li.appendChild(buttonCompletar);
        li.appendChild(buttonEliminar);


        const lista = document.getElementById('listaTareas');
        lista.appendChild(li);


        input.value = '';
    } else {
        alert('Por favor, ingresa una tarea.');
    }
}


function eliminarTarea(button) {
    const li = button.parentElement;
    li.remove();
}

function marcarCompletada(button) {
    const li = button.parentElement;
    li.classList.toggle('completada');
}
