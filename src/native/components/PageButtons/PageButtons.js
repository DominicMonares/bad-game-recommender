import React, { useState } from 'react';
import {
  Pressable,
  Text,
  View
} from 'react-native';

import fetchGameData from '../../../shared/services/gameData';
import LoadingWheel from '../LoadingWheel/LoadingWheel';
import styles from './Styles';

const PageButtons = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const page = props.page;
  const updatePage = props.updatePage;
  const updateGames = props.updateGames;
  const scrollRef = props.scrollRef;
  const updateDisplay = async (page) => {
    setModalVisible(true);
    await updateGames(await fetchGameData(page));
    setModalVisible(false);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
    updatePage(page);
  }

  return (
    <View>
      <View style={styles.loadingContainer}>
        <LoadingWheel visible={modalVisible} toggle={setModalVisible} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (page > 1) { updateDisplay(page - 1) }
          }}
        >
          <Text style={styles.page}>{'<'}</Text>
        </Pressable>
        <Pressable style={styles.currentButton}>
          <Text style={styles.currentPage}>{page}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => { updateDisplay(page + 1) }}
        >
          <Text style={styles.page}>{page + 1}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => { updateDisplay(page + 2) }}
        >
          <Text style={styles.page}>{page + 2}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => { updateDisplay(page + 3) }}
        >
          <Text style={styles.page}>{page + 3}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => { updateDisplay(page + 4) }}
        >
          <Text style={styles.page}>{page + 4}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => { updateDisplay(page + 1) }}
        >
          <Text style={styles.page}>{'>'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PageButtons;