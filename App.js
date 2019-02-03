//1 -  import libaries form making a component
import React from 'react';
import { AppRegistry } from 'react-native';
//Importando o modulo Header
import Header from './src/components/header';


const App = () => (
    <Header cabecalho={'Albums!'}/>
);


//Export App - This line solved my issue
export default App;

//registrando o componentem criado (App), Somente o componente Raiz (Root) usa o AppRegistry
//AppRegistry.registerComponent('app1', function(){ return App; });
AppRegistry.registerComponent('app1', () => (App) );