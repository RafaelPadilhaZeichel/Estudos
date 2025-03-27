import React from 'react';

import './assets/Styles/App.css'
import NavBar from './components/NavBar/NavBar';



// Componente em classe é uma classe que herda a classe component do React, e retorna HTML dentro do método render. 
class App extends React.Component {

  // Método responsável por renderizar o conteúdo HTML do nosso componente 
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
