import './App.css'
import HelloWorld  from './components/HelloWorld'


function App() {

  const name = "Letícia Farias"
  const nameM = name.toUpperCase()
  
  function soma(a, b){
   return  a + b
  }
  
  const URL = "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200"

  return (
    <div className="App">

       <h2 className="text-success mt-5">Estudando React</h2>
       <p>alterando JSX</p>
      <h5>Criando variáveis</h5>
      <p>Olá, {name}</p>
      <h5>Criando nome com letra maiúscula</h5>
      <p>Olá, {nameM}</p>
      <h5>Criando função</h5>
      <p>Soma: {soma(50,50)}</p>
      <h5>Imagem</h5>
      <img src={URL} alt="imagem react" />
      <HelloWorld />
    </div>
  );
}


export default App;
