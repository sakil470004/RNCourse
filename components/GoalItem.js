import { StyleSheet, Text, View, Pressable } from 'react-native'
function GoalItem(props) {
  return (
    <View style={styles.goalItem} >
      <Pressable android_ripple={{ color: '#222222' }} onPress={props.onDeleteItem.bind(this, props.id)} >
        <Text style={styles.goalText} >{props.title}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem
const styles = StyleSheet.create({
  goalItem: {
    // padding: 20,
    // borderBottomWidth: 1,
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: '#fff',
    fontSize: 18
  }
})