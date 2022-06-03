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
            <div class="container py-6">
                <h1 class="h2 titulo">Conheça nossos <span>serviços</span></h1>
                <p>Com uma equipe treinada, nossa empresa efetua assessoria e consultoria nas áreas:</p>
                <ul>
                    <li>Contábil;</li>
                    <li>Departamento Fiscal;</li>
                    <li>Recursos Humanos;</li>
                    <li>Legalização de empresas.</li>
                </ul>
                <p>Fornecendo todas as informações e suporte técnico aos departamentos já existente na empresa, com visitas periódicas para verificações e acompanhamento, elaborando relatórios para a comunicação das divergências ou sugestões, além de fornecer respostas a consultas por telefone e pessoalmente.</p>

                <p>Efetuamos também um diagnóstico sobre as atividades e as rotinas da empresa, em busca de uma melhor performance na utilização de artifícios legais para redução da carga tributária (Planejamento Tributário).</p>

                <h3>Contábil</h3>
                <p>Executamos serviços pertinentes a rotina contábil, desde a classificação dos documentos até a emissão dos relatórios correspondentes, observando os princípios, normas contábeis e a legislação em vigor.</p>

                <h3>Departamento fiscal</h3>
                <p>Tem como objetivo, efetuar toda a rotina do departamento fiscal, desde a classificação fiscal das Notas Fiscais de Entrada e Saída, e de serviços prestados, até a apuração dos impostos pertinentes, tais como: ICMS - IPI - ISS - COFINS - PIS, etc., e entregar ao cliente em tempo hábil todas as guias para recolhimento dos impostos decorrentes da atividade para serem pagas.</p>
                <p>Assumimos toda a responsabilidade pela entrega de todas as obrigações acessórias periódicas das três esferas governamentais (União, Estado, Município). exemplo: DCTF, DIRF, DIPAM, DAME, etc.</p>
                <p>Também promove a assessoria ao cliente quanto as dúvidas imediatas nesta área, como por exemplo: emissão de NFS, trâmite de mercadorias, importação, exportação, alíquotas, etc.</p>
                <p>Temos o compromisso em comunicar ao cliente todas as alterações da legislação que devem ser observadas.</p>
                <p>Toda escrituração é efetuada através de sistema eletrônico de dados, possibilitando uma melhor qualidade e precisão dos serviços.</p>

                <h3>Recursos humanos</h3>
                <p>Executamos todos os serviços envolvidos na rotina do departamento pessoal a partir do registro do funcionário, dentre as quais destacamos:</p>
                <ul>
              <li>Registro do Funcionário com toda a anotação e documentação legal;</li>
              <li>Folha de pagamento por centro de custos/filiais, com relação para o departamento financeiro e recibos de pagamento;</li>
              <li>Guias de impostos relativos à folha e outros serviços de terceiros;</li>
              <li>Controle e acompanhamento individual por funcionário (exames médicos, ao sair de férias e 13º salário);</li>
              <li>Relatórios para orçamentos financeiros (provisão de férias 13º salário);</li>
              <li>Rescisões e homologações;</li>
              <li>Entrega de Obrigações periódicas. exemplo: RAIS - DIRF e outros;</li>
              <li>Mapa de cálculo para aquisição de vale transporte;</li>
              <li>Assessoria completa para a adequada administração de pessoal no que diz respeito a legislação do trabalho;</li>
              <li>Comunicação ao cliente sobre as alterações legais que devem ser destacadas, incluindo dissídios da categoria;</li>
              <li>Assessoria no atendimento à agentes fiscais trabalhistas.</li>
              </ul>

              <h3>Legalização de empresas</h3>
              <p>Esta divisão tem como alvo servir às Empresas e as Pessoas Físicas, no atendimento às exigências junto aos órgãos da administração pública, efetuando os registros pertinentes a cada setor, bem como resolvendo questão relativas à pendências físicas e comerciais (protestos, requerimento, etc.)</p>
              <p>Elaboramos defesa na Esfera Administrativa sobre ocorrências e exigências descabidas da administração pública e fiscal.</p>
              <p>Com uma equipe treinada, fornecemos todo o apoio necessário para assessorar o cliente nas questões empresariais, executando o trabalho ou indicando o melhor caminho para a solução dos problemas.</p>
              <p>As Pessoas Físicas contam também com um serviço de planejamento, análise e pedido de aposentadoria e outros benefícios junto ao INSS.</p>
            </div>
          </body>
          <footer className={Styles.footer}>
             <Footer/>
          </footer>
    </div>
  )
}

export default Home