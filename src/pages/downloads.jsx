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
                <strong>Nome do Arquivo 1</strong> - 
                <a class="download-link" href="caminho-para-o-arquivo-1.zip" download>Baixar</a>
            </li>
            <li>
                <strong>Nome do Arquivo 2</strong> - 
                <a class="download-link" href="caminho-para-o-arquivo-2.rar" download>Baixar</a>
            </li>
            <li>
                <strong>Nome do Arquivo 3</strong> - 
                <a class="download-link" href="caminho-para-o-arquivo-3.pdf" download>Baixar</a>
            </li>
        </ul>
        
        <p>Descrição ou instruções adicionais sobre os arquivos para download.</p>
    </div>

    <Rod/>


    </body>
    )
}

export default Down;