import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 21,
    marginVertical: 10,
    color: '#000',
    marginRight: 120
  },
  input: {
    backgroundColor: '#e6e6e6',
    width: '60%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 21,
    padding: 10,
    marginBottom: 15
  },
  btn: {
    width: '60%',
    backgroundColor: '#9a2af0',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#e6e6e6',
    letterSpacing: 1.4
  },
  pickerContainer: {
    width: '60%',
    marginBottom: 15
  },
  pickerItem: {
    fontSize: 21
  }
});
