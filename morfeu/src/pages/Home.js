import Footer from '../components/Footer'
import Styles from '../pages/Home.module.css'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div>
          <body className={Styles.container}>
            <div class="container py-6">
              <h1 class="h2 titulo">Conheça nossa <span>empresa</span></h1>
                <p>Atuamos no mercado auxiliando as empresas, quanto a sua constituição, administração, consultorias e quando necessário, no encerramento das mesmas. Possuímos uma equipe de profissionais gabaritados nas áreas contábil, fiscal, trabalhista e de assessoria.</p>
                <p>As consultorias abrangem todas as áreas acima citadas. O planejamento tributário também faz parte de nosso currículo empresarial, analisamos a tributação que mais se adequa a sua empresa. Trabalhamos para poder serví-lo sempre com qualidade.</p>
                <p>O mundo econômico atual, tão complexo e instável em que temos de atuar, e a rapidez das informações exigem de nós, administradores um esforço para adaptarmos a esse ritmo, e principalmente para obtermos nosso objetivo maior, o sucesso. Para isso a capacidade de uma organização é o que determinará uma trajetória de vitórias ou de fracasso.</p>
                <p>Neste contexto e contando com uma equipe extremamente capacitada, e preocupada em buscar constantemente o que há de mais novo no mercado e nos preocupamos em trazer um trabalho sério e competente com o intuito de agregar valores e aumentar o capital intelectual de seus parceiros (clientes), fazendo com que estas organizações se tornem bem sucedidas e preparadas para prosseguir neste caminho de conquistas e vitórias.</p>
                <p>Nosso intuito é estabelecer estratégias e operacionalizar o conjunto de ações para os nossos clientes, capaz de fazê-los sobreviver, crescer e se perpetuar no mercado.</p>
              <div class="row">
                  <div class="col-md-4">
                      <h3>Contabilidade rápida</h3>
                      <p>Temos uma equipe totalmente dedicada a contabilidade da sua empresa que trabalha com rapidez e agilidade.</p>
                  </div>
                  <div class="col-md-4">
                      <h3>Com simplicidade</h3>
                      <p>Com dinamismo e praticidade, fazemos todo o trabalho duro por você de forma simples, rápida e interativa.</p>
                  </div>
                  <div class="col-md-4">
                      <h3>Mais praticidade</h3>
                      <p>Somos um Escritório de Contabilidade com profissionais capacitados para facilitar sua vida e de sua empresa.</p>
                  </div>
              </div>
            </div>
          </body>
          <footer className={Styles.footer}>
             <Footer/>
          </footer>
    </div>
  )
}

export default Home