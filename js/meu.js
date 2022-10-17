let ano = document.getElementById('anoInicio');
let turma = document.getElementById('turma');
let anos = [2022,2023,2024,2025];
let turmas = [
    "Infantil",
    "1º Ano Fundamental",
    "2º Ano Fundamental",
    "3º Ano Fundamental",
    "4º Ano Fundamental",
    "5º Ano Fundamental",
    "6º Ano Fundamental",
    "7º Ano Fundamental",
    "8º Ano Fundamental",
    "9º Ano Fundamental",
    "1ª Série Ensino Médio",
    "2ª Série Ensino Médio",
    "Terceirão"]

window.addEventListener('load', function(){
    criarOptions(ano,anos);
    criarOptions(turma, turmas);
})
function criarOptions(idSelect, dados){
    let options = '<option value="">---</option>'
    for (const key in dados) {
        options += `<option value="${key}">${dados[key]}</option>`;
    } 
    idSelect.innerHTML = options;
}
  
function matriculaEnviada(){
    swal("Parabéns", "Matrícula Enviada com Sucesso!", "success");
    
};