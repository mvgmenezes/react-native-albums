//1 -  import libaries form making a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
//Importando o modulo Header
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'


const App = () => (
  //so pode retornar um objeto este método para isso coloca os dois itens(Header e Albumlist) dentro de uma view
  <View>
    <Header cabecalho={'Albums!'}/>
    <AlbumList />
  </View>

);


//Export App - This line solved my issue
export default App;

//registrando o componentem criado (App), Somente o componente Raiz (Root) usa o AppRegistry
//AppRegistry.registerComponent('app1', function(){ return App; });
AppRegistry.registerComponent('app1', () => (App) );