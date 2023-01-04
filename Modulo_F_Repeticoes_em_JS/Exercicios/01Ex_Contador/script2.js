function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let resposta = document.getElementById('res');

    //Condição que mostra a falta de dados. Mostrando uma caixa "alert" para o usuário. 
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = `Impossível contar...`
        window.alert('[ERRO]Você precisa fornecer o(s) dado(s) faltantes.');
    }else{
        resposta.innerHTML = `Contando... `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        //Condição de contrelo: Caso o usuário digite o número de passos menor ou igual a zero, o programa irá adicionar uma unidade e o passo passa a valer 1.
        if(p <= 0){
            window.alert('Não foi possível contar. O campo "passo" irá veler 1.');
            p = 1;//"p" rescebe 1.
        }

        if(i < f){
            //Contagem progressiva.
            for(let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} \u{1F449} `;
            }
        }else{
            //Contagem regressiva.
            for(let c = i; c >= f; c -= p){
                resposta.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}` //Emoji da bandeirinha.
    }
}