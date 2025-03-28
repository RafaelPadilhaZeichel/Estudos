import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";

import "./assets/Styles/App.css";

import article1Img from './assets/Images/article1.png'
import article2Img from './assets/Images/article2.png'
import article3Img from './assets/Images/article3.png'
// import { Counter } from "./components/Counter/Counter";


// Componente em classe é uma classe que herda a classe component do React, e retorna HTML dentro do método render.
//Fragment <> </>
class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <NavBar />

        {/* <Counter /> */}


        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article2Img}
          />

          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article3Img}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
        </section>
      </>
    );
  }
}

export default App;
