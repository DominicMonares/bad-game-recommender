import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

import styles from './Styles';

const LoadingWheel = (props) => {
  const visible = props.visible;
  const toggle = props.toggle;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => toggle(!visible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#5b49e3" />
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default LoadingWheel;
