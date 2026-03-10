const comandos = [
    {
        titulo: "git status",
        texto: "Muestra el estado actual del repositorio: archivos modificados o sin seguimiento.",
        imagen: "static/imagenes/gitstatus.png",
        clase: "img-status"
    },
    {
        titulo: "git add .",
        texto: "Agrega todos los archivos modificados al área de preparación (staging).",
        imagen: "imagenes/add.png",
        clase:"img-add"
    },
    {
        titulo: 'git commit -m "mensaje"',
        texto: "Guarda los cambios en el historial del proyecto con un mensaje descriptivo.",
        imagen: "static/imagenes/gitcommit.png",
        clase: "img-commit"
    },
    {
        titulo: "git push -u origin branch",
        texto: "Envía los commits de tu rama local al repositorio remoto.",
        imagen: "static/imagenes/gitpush (2).png",
        clase: "img-push"
    },
    {
        titulo: "git pull origin branch",
        texto: "Trae y fusiona los cambios del repositorio remoto a tu rama local.",
        imagen: "imagenes/pull.png",
        clase: "img-pull"
    }
];

let indiceActual = 0;

function actualizarContenido() {
    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");
    const imagen = document.getElementById("imagenComando");

    titulo.textContent = comandos[indiceActual].titulo;
    descripcion.textContent = comandos[indiceActual].texto;
    imagen.src = comandos[indiceActual].imagen;

    // aplicar clase individual
    imagen.className = comandos[indiceActual].clase || "";
}

function siguiente() {
    if (indiceActual < comandos.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0;
    }
    actualizarContenido();
}

function anterior() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = comandos.length - 1;
    }
    actualizarContenido();
}

// Mostrar el primero cuando carga la página
window.onload = actualizarContenido;