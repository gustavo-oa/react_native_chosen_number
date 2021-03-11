import React  from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions,
    ScrollView,
} from 'react-native'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
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
        </ScrollView>
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
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth:3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height:Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultText: {
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
        marginHorizontal: 40,
        marginVertical: Dimensions.get('window').height / 60
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