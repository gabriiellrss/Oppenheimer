import Menu from '../menu'
import Rod from '/src/rodape.jsx'


function Ref () {
    return (
    <body>
        <Menu/>

        <div class="container-ref">
        <h1>Oppenheimer</h1>
        <img src="/src/assets/01000000-0aff-0242-db28-08dc01de4a41_w1597_n_r0_st_s.jpg" alt="Nome do Filme"/>
        
        <h2>Sinopse</h2>
        <p>Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas. A trama acompanha o físico e um grupo formado por outros cientistas ao longo do processo de desenvolvimento da arma nuclear que foi responsável pelas tragédias nas cidades de Hiroshima e Nagasaki, no Japão, em 1945. Além de Cillian, o elenco também traz nomes como Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Gary Oldman, Jack Quaid, Gustaf Skarsgård, Rami Malek e Kenneth Branagh.</p>
        
        <h2>Detalhes do Filme</h2>
        <ul>
            <li><strong>Diretor:</strong>Christopher Nolan</li>
            <li><strong>Elenco:</strong>Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr</li>
            <li><strong>Gênero:</strong>Biopic, Histórico, Suspense</li>
            <li><strong>Duração:</strong>3h 01min</li>
            <li><strong>Ano:</strong> 2023</li>
            <li><strong>Classificação:</strong> 12+</li>
        </ul>
        
        <h2>Trailer</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F3OxA9Cz17A" title="OPPENHEIMER - Novo Trailer (Universal Studios) – HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <Rod/>


    </body>

    )
}

export default Ref;