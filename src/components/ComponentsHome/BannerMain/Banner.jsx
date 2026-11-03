import styles from './Banner.module.css'

export default function Banner() {
    return <>
    <div className={styles.banner}>
        <div className={styles.bannerContent}>
            <span className={styles.bannerSubtitle}> Conhecimento ao alcance de todos</span>
            <h1 className={styles.bannerTitle}>Biblioteca Municipal de Alagoa Grande</h1>
            <p className={styles.bannerDescription}>A Biblioteca Municipal de Alagoa Grande é um espaço dedicado à promoção da leitura, cultura e conhecimento. Com um acervo diversificado, oferecemos aos cidadãos a oportunidade de explorar o mundo dos livros e expandir seus horizontes.</p>
            <div className={styles.inputBusca}>
                <input className={styles.inputBusca} type="text" placeholder="O que você está procurando?" />
                <button className={styles.buttonBusca}>Buscar</button>
            </div>
        </div>
    </div>  
    </>

}