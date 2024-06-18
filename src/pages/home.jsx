    import { useState } from 'react'
import Menu from '/src/menu.jsx'
import Rod from '/src/rodape.jsx'


function Home () {



    return (

        <body>
          <Menu/>

          <section className='sectionpage' id="section_home">
              <div id='div_section'>   
                  <video class="video-loop" autoPlay loop muted>
                    <source src="src/assets/stockvideo_01886.mp4" type="video/mp4"/>
                  </video>
              </div>
          </section>

          <main className="main_prin">
              <div class="container">
                  <div className='div_section' id='div_main'>
                    <h1 className='section_tiitle_princ'> Quem foi Oppenheimer?</h1>
                    <hr/>
                  </div>

                  <div className='div_section' id='div_main2'>
                       <p>J. Robert Oppenheimer foi um físico teórico americano, muitas vezes chamado de 
                        “pai da bomba atômica” por seu papel como diretor científico do Projeto Manhattan durante a Segunda Guerra Mundial, 
                        onde a primeira bomba atômica foi desenvolvida. Após a guerra, ele se tornou um defensor do controle de armas nucleares e uma figura pública proeminente antes de ser afastado durante a histeria anticomunista dos anos 50 nos EUA. Sua história 
                        é complexa e fascinante, refletindo tanto os triunfos quanto os dilemas morais da ciência no século XX.
                        </p>
                  </div>
              </div>

            <section id='section_princ'>
                <div id='div_section1' className='div_section'>
                      <div className='subdiv_section'>
                          <h1>Filme Oppenheimer</h1>
                          <div className='div_img'>
                            <img className='imgfilme' src="\src\assets\01000000-0aff-0242-db28-08dc01de4a41_w1597_n_r0_st_s.jpg" alt="" />
                          </div>
                          <a href="/referencias"><button>Saiba mais</button></a>
                      </div>

                    <div className='subdiv_section'>
                      <h1>Livro Oppenheimer</h1>
                      <div className='div_img'>
                        <img className='imgfilme' src="src\assets\imagens\oppenheimer_livro__t4m2z703s.webp" alt="" />
                      </div>
                      <a href="/referencias"><button>Saiba mais</button></a>
                    </div>
                  </div>
              </section>
            </main>

          <main className="main_prin mainfinal" id='main_light'>
            <div class="container">
                <div class="bio-section">
                    <img src="/src/assets/imagens/robert-oppenheimer-l.webp" alt="Foto de Robert Oppenheimer" class="bio-img"/>
                    <div class="bio-content">
                        <h1 className='title_light'>Biografia de Robert Oppenheimer</h1>
                        <p><strong>Ocupação:</strong> Físico estadunidense</p>
                        <p><strong>Data de Nascimento:</strong> 22/04/1904</p>
                        <p><strong>Data da Morte:</strong> 18/02/1967 (aos 62 anos)</p>
                        <p>Julius Robert Oppenheimer foi um físico estadunidense que ficou conhecido como o pai da bomba atômica. Diretor do Projeto Manhattan, coordenou uma grande equipe de cientistas que trabalhou para a criação da terrível arma militar, usada durante a Segunda Guerra Mundial pelos EUA.</p>
                        <p>Após ver o enorme estrago que sua invenção produziu, Oppenheimer se arrependeu de ter contribuído para a morte de milhares de pessoas.</p>
                        
                        <a href="/biografia"><button className='button_light'>Saiba mais</button></a>
                        </div>
                      </div>
                  </div>

                  <div class="history-section">
                      <h1 class="title_light">História de Robert Oppenheimer</h1>
                      <img src="/src/assets/imagens/historia/1.jpg" alt="Imagem de Robert Oppenheimer" class="history-img"/>
                  <div class="history-content">
                      <h2 class="titleh2_light">A Paradoxo das Bombas Nucleares</h2>
                      <p class="p_light">A história do ser humano está cheia de paradoxos. Podemos dizer que vivemos num deles desde o final da Segunda Guerra Mundial. Referimo-nos ao facto de as bombas nucleares, as armas mais destrutivas alguma vez criadas pelo ser humano, capazes de reduzir o nosso planeta a cinzas várias vezes, se terem tornado precisamente a maior garantia de paz no mundo, funcionando em diversas ocasiões como travão para uma escalada bélica com consequências potencialmente terríveis. O melhor exemplo disto é a Guerra Fria.</p>
                      <p class="p_light">No entanto, quando falamos em bombas nucleares, não podemos deixar de parte um dos principais artífices da sua criação, uma personagem cuja vida é igualmente paradoxal. Referimo-nos a Julius Robert Oppenheimer.</p>
                
                      <h2 class="titleh2_light">Infância e Educação</h2>
                      <p class="p_light">Filho de um casal de imigrantes judeus de origem alemã que fizera fortuna no sector têxtil, Robert Oppenheimer nasceu em Nova Iorque a 22 de Abril de 1904. Diz-se que era um jovem com tendência para adoecer e uma personalidade angustiada, mas com grandes dotes académicos, tanto para a ciência como para as artes.</p>
                      <img src="/src/assets/imagens/historia/2.jpg" alt="Imagem da infância de Robert Oppenheimer" class="history-img"/>
                      <p class="p_light">Concluídos os seus primeiros anos de formação na Ethical Culture Society School, em Nova Iorque, os seus problemas de saúde fizeram com que entrasse na Universidade de Harvard com um ano de atraso, o qual compensou licenciando-se em química em apenas três anos, com as mais altas distinções.</p>
                      <p class="p_light">Em Harvard, interessou-se por termodinâmica e física experimental. Uma vez que ainda não existiam nos Estados Unidos da América instituições com reconhecimento internacional no ensino desta última, Oppenheimer prosseguiu os seus estudos na Europa. Foi assim que ingressou nos Laboratórios Cavendish da Universidade de Cambridge, dirigidos pelo físico Ernest Rutherford, onde devido à sua pouca destreza no laboratório decidiu direccionar a sua carreira para a física teórica.</p>
                
                      <a href="/historia"><button className='button_light'>Saiba mais</button></a>
                  </div>
                </div>

                  
          </main> 

          <Rod/>

    </body>
    )
}
                
export default Home