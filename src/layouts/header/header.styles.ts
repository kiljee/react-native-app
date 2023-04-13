import {StyleSheet, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const styles = StyleSheet.create({
  headerName: {
    justifyContent: 'flex-end',
    marginBottom: 8,
    marginTop: DeviceInfo.hasNotch() ? 30 : StatusBar.currentHeight,
    fontSize: 30,
    color: '#555559',
    fontWeight: '700',
  },
  headerDescription: {
    fontSize: 16,
    color: '#9b9a9b',
    fontWeight: '500',
  },
});

export default styles;
