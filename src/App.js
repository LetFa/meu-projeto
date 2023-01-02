import './App.css';

function App() {
  const name = 'luciana'
  const nameM = name.toUpperCase()


  function soma(a,b){
    return a * b
  }

  const URL = "https://images.pexels.com/photos/6829488/pexels-photo-6829488.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  return (
    <div className="App">
       <h2>Alterando JSX</h2>
       <p>paragrafo</p>
       <p>Olá, {name}</p>
       <p>Nome em letra grande, {nameM}</p>
       <p>{soma(50,10)}</p>
       <img src={URL}  />
    </div>
  );
}

export default App;
