import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import Colors from '../constants/colors'
const MainButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryColor,
        paddingVertical:12,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MainButton;