import React  from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.text}>The Game is Over.</Text>
                <Text style={styles.text}>Your selected Number Is </Text>
                <NumberContainer>{props.userChoice}</NumberContainer>
                <Button title="Done"/>
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