import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    // console.log('Goal Added');
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text:enteredGoal,key:Math.random().toString()}]);
    setEnteredGoal('');
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" value={enteredGoal} style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title="ADD Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={{ padding: 20, fontSize: 24, color: '#ff0000' }} >List Of Goal ....</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem} >
              <Text style={styles.goalText} >{itemData.item.text}</Text>
            </View>
          )}
        />
        {/* <ScrollView>

          {
            courseGoals.map((goal, index) => (
              <View style={styles.goalItem}  key={index}>
                <Text style={styles.goalText} >{goal}</Text>
              </View>
            ))
          }
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    // padding: 20,
    // borderBottomWidth: 1,
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    fontSize: 18
  }

});
