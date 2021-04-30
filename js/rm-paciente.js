const table = document.getElementById("tabela-pacientes");

table.addEventListener("dblclick", function(e){

    let li = e.target.parentNode;
    li.classList.add("fade-out");
    setTimeout(()=>li.remove(), 300);
});