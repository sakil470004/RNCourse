import { StyleSheet, Text, View, Pressable } from 'react-native'
function GoalItem(props) {
  return (
    <View style={styles.goalItem} >
      <Pressable android_ripple={{ color: '#222222' }} onPress={props.onDeleteItem.bind(this, props.id)} 
      style={({ pressed }) => pressed && styles.pressedItem}
      >
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
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    padding: 8,
    color: '#fff',
    fontSize: 18
  }
})