const campoFiltro = document.getElementById("filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente");
    for (paciente of pacientes) {
        let nome = paciente.querySelector(".info-nome").textContent;
        let regex = new RegExp(this.value, "i")

        if (!regex.test(nome) && this.value != ""){
            paciente.classList.add("escondido");
        } else {
            paciente.classList.remove("escondido");
        }
    }
});