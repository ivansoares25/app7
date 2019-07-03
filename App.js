import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './source/components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
      let resultado = 0;

      if (this.state.operacao === 'soma') {
          resultado = parseFloat(this.state.num1) + 
              parseFloat(this.state.num2);
      } else {
          resultado = parseFloat(this.state.num1) - 
              parseFloat(this.state.num2);
      }
      this.setState({ resultado: resultado.toString() });
  }

  atualizaValor(nome, valorDoCampo) {
      const obj = {};
      obj[nome] = valorDoCampo;

      this.setState(obj);
  }

  atualizaOperacao(operacao) {
      this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel 
          num1={this.state.num1} 
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
        />
      </View>
    );
  }
}