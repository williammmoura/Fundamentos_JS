function calc(){
    let num = document.getElementById('num');
    let tabuada = document.getElementById('resTab');

    //Condição que verifica se o dado foi passado pelo o usuário.
    if(num.value.length == 0){
        window.alert(`Digite um número para mostrar a tabuada!`)
    }else{
        //Convertendo a variável "num" para "Number".
        let n = Number(num.value);
        //Fazendo a tabuada.
        let c = 1 //contador.
        //Limpando o "select" para receber novos valores da tabuada.
        tabuada.innerHTML = '';
        while(c <= 10){
            //Criando elementos HTML (dentro da tag "select").
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tabuada${c}`;//Importante para outras linguagens.
            tabuada.appendChild(item);
            c++; //Incrementando mais 1 no contador "c".
        }
    }
}