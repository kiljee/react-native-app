import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';

interface HeaderType {
  name: string;
  description: string;
}

const Header: React.FC<HeaderType> = ({name, description}: HeaderType) => {
  return (
    <View>
      <Text style={styles.headerName}>{name}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </View>
  );
};

export default Header;
