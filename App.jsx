import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddInput from './components/AddInput';

const App = () => {
  return (
    <View style={styles.container}>
      <AddInput />
    </View>
  )
}

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <AddInput />
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;