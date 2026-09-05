const addExp = document.getElementById('adicionarGastos');
const container = document.getElementById('container');

addExp.addEventListener("click", () => {
    const newInputNome = document.createElement('input');
    const newInputGastos = document.createElement('input');

    newInputNome.type = 'text';
    newInputNome.placeholder = 'Nome';
    newInputNome.style.width ="300px";
    newInputNome.style.backgroundColor = "#2c2438";
    newInputNome.style.border = "#2c2438 solid";
    newInputNome.style.borderBottom = "white solid";
    newInputNome.style.fontFamily = "Poppins, sans-serif";
    newInputNome.style.fontSize = "20px";
    newInputNome.style.color = "#F3F0FA";
    
    newInputGastos.type = 'number';
    newInputGastos.placeholder = 'R$';
    newInputGastos.style.width ="300px";
    newInputGastos.style.backgroundColor = "#2c2438";
    newInputGastos.style.border = "#2c2438 solid";
    newInputGastos.style.borderBottom = "white solid";
    newInputGastos.style.fontFamily = "Poppins, sans-serif";
    newInputGastos.style.fontSize = "20px";
    newInputGastos.style.color = "#F3F0FA";


    container.style.gap = "15px";
    container.style.display = "flex";
    container.style.flexDirection = "column";


    container.appendChild(newInputNome);
    container.appendChild(newInputGastos);

    const elementos = container.children;
    console.log(elementos)
}) 







