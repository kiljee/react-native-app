import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  image: {width: 150, height: 200, borderRadius: 10},
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tapAvatar: {
    height: 200,
    width: 150,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    padding: 30,
    color: '#848585',
    fontSize: 16,
  },
});

export default styles;
