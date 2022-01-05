import Comment from "./components/Comment/index";

import './App.css';

function App() {

  const meuNome = "João Paulo Sant'Ana Marra";

  return (

    <div className="App">
      <h1>Comments App!</h1>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>

  );
}

export default App;
