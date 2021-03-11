import React, { useState } from 'react';
import 
{ 
    View, 
    StyleSheet, 
    Text,  
    TouchableWithoutFeedback, 
    Keyboard,
    Alert,
    Dimensions
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandle = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const closeKeyboard = () => {
        Keyboard.dismiss();
    }

    const resetInputHandle= () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandle = () => {
        const chosenNumber = parseInt(enteredValue);
        
        if (isNaN(chosenNumber) ||  chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okey', style: 'destructivet', onPress: resetInputHandle}])
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>            
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)}> 
                    <Text>Start Game</Text>            
                </MainButton>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        placeholder='Write your number here!'
                        keyboardType='number-pad'
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize='none'
                        maxLength={2}
                        onChangeText={numberInputHandle}
                        value={enteredValue}

                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <MainButton style={{...styles.button, ...styles.buttonReset}} onPress={resetInputHandle} color={colors.secondaryColor} >
                                <Text>Reset</Text> 
                            </MainButton>
                        </View>
                        <View style={styles.button} >
                            <MainButton  onPress={confirmInputHandle} color={colors.primaryColor} >
                                <Text>Confirm</Text>
                            </MainButton>
                        </View>
                    </View>

                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
    },
    button: {
        width: Dimensions.get('window').width /3.3, 
        alignItems: 'center'
    },
    input: {
        width: '70%',
        textAlign: 'center'

    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    buttonReset: {
        backgroundColor: colors.secondaryColor
    }
});

export default StartGameScreen;


