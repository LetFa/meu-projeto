function NomesList({nomes}){
 
  return(
   <>
     
     <h1>Listas de nomes:</h1>
     {nomes.length > 0 ? (
       
       nomes.map((nome, index) => (
        <p key={index}>{nome}</p>
       ))) : (
          <p>Não tem nenhuma lista</p>
       )
     }
   </>

  );

}

export default NomesList