/**Import stuffs */
import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'

/**Create some stuffs */
class App extends React.Component{
    render(){
      return (
        <View style={styles.viewStyle}>
          <Text>
            Hello, World!
          </Text>
          <TextInput style={styles.inputStyle}/>
          <Button
            title="To Do"
            color="#841584"/>
        </View>
      )
    }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 40,
    width: '80%',
    borderColor: "green",
    borderWidth: 1
  }
}
/**Export some stuffs */
export default App