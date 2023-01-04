function contar(){
    //Variáveis
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res');

    //ERRO! Por falta de dados (mostra na tela, que o usuário precisa colocar os dados para iniciar a contagem).
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Faltam dados!');
    }else{
        res.innerHTML= `Contando: `;
        //As variáveis "i", "f" e "p" recebem os valores de "inicio", "fim" e "passo" (são convertidas para "Number") respectivamente.
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        //ERRO! Caso o usuário colocar zero (no campo de "passo") será convertido para "passo = 1".
        if(p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }

        if(i < f){
            //Contagem crescente.
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `; 
            }
        }else{
            //Contagem regressiva.
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`    
            }
        }
        res.innerHTML += `\u{1F3C1}` //Emoji da bandeirinha.
    }
}