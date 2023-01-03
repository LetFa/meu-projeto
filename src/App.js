import './App.css'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {


  return (
    <div className="App">
       <Frase />  
       <h2 className="text-success mt-5">Estudando React</h2>
       <Pessoa  nome="Letícia" idade="20" profissao="Developer" foto="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=200" />
    </div>
  );
}


export default App;
