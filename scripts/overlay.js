const abrirForms = document.getElementById('abrirFormulario');
const salvarDadosForms = document.getElementById('salvarFormulario');
const fecharForms = document.getElementById('fecharFormulario');

abrirForms.addEventListener("click", () => {
    overlay.style.display = "flex";
})

fecharForms.addEventListener("click", () => {
    overlay.style.display = "none";
})

salvarDadosForms.addEventListener("click", () => {
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

