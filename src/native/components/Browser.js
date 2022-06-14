import { Linking, Alert } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

const openBrowser = async (url) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'
        }
      });
    } else {
      Linking.openURL(url);
    }
  } catch (err) {
    console.log(err.message);
    Alert.alert('Error loading game data.\nLooks like the game isn\'t the only thing that\s bad!');
  }
}

export default openBrowser;
