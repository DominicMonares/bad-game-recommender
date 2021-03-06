import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { updateGames, updatePage } from '../../../shared/actions';

import LoadingWheel from '../LoadingWheel/LoadingWheel';
import styles from './Styles';

import getGameData from '../../../shared/services/gameData';

const PageButtons = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const page = useSelector(state => state.page);
  const scrollRef = props.scrollRef;
  const dispatch = useDispatch();

  const updateDisplay = async (newPage) => {
    setModalVisible(true);
    dispatch(updateGames(await getGameData(newPage)));
    setModalVisible(false);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
    dispatch(updatePage(newPage));
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
          onPress={async () => updateDisplay(page + 1)}
        >
          <Text style={styles.page}>{page + 1}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => updateDisplay(page + 2)}
        >
          <Text style={styles.page}>{page + 2}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => updateDisplay(page + 3)}
        >
          <Text style={styles.page}>{page + 3}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => updateDisplay(page + 4)}
          testID="page_5"
        >
          <Text style={styles.page}>{page + 4}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async () => updateDisplay(page + 1)}
        >
          <Text style={styles.page}>{'>'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PageButtons;
