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
              <main className="main_prin">
                <section className='sectionpage'>
                  <h1 className='section_tiitle_princ'>Biografia</h1>
                  <hr/>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto fugiat velit excepturi tempore voluptas nesciunt, explicabo odio dolores molestias dolor dolorum illo molestiae similique impedit qui, possimus magnam! Tenetur!</p>
                </section>

                <section className='sectionpage'>
                  <h1 className='section_tiitle_princ'>História</h1>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure exercitationem assumenda doloremque magni, voluptates, ullam expedita nihil dolores tenetur illum sed laborum quaerat beatae. Nobis voluptatibus dolor adipisci distinctio aperiam? </p>
                </section>
                

              </main>
              
              
            </main>
    </body>
    )
}
                
export default Home