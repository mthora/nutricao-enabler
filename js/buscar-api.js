var botaoAdicionar = document.querySelector("#buscar-api");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("loadend", ()=>{

        if (xhr.status == 200){
            const res = xhr.responseText;
            const pacientes = JSON.parse(res);
            for (paciente of pacientes){
                const pacienteTr = montaTr(paciente);
                const table = document.getElementById("tabela-pacientes");
                table.appendChild(pacienteTr);
            } 
        } else{
            const erro = document.getElementById("ajax-erro");
            erro.classList.remove("escondido");
        }
    })
});