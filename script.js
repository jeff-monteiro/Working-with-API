async function buscarEndereco(){
    try{
        const consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
        const convertConsulta = await consultaCEP.json()
        if(convertConsulta.erro){
            throw Error('CEP não exite!')
        }

        console.log(convertConsulta)
    } catch(erro){
        console.log(erro)
    }
    
}

buscarEndereco()