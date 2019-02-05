//1 -  import libaries form making a component
import React from 'react';
import { Text, View } from 'react-native';


//2 - make a component
const Header = (props) => {

    //recebendo o componente textStyle definido no styles
    const { textStyle, viewStyle } = styles; 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.cabecalho}</Text>
        </View> 
        
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8EEEE',
        justifyContent: 'center', /*FlexBox - alinhamento vertical dentro da view*/
        alignItems: 'center', /*FlexBox - alinhamento horizontal dentro da view*/
        height: 60, /*60 pixels na tela*/
        paddingTop: 15, /*topo de preenchimento*/
        shadowColor:'#000', /*adicionando uma sobra a borda*/
        shadowOffset: { width: 0, height: 2}, /*amplitude da sombra a altura que ela terá*/
        shadowOpacity: 0.2, /*opacidade da sombra*/
        elevation:2, /* */
        position: 'relative' /* */
    },
    textStyle: {
        fontSize: 25
    },
    
};


//3 - Make the component available to other parts of the app
export default Header;