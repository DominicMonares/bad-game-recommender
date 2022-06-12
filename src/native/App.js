import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.response}>Native Test</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  response: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom:'auto'
  }
});

export default App;
