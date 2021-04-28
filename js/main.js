//Alteração de título

const obj = document.getElementById("title");
obj.textContent = "Enabler Nutrição";

const pacientes = document.querySelectorAll("#tabela-pacientes tr");

//Cálculo de IMC

for (paciente of pacientes){

    const peso = paciente.querySelector(".info-peso");
    const altura = paciente.querySelector(".info-altura");
    let imc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;
    
    if (peso.textContent < 0 || peso.textContent >=600){
        imc.textContent = "Peso inválido!";
        peso.style.color = "red";
        imc.style.color = "red";
        pesoValido = false;
    } 
    
    if (altura.textContent < 0 || altura.textContent >= 3){
        imc.textContent = "Altura inválida!"
        altura.style.color = "red";
        imc.style.color = "red";
        alturaValida = false;
    }

    if (pesoValido && alturaValida){
        imc.textContent = Math.floor(peso.textContent/Math.pow(altura.textContent, 2));
    }
}
