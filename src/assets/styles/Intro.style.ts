import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  text: {
    fontSize: 17,
    marginVertical: 10,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 83
  },
  input: {
    backgroundColor: '#e6e6e6',
    width: '60%',
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 10,
    fontSize: 21,
    padding: 10,
    marginBottom: 15
  },
  pickerContainer: {
    width: '60%',
    marginBottom: 15
  }
});
