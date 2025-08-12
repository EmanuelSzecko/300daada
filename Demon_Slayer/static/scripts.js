function mostrarFrase() {
    const frase = document.getElementById("fraseTanjiro");
    frase.style.display = frase.style.display === "none" ? "block" : "none";
}

let curiosidades = document.querySelectorAll("#curiosidades li");
let indiceAtual = 0;

function proximaCuriosidade() {
    curiosidades.forEach((item, i) => {
        item.style.display = i === indiceAtual ? "list-item" : "none";
    });
    indiceAtual = (indiceAtual + 1) % curiosidades.length;
}

// Inicializa carrossel se houver curiosidades
document.addEventListener("DOMContentLoaded", () => {
    if (curiosidades.length > 0) {
        curiosidades.forEach((item, i) => {
            item.style.display = i === 0 ? "list-item" : "none";
        });
    }
});
