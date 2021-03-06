import React, { useState, useRef, useEffect } from 'react';
import 
{ 
    View, 
    Text, 
    StyleSheet, 
    Alert, 
    ScrollView,
    FlatList
} from 'react-native';

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor( Math.random() * (max - min)) + min;
    if (rndNum === exclude)    {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoice, onGameOver} = props;
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])


    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);


    const renderListItem = (listLength, itemData) => (
        <View key={itemData.item} style={styles.listItem}>
            <Text>#{listLength - itemData.index}</Text>
            <Text>{itemData.item}</Text>        
        </View>)

    const nextGuessHandle = direction  => {
    
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel' }])
            return;
        } 
    
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess + 1;
        }
    
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses] );
    }


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>            
            <Card style={styles.buttonContainer}>
                <MainButton style={styles.lowerButton}  onPress={nextGuessHandle.bind(this,'lower' )} >
                    <Ionicons name="remove-outline" size={24} color="white" />
                </MainButton>
                <MainButton  onPress={nextGuessHandle.bind(this,'greater' )} >
                    <Ionicons name="add-outline" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((data, index )=> renderListItem(data, pastGuesses.length - index) )}
                </ScrollView> */}
                <FlatList 
                data={pastGuesses} 
                renderItem={renderListItem.bind(this, pastGuesses.length)} 
                keyExtractor={(item) => item}></FlatList>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    },
    listContainer: {
        flex:1,
        width: '80%',
        marginTop: 10
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around',

    },
    lowerButton: {
        backgroundColor: Colors.secondaryColor
    }
});

export default GameScreen;