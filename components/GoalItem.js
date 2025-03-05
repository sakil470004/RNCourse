import {StyleSheet, Text, View} from 'react-native'
function GoalItem({title}) {
  return (
    <View style={styles.goalItem} >
    <Text style={styles.goalText} >{title}</Text>
  </View>
  )
}

export default GoalItem
const styles = StyleSheet.create({
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
})