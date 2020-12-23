import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button =(props) =>{
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={textStyle}> 
            {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles ={
    textStyle:{
        alignSelf:'center',
        textAlign:'center',
        borderColor:'#000',
        borderRadius:1,
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    bottonStyle:{
        alignSelf:'stretch',
        backgroundColor:'#fff',
        marginLeft:5,
        marginRight:5,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    }
}

export default Button;