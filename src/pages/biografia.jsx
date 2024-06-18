import Menu from '../menu'

function Bio () {
    return (
        <body>
            
        <Menu/>

        <main className="main_prin">
        <div class="container">
            <div class="bio-section">
                <img src="/src/assets/imagens/robert-oppenheimer-l.webp" alt="Foto de Robert Oppenheimer" class="bio-img"/>
                <div class="bio-content">
                    <h1 className='title_light'>Biografia de Robert Oppenheimer</h1>
                    <p className='p_light'><strong>Ocupação:</strong> Físico estadunidense</p>
                    <p className='p_light'><strong>Data de Nascimento:</strong> 22/04/1904</p>
                    <p className='p_light'><strong>Data da Morte:</strong> 18/02/1967 (aos 62 anos)</p>
                    <p className='p_light'>Julius Robert Oppenheimer foi um físico estadunidense que ficou conhecido como o pai da bomba atômica. Diretor do Projeto Manhattan, coordenou uma grande equipe de cientistas que trabalhou para a criação da terrível arma militar, usada durante a Segunda Guerra Mundial pelos EUA.</p>
                    <p className='p_light'>Após ver o enorme estrago que sua invenção produziu, Oppenheimer se arrependeu de ter contribuído para a morte de milhares de pessoas.</p>
                    
                    <h2 className='titleh2_light'>Juventude e formação</h2>
                    <p className='p_light'>Nascido em 22 de abril de 1904 em Nova Iorque, Robert veio de uma família judia com posses. Seu pai, um alemão que vivia nos EUA, fez fortuna ao vender materiais têxteis.</p>
                    <p className='p_light'>Com uma educação refinada, Robert Oppenheimer estudou matemática, ciências, literatura grega e francesa. Se formou em 1925 na Universidade de Harvard com a maior das honras. Dois anos depois já era doutor pela Universidade de Göttingen, na Alemanha, com apenas 22 anos. Foi nessa instituição que estudou e contribuiu para avanços na física quântica.</p>
                    <p className='p_light'>De volta aos EUA, continuou seus estudos e deu aulas na Universidade de Berkeley. Se tornou uma referência em física teórica e ajudou a desenvolver pesquisas em diversos campos da ciência.</p>
                    </div>
                  </div>
              </div>

          
        </main>


        </body>



    )
}

export default Bio;