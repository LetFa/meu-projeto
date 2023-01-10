import './App.css'
import OutraList from './components/OutraList';
import NomesList from './components/NomesList';

function App() {

  const meusItens = ["react", "vue", "angular"];
  const nomesItens = ["leticia", "larissa", "luciana", "robson"];


  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraList itens={meusItens} />
      <OutraList itens={[]} />
      <NomesList nomes={nomesItens} />
      <NomesList nomes={[]} />
    </div>
  );
}


export default App;
