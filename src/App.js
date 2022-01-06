import Comment from "./components/Comment/index";
import './App.css';
import React from "react";

class App extends React.Component {

  state = {
    comments: [
      {
        name: "João Paulo Sant Ana Marra",
        email: "jotapemarra@hotmail.com",
        date: new Date(),
        message: "Passando parâmetros para os componentes React",
      },
      {
        name: "Nome Teste",
        email: "emailteste@email.com",
        date: new Date(),
        message: "Passando parâmetros de teste para os componentes React",
      },
      {
        name: "João Paulo Sant Ana Marra",
        email: "jotapemarra@hotmail.com",
        date: new Date(),
        message: "Passando parâmetros para os componentes React",
      },
      {
        name: "Nome Teste",
        email: "emailteste@email.com",
        date: new Date(),
        message: "Passando parâmetros de teste para os componentes React",
      },
    ],
  };

  addComment=() => {
    const newComment = {
      name: "João",
      email: "mail@mail.com",
      date: new Date(),
      message: "Adicionando comments"
    };

      this.setState({
        comments: [...this.state.comments, newComment]
      });

  }

  render() {
    return (
      <div className="App">
        <h1>Comments App!</h1>
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              name={comment.name}
              email={comment.email}
              date={comment.date}
              message={comment.message}
            />
          );
        })}
        <button onClick={this.addComment}>Adicionar Comentário</button>
      </div>
    );
  }
  }

export default App;
