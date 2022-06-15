import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  blContainer: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  brContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  tlContainer: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  trContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  cover: {
    resizeMode: 'contain',
    width: 264,
    height: 352,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    borderRadius: 10
  }
});
