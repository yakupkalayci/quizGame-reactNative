import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 25,
    justifyContent: 'center'
  },
  radioItem: {
    flexDirection: 'row',
    marginBottom: 25
  },
  selectBox: {
    borderWidth: 1,
    borderColor: '#9a2af0',
    width: 20,
    height: 20,
    borderRadius: 20
  },
  selected: {
    backgroundColor: '#9a2af0',
    borderColor: 'black'
  },
  text: {
    marginLeft: 120,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
});
