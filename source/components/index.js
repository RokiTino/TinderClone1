import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View, } from 'react-native';
    

const Card = (props) => {
  const {name,image,bio} = props.user
    return (
        <View style={styles.card}>
        <ImageBackground source={{uri: image}} style={styles.image}>
          <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          </View>
        </ImageBackground>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    
  image:{
    width:'100%',
    height:'100%',
    overflow:'hidden',
    justifyContent:'flex-end',
    
  },
  card:{
    width:'95%',
    height:'70%',
    backgroundColor:'red',
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  name:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
  },
  bio:{
    fontSize:18,
    color:'white',
    lineHeight:25,
  },
  cardInner:{
    padding:10,
  }
})
