function carregar(){
    let img = document.getElementById('imagem');
    let date = new Date();
    let timeNow = date.getHours();
    
    
    /*Condição para mensagem no plural ou no singular.*/
    if(timeNow < 2){
        document.getElementById('horaDoDia').innerHTML = `Agora é ${timeNow} hora.`;
    }else{
        document.getElementById('horaDoDia').innerHTML = `Agora são ${timeNow} horas.`;
    }

    
    /*Condição para mostrar a imagem correspondente ao período do dia (manhã, tarde ou noite).*/
    if(timeNow >= 0 && timeNow < 12){
        //Manhã
        img.src = 'img/Bom_dia.png';
        document.body.style.background = '#fbf597';
    }else if(timeNow >= 12 && timeNow < 18){
        //Tarde
        img.src = 'img/Boa_tarde.png';
        document.body.style.background = '#6694c8';
    }else{
        //Noite
        img.src = 'img/Boa_noite.png';
        document.body.style.background = '#2f2e33';
    }
}