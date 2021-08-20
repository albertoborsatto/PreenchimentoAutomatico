const cep = document.getElementById('cep')

const preenche = json => {
    for(const obj in json) {
        if(document.getElementById(`${obj}`)) {
            document.getElementById(`${obj}`).value = json[`${obj}`]
        }
    }
}

const busca = async(cep, options) => {
    try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
        const data = await res.json()
        preenche(data)
    } catch(err) {console.error(err)}
}

cep.addEventListener('blur', evento => {
    const procura = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    busca(procura, options)
})