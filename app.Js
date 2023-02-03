const monstros = [
    {
        id: 1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades: 'transformar em tudo que se toca. ',
        foto: 'https://robohash.org/osvaldo',
    },
    {
        id: 2,
        nome: 'MegaMente',
        altura: 3,
        habilidades: 'correr muito rapido e transforma água em gelo.',
        foto: 'https://robohash.org/MegaMente'
    },
    {
        id: 3,
        nome: 'Devinho',
        altura: 7,
        habilidades: 'teletransporta de um lugar para outro.',
        foto: 'https://robohash.org/Devinho'
    },
    {
        id: 4,
        nome: 'Abacate',
        altura: 1.4,
        habilidades: 'visão além do alcanse e de raio laser',
        foto: 'https://robohash.org/Abacate'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})




const todosOsMonstros = monstros.map((monstro) => {
    //debugger
    return `<div>
    <p>nome: ${monstro.nome}</p>
    <p>altura: ${monstro.altura}</p>
    <img src="${monstro.foto}">
    <p class="habilidades">habilidades: ${monstro.habilidades}</p>
    
    </div>`
})

secao.innerHTML = todosOsMonstros
