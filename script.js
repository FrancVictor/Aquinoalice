var div = document.getElementById('caixinha')
    function clicar(){
        var pedido = prompt('Oi Alice, te amo demais. Quer namo comigo?')
        if(pedido === 'sim'){
            alert('Estamos casados!')
        }else if(pedido === 'Sim'){
            alert('Estamos casados!')
        }else if(pedido === 's'){
            alert('Estamos casados!')
        }else{
            alert('Te matarei hoje às 23:46!')
        }

    }
       

    function entrar(){
        div.style.backgroundColor = "blue"
        div.innerHTML = 'Você entrou!'
    }
    
    function sair(){
        div.innerHTML = 'opa você saiu'
        div.style.backgroundColor = "yellow"

    }

    function cor(){
        var decisao = prompt('você clicou em um botão adicional, aceita continuar?')
        if(decisao === 'sim'){
            alert('Okay, você que sabe, vamos fazer um joguinho! Vai ser criado um botão, por favor clique nele, e que comecem os jogos!')
        }else if(decisao === 'nao'){
            alert('tudo certo até a proxima')
        }
        var botao = document.createElement("button");
        botao.innerHTML = "Clique aqui";
        botao.onclick = function() {
        window.location.href ='https://francvictor.github.io/contadoraquino/';
        };
        document.getElementById("container").appendChild(botao);


    }