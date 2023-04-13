import React, {ReactElement} from 'react';
import {View} from 'react-native';
import styles from './screenWrapper.styles';

interface ScreenWrapperType {
  children: ReactElement | ReactElement[];
}
const ScreenWrapper: React.FC<ScreenWrapperType> = ({
  children,
}: ScreenWrapperType) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMargin}>{children}</View>
    </View>
  );
};

export default ScreenWrapper;
