import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'


function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput placeholder="Your course goal" value={enteredGoal} style={styles.textInput} onChangeText={setEnteredGoal} />
                <View style={styles.buttonContainer}>

                    <Button title="ADD Goal" onPress={addGoalHandler}  />
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
        backgroundColor:'#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '70%',
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
        color: '#120438',
        backgroundColor: '#e4d0ff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    }

})