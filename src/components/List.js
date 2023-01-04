import Item from "./Item";
import styles from './Frase.module.css'

function List(){

  return(
    <>
       <h3 className={styles.list}>Minha Lista</h3>
       <ul>
         <Item marca="string"  ano_lancamento={2022} />
         <Item marca="Ferrari"  ano_lancamento={1916} />
         <Item  ano_lancamento={1222} />
       </ul>   
    </>
  );

}

export default List