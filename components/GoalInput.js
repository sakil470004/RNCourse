import { View, StyleSheet, TextInput, Button } from 'react-native'


function GoalInput({ addGoalHandler, goalInputHandler, enteredGoal }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Your course goal" value={enteredGoal} style={styles.textInput} onChangeText={goalInputHandler} />
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