import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}> 
      <TextInput placeholder="Your course goal" style={styles.textInput}/>
      <Button title="ADD Goal"/>
     </View> 
     <View>
      <Text>List Of Goal ...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'80%',
    padding: 8,
    borderRadius: 5 ,
    marginLeft: 10
  }


});
