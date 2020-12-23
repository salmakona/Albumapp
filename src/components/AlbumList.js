import React, { Component } from 'react';
import {Text,View,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state ={ albums:[]}
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({albums: response.data}));
    }

    renderAlbums(){
       return this.state.albums.map(albums =>
       <Text key={albums.title}>{albums.title}</Text>
            //  <AlbumDetail key={albums.title} record ={album}/>
       );
    }

    renderAlbums2(){
        return this.state.albums.map(albums => <AlbumDetail key={albums.title} record ={albums}/>)
     }


    render(){
        console.log(this.state)
        return (
            <ScrollView>
                {/* {this.renderAlbums()} */}
                {this.renderAlbums2()}
            </ScrollView>
        );
    }
}

export default AlbumList;