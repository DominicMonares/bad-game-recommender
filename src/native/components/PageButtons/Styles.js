import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingContainer: {
    width: 0,
    height: 0
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40
  },
  button: {
    width: 40,
  },
  page: {
    fontFamily: 'Share Tech',
    fontSize: 25,
    textAlign: 'center'
  },
  currentButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: 40,
  },
  currentPage: {
    fontFamily: 'Share Tech',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  }
})
