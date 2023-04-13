import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    height: 65,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
    color: '#333',
  },
  error: {
    color: 'red',
  },
});

export default styles;
