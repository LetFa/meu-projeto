import styles from "./Frase.module.css";

function Frase(){
    return(
      <div className={styles.frase}>
        <p className={styles.frase_paragrafo}>em 2023 estou trabalhando na empresa winner Vendas</p>

        <div className={styles.frase_ajuda}>
           <p className={styles.frase}>Deus me ajuda por favor</p>
        </div>
      </div>
      
    );
}

export default Frase