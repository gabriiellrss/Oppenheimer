    import Menu from '/src/menu.jsx'

function Home () {
    return (

        <body>
            <Menu/>

            <main id="main_prin">
              <section>
                <div id="divmain1">
                    <img id="imgprin" src="/src/assets/I0246850006.png" alt=""/>
                 </div>

                 <div>
                    <h1>Quem foi Openhaimer?</h1>
                 </div>
              </section>
                
                <main>
                  <div class="container">
                        <p>Julius Robert Oppenheimer</p>
                        <p>
                          Nascimento: 22/04/1904 em Nova York  
                        </p>
                        <p>
                          Formação: Físico teórico, graduado pela Universidade de Harvard. Aprimorou seus conhecimentos na Universidade de Cambridge com E. Rutherfor e na                 Universidade de Göttingen com M. Born, onde defendeu sua tese de doutorado.
                        </p>
                        <p>Morte: 20/02/1967</p>
                    </div>                
                  <div class="container">
                    <p>Conhecido por muitos como o "pai da bomba atômica", Robert Lucius Oppenheimer foi um
                      físico teórico americano renomado. Ele concluiu o seu doutorado com 23 anos e estudou com mentes
                      como Ernest Rutherford e Max Born.
                      No periodo entre 1943 e 1945, ele foi o responsável por chefiar o projeto Manhattan, em Los Alamos, 
                      que o deixou conhecido mundialmente por ter inventado uma arma mortal capaz de levar milhares de vidas
                      de uma vez: a bomba atômica.
                      Seus trabalhos relacionam-se com física nuclear, mecânica quântica, teoria da relatividade, entre outros.
                    </p>
                  </div>
                </main>
                
            </main>
    </body>
    )
}
                
export default Home