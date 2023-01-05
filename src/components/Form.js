import { useState} from 'react'

function Form(){

  function cadastrarUsuario(e){
    e.preventDefault()
       console.log(`Senha do usuário ${name} é: ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

   return(
     <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder='Informe seu nome' onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div>
           <label htmlFor="password">Senha:</label>
           <input type="password" id="password" name="password" placeholder='Informe sua senha' onChange={(e) => setPassword(e.target.value)} value={password}></input>
        </div>
        <div>
           <input type="submit" value="cadastrar"></input>
        </div>
      </form>
     </div>
   );
}



export default Form