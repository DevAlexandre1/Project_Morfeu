import styles from "./PaginaInicial.module.css"

import ImgHome from "../assets/logoBrancoLogin.png"

const PaginaInicial = () => {
  return (
    <div className={styles.container}>
        <body className="body_conteiner">
            <header className={styles.header_container}>
                <img className={styles.img_home} src={ImgHome} alt="" />
                <nav className={styles.nav_menu}>
                    <a  className={styles.links_menu} href="">Site</a>
                    <a  className={styles.links_menu} href="">Sistemas</a>
                    <a  className={styles.links_menu} href="">Ferramentas</a>
                    <a  className={styles.links_menu} href="">Suporte</a>
                    <a  className={styles.links_menu} href="">Chat</a>                  
                </nav>
                <button className={styles.button_login} >Login</button>
            </header>
            <main className={styles.main_container} >
                <section className={styles.main_section} >
                    <div className={styles.div_section} >
                        <h1 className={styles.h1_section} >A contabilidade da sua empresa de um jeito simples e prático!</h1>

                    <h2>Sobre nós</h2>    
                    <h3> Atuamos no mercado auxiliando as empresas, quanto a sua constituição, administração, consultorias e quando necessário, no encerramento das mesmas. Possuímos uma equipe de profissionais gabaritados nas áreas contábil, fiscal, trabalhista e de assessoria.</h3>
                    
                    <h2>O que fazemos</h2>
                    <h3>Efetuamos um diagnóstico sobre as atividades e as rotinas da empresa, em busca de uma melhor performance na utilização de artifícios legais para redução da carga tributária (Planejamento Tributário).</h3>

                        <h2></h2>
                    </div>
                </section>
                <section className={styles.main_section2} >
                    <div className={styles.div_section2} >
                        <img className={styles.img_main}  src=" " alt="" />
                    </div>
                </section>
            </main>
            <footer className={styles.rodape} >
                <div className={styles.div_rodape} >
                    <h2>Venha fazer uma parceria de sucesso!</h2>
                    <h3>Nossa equipe está pronta para auxiliar as empresas no crescimento e fortalecimento administrativo financeiro em busca da maior qualidade, utilizando-se de sistemas e profissionais de alto nível.</h3>
                </div>
            </footer>
        </body>

    </div>
  )
}

export default PaginaInicial