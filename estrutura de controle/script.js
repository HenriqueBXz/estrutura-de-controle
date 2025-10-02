const idadeInput = document.getElementById('idadeInput')
const veriButton = document.getElementById('verifyButton')
const result = document.getElementById('resultado')

function verificadorIdade(){
    resultado.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let menssagem = '';

    if(isNaN(idade) || idade < 0){
        mensagem = 'Por favor, insira uma idade válida.'/
    }else if(idade <18){
        mensagem = 'Você é menor de idade.';
    }else if(idade < 65){
        
    }
}