import { useState } from 'react'

function Condicional(){


  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
 
  }

  function limparEmail(){
    setUserEmail('');
  }


  return(
    <div>
       <h2>Cadastra o seu email:</h2>
       <form>
        <input type="email" name="email" id="email" placeholder='examples@gmail.com' onChange={(e) => setEmail(e.target.value) }></input>
        <button type='submit' onClick={enviarEmail}>Enviar</button>
       </form>
       {userEmail && (
          <div>
            <p>o email do usuário é: {userEmail}</p>
            <button  onClick={limparEmail}>Limpar email</button>
          </div>
       )}
    </div>
  );
}

export default Condicional