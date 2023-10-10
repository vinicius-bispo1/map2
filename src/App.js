//crie um estado que armazene uma lista de objetos chamado compras.
//coloque duas propriedades, uma vai armazenar a imagem do produto e a outra o nome produto
// adicione um estilo.

import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    compras: [
      {
        img:
          "https://images.tcdn.com.br/img/img_prod/939843/a_arte_da_guerra_os_treze_capitulos_um_grande_classico_sobre_estrategia_e_lideranca_1141_1_69a927d97e2b6c588dcce8527b0e9650.jpg",
        legenda: "A arte da guerra"
      },
      {
        img:
          "https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
        legenda: "pizza"
      },
      {
        img:
          "https://images-submarino.b2w.io/produtos/7084905720/imagens/kit-teclado-mouse-gamer-led-colorido-usb-2400-dpi-novidade/7084905720_1_large.jpg",
        legenda: "teclado de computador"
      }
    ]
  };

  render() {
    const { compras } = this.state; //desestruturação
    return (
      <div>
        <h1>Minhas Compras</h1>

        <div className="box">
          {this.state.compras.map((item) => (
            <div>
              <img src={item.img} />
              <p>nome:{item.legenda}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
