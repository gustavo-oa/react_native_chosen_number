import React  from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native'
import Card from '../components/Card'
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
        
            <Text style={styles.text}>The Game is Over.</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
            </View>
            
            <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.text}>Number was:: {props.userChoice}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    image: {
        width: '100%',
        height:'100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth:3,
        borderColor: 'black',
        width: 300,
        height:300,
        overflow: 'hidden',
        marginVertical: 30
    }
})

export default GameOverScreen;