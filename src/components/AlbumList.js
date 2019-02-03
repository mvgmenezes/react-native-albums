import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';



class AlbumList extends Component{

    //resolvendo o problema do método ser assincrono, crianod uma variavel state
    state = { albums: []};

    //ciclo de vida do component, vai ser chamado quando esta classe for renderizada
    //carregaremos os dados quando o usuario acessar a lista
    componentWillMount(){

         //fetch('https://rallycoding.herokuapp.com/api/music_albums')
        //.then((response) => response.json())
        //.then((responseData) => {
        //    console.log(responseData);
        //    debugger;
        //});

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));

       
    }

    renderAlbums(){
        //map ja realiza a interacao
        return this.state.albums.map(album => <Text>{album.title}</Text>)
    }

    render(){
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
    
}

export default AlbumList;