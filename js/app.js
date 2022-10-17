async function injectContent(){
    let url = location.href; 
    //http://127.0.0.1:5500/bebumBoot/index.html?page= ou seja pega o endereço html
    
    file = url.split('=');
    //divide o endereço pelo sinal de igual e joga dentro de um array
    
    let view = (file[1] != undefined) ? file[1] : 'inicio';
    const resp = await fetch(`views/${view}.html`);
    //pega o valor após o igual e aplica no fetch
    //o metodo fetch faz uma requisição para determinado local, nese caso views/arquivo.html
    
    const html = await resp.text();
    //converte o resultado da fetch para o texto

    let inject = document.getElementById('content');
    //seleciona o destino para carregar o arquivo

    //document.inject.insertAdjacentHTML("content", html);
    //aplica a injeção do conteudo no conteiner de destino
    inject.innerHTML =html;

}
function activeLink(){
    let url = location.href;
    let view = url.split('=');
    let sessao = (view[1] != undefined) ? view[1] : 'inicio';
    document.getElementById(sessao).className += ' active';
}
injectContent();
activeLink();

let elem = document.getElementById('teste');
console.log(elem)
addEventListener('click', function(){
    console.log('cliquei no link')    
})
