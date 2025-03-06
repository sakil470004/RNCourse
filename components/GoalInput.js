import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native'


function GoalInput(props) {
      const [enteredGoal, setEnteredGoal] = useState('');
      const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
      }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Your course goal" value={enteredGoal} style={styles.textInput} onChangeText={setEnteredGoal} />
            <Button title="ADD Goal" onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput

export const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
})