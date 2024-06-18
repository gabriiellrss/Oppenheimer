import Menu from '../menu'
import Rod from '/src/rodape.jsx'


function Down () {
    return(
        <body>
            <Menu/>
            
        
        <div className="container-down">
        <h1>Downloads Disponíveis</h1>
        
        <ul>
            <li>
            <img className='imgfilme' src="src\assets\imagens\oppenheimer_livro__t4m2z703s.webp" alt="" />

                <div className='subcontainer-down'>
                    <strong>Oppenheimer - Livro</strong> - 
                    <a class="download-link" href="/src/archive/Oppenheimer - Martin J. Sherwin.pdf" download>Baixar</a>
                </div>
            </li>
        </ul>
        
    </div>

    <Rod/>


    </body>
    )
}

export default Down;