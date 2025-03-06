import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal ,Image } from 'react-native'


function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>
            <Image source={require('../assets/logo.png')} style={{width: 100, height: 100}} />
                <TextInput placeholder="Your course goal" value={enteredGoal} style={styles.textInput} onChangeText={setEnteredGoal} />
                <View style={styles.buttonContainer}>

                    <Button title="ADD Goal" onPress={addGoalHandler} />
                    <Button title="Cancel" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

export const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        borderRadius: 5,
        marginRight: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    }

})