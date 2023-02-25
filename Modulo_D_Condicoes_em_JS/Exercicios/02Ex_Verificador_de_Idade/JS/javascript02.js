function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    //Condição para validação dos dados.
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`);
    }else{
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        
        let img = document.createElement('img');//Criando uma tag "img".
        img.setAttribute('id', 'foto');//Criando um "id" para a tag "img" criada acima.
        
        //Condição para verificar o gênero.
        if(fsex[0].checked){
            genero = 'Homem';
            //Condição para verificar a faixa etária
            if(idade >= 0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'img/bebe_menino.png');
            }else if(idade > 3 && idade <= 12){
                //Criança
                img.setAttribute('src', 'img/crianca_menino.png');
            }else if(idade > 13 && idade <=59){
                //Adulto
                img.setAttribute('src', 'img/adulto_homem.png');
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            //Condição para verificar a faixa etária
            if(idade >= 0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'img/bebe_menina.png');
            }else if(idade > 3 && idade <= 12){
                //Criança
                img.setAttribute('src', 'img/crianca_menina.png');
            }else if(idade > 13 && idade <=59){
                //Adulta
                img.setAttribute('src', 'img/adulto_mulher.png');
            }else{
                //Idosa
                img.setAttribute('src', 'img/idosa.png');
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}