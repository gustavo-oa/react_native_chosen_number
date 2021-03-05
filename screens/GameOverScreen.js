import React  from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
        
            <Text style={styles.text}>The Game is Over.</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/success.png')} 
                    // source={{uri: 'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg'}}
                    style={styles.image} 
                    resizeMode="cover"/>
            </View>
            
            <View style={styles.resultText}>
                <Text style={styles.bodyText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the 
                    number <Text style={styles.highlight}>{props.userChoice}</Text>
                </Text>
                
            </View>
            
            <MainButton onPress={props.onRestart}>
                <Text>New Game</Text> 
            </MainButton>
            
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
    },
    resultText: {
        
        marginHorizontal: 40,
        marginVertical: 15
    },
    highlight: {
        fontSize: 22,        
        color: Colors.primaryColor,
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 20,
        
    }

})

export default GameOverScreen;