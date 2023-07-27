async function buscarEndereco(){
    const consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    const convertConsulta = await consultaCEP.json() 

    console.log(convertConsulta)
}

buscarEndereco()