import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoal) {
    // console.log('Goal Added');
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoal, key: Math.random().toString() }]);
    // model close
    endAddGoalHandler()
  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal +" onPress={startAddGoalHandler} color='##5e0acc' />
      <GoalInput addGoalHandler={addGoalHandler}
        visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
      <View style={styles.goalsContainer}>
        <Text style={{ padding: 20, fontSize: 24, color: '#ff0000' }} >List Of Goal ....</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem title={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.key}
            />
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

export const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5
  },


});
