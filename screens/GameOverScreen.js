import React  from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.text}>The Game is Over.</Text>
                <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
                <Text style={styles.text}>Number was:: {props.userChoice}</Text>
                <Button title="New Game" onPress={props.onRestart}/>
            </Card>
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
    }
})

export default GameOverScreen;