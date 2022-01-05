import Comment from "./components/Comment/index";

import './App.css';

function App() {

  return (

    <div className="App">
      <h1>Comments App!</h1>
      <Comment 
      name="João Paulo Sant Ana Marra"
      email="jotapemarra@hotmail.com"
      date={new Date()}
      message="Passando parâmetros para os componentes React"
      />
      <Comment 
      name="Nome Teste"
      email="emailteste@email.com"
      date={new Date()}
      message="Passando parâmetros de teste para os componentes React"
      />
    </div>

  );
}

export default App;
