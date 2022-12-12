var elementos = document.querySelectorAll('[type=radio]');
for (var i =0; i<elementos.length; i++){
    elementos[i].addEventListener('change', (e)=>{
        let marcado = e.target.value;
        if(marcado == "correta"){
            //alert("Você acertou a pergunta!");
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'green';
            parentNode.style.color = 'white';
            parentNode.style.margin = '5px 0';
            parentNode.style.borderRadius = '20px';


            let els = parentNode.parentNode.querySelectorAll('[type=radio');
            for(var n = 0; n<els.length; n++){
                els[n].disabled = true;
            }
        }else if (marcado == "incorreta"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'red';
            parentNode.style.color = 'white';
            parentNode.style.margin = '5px 0';
            parentNode.style.borderRadius = '20px';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');
            for (var n = 0; n<els.length; n++){
                els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = 'green';
            correta.parentNode.style.color = 'white';
            correta.parentNode.style.margin = '5px 0';
            correta.parentNode.style.borderRadius = '20px';

        }
    })
}