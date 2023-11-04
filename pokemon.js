async function listarPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=5"
    const response = await fetch(url)
    const {results} = await response.json()

    const [primeiroPokemon] = results

    const resPrimeiroPokemon = await fetch(primeiroPokemon.url)
    
    const dataPrimeiroPokemon = await resPrimeiroPokemon.json()
    console.log(dataPrimeiroPokemon)
}

const lista = [1, 2, 3, 4, 5]

let soma = 0
lista.forEach(item => {
    soma = soma + item
})
console.log(soma)

const soma2 = lista.reduce((acc, item) => {
    return {
        ...acc,
        total: (acc.total ?? 0) + item
    }
}, {prop: 123})

function somaFn(...numero) {
    return numero.reduce((acc, item) => {
        return acc + item
    }, 0)
}

listarPokemon()

console.log(somaFn(255,5454,55,1))