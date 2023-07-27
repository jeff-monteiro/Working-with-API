async function buscarEndereco(cep){
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const convertConsulta = await consultaCEP.json()
        if(convertConsulta.erro){
            throw Error('CEP não exite!')
        }
        let cidade = document.getElementById('cidade')
        let logradouro = document.getElementById('endereco')
        let estado = document.getElementById('estado')

        cidade.value = convertConsulta.localidade
        logradouro.value = convertConsulta.logradouro
        estado.value = convertConsulta.uf

        console.log(convertConsulta)
        return convertConsulta
    } catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido! Verifique CEP informado e tente novamente!</p>`
        console.log(erro)
    }
    
}

let cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscarEndereco(cep.value))


/* --- Lidando com várias requisições ao mesmo tempo com Promise.all ---

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

*/