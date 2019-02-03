//var React = require('react');
//var Text = require('react-native').Text;
//var View = require('react-native').View;
//var AppRegistry = require('react-native').AppRegistry;

import React from 'react';
import { Text, AppRegistry } from 'react-native';
//import { AppRegistry } from 'react-native'


//criando uma constante, sendo de acesso somente de leitura, nao permitindo alterar o valor (var)
/*
const App = function (){ 
  return (
      <Text>Meu primiero App</Text>
  );
};
*/
const App = () => (
    <Text>Meu primiero App</Text>
);


//Export App - This line solved my issue
export default App;

//registrando o componentem criado (App)
//AppRegistry.registerComponent('app1', function(){ return App; });
AppRegistry.registerComponent('app1', () => (App) );