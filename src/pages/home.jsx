    import { useState } from 'react'
import Menu from '/src/menu.jsx'


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
                          <button>Saiba mais  </button>
                      </div>

                    <div className='subdiv_section'>
                      <h1>Livro Oppenheimer</h1>
                      <div className='div_img'>
                        <img className='imgfilme' src="src\assets\imagens\oppenheimer_livro__t4m2z703s.webp" alt="" />
                      </div>
                      <button>Saiba mais</button>
                    </div>
                  </div>
              </section>
            </main>

            <main className="main_prin" id='main_light'>
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
                        
                        <button className='button_light'>Saiba mais</button>
                        </div>
                      </div>
                  </div>
            </main>

            <main className='main_prin' id='main_second'>
              

            </main>
    </body>
    )
}
                
export default Home