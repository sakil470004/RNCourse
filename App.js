import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Another Piece of Text</Text>
      </View>
      <Text style={{margin:16,borderWidth:2,borderColor:'#22ff22',padding:16}}>Hello World</Text>   
      <Button title="Click Me" onPress={()=>alert('Button Clicked')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:20,
    color:'red'
  }

});
