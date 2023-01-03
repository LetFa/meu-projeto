function Pessoa({nome, idade, foto, profissao}){
  return(
      <div>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>profissao: {profissao}</p>
        <img src={foto} alt={nome} />
      </div>
  );

}

export default Pessoa