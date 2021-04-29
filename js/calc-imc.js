//Cálculo de IMC

function calcIMC(w, h, pacienteTr){

    let imc = pacienteTr.querySelector(".info-imc");

    if (validaPesoEAltura(w, h, pacienteTr)){
        imc.textContent = (w/(h*h)).toFixed(2);
        return imc;
    };

    return false;
}

//Aplicação

const pacientes = document.querySelectorAll(".paciente")

for (let paciente of pacientes){

    const peso = paciente.querySelector(".info-peso");
    const altura = paciente.querySelector(".info-altura");

    calcIMC(peso.textContent, altura.textContent, paciente);

}

//Helper Functions

function validaPesoEAltura(peso, altura, paciente){

    let imc = paciente.querySelector(".info-imc")

    if (peso < 0 || peso >= 600 || peso.isNaN()){
        imc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-inválido");

        return false;

    } else if (altura < 0 || altura > 3 || altura.isNaN()){
        imc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-inválido");

        return false;
    }

    return true;
}
