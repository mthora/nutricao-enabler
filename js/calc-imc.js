//Cálculo de IMC

function calcIMC(w, h, pacienteTr){

    let err = validaPesoEAltura(pacienteTr);
    let imc = pacienteTr.querySelector(".info-imc");

    if (err.length == 0){
        imc.textContent = (w/(h*h)).toFixed(2);
        return imc;
    };

    return err;
}

//Aplicação

const pacientes = document.querySelectorAll(".paciente")

for (let paciente of pacientes){

    const peso = paciente.querySelector(".info-peso");
    const altura = paciente.querySelector(".info-altura");

    calcIMC(peso.textContent, altura.textContent, paciente);

}

//Helper Functions

function validaPesoEAltura(paciente){

    let err = [];
    let imc = paciente.querySelector(".info-imc");
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let nome = paciente.querySelector(".info-nome").textContent;
    let gordura = paciente.querySelector(".info-gordura").textContent;

    if (peso < 0 || peso >= 600 || isNaN(peso) || peso==""){
        imc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-inválido");
        err.push("Peso inválido!");
    } 
    
    if (altura < 0 || altura > 3 || isNaN(altura) || altura == ""){
        imc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-inválido");
        err.push("Altura inválida!")
    }

    if (nome == ""){
        paciente.classList.add("paciente-inválido");
        err.push("O nome deve ser preenchido!")
    }

    if (gordura == ""){
        paciente.classList.add("paciente-inválido");
        err.push("A gordura deve ser preenchida!")
    }

    return err;
}
