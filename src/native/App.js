import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import fetchGameData from '../shared/services/gameData';

const App: () => Node = () => {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.response}>Native Test</Text>
      <Button
        onPress={() => fetchGameData(page)}
        title={'Fetch Game Data'}
        color="purple"
      />
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
