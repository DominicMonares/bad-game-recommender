import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  coverContainer: {
    width: 264,
    height: 352,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bottomLeft: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  bottomRight: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  topLeft: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  topRight: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3
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
