import { useState } from "react";

function Teste(){
  
  function cadastrar(e){
    e.preventDefault()
    console.log(`Usuário do email ${email} foi cadastrado com a senha: ${password}`)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

   return(
     <div>
      <h1>Teste de Formulario Hook</h1>
      <form onSubmit={cadastrar}>
         <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="teste@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}></input>
         </div>
         <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" name="password" id="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}></input>
         </div>
         <div>
          <button type="submit">Cadastrar</button>
         </div>
      </form>
     </div>
   );
}

export default Teste