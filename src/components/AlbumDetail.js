import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail =(props) =>{
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle,headerTextStyle,imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>

                 <Image source={{uri:props.record.thumbnail_image}} style={thumbnailStyle}/>
                </View>
                <View style={headerContentStyle}> 
                     <Text style={headerTextStyle}>{props.record.title}</Text>
                     <Text>{props.record.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{uri:props.record.image}} style={imageStyle}/>
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>
            
        </Card>

        
    )

};

const styles = {
    headerContentStyle:{
        justifyContent:'space-around',
        flexDirection:'column',
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default AlbumDetail