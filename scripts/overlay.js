const abrirOverlay = document.getElementById('abrirFormulario');
const fecharOverlay = document.getElementById('fecharFormulario');

abrirOverlay.addEventListener("click", () => {
    overlay.style.display = "flex";
})

fecharOverlay.addEventListener("click", () => {
    const elementos = container.children;
    const dict = {}
    overlay.style.display = "none";

    for(let i = 0; i <= (elementos.length - 1); i = i + 2) {
        dict[i / 2] = [
            elementos[i].value,
            elementos[i + 1].value
        ];
    }

    fetch("http://localhost:3000/pessoas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dict)
    });
})

