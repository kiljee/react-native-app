import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

const GradientButton = ({title, onPress, disabled}: Props) => {
  const colors = ['#fe4518', '#fe2548'];

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={colors}
        start={{x: 0.0, y: 0}}
        end={{x: 0.5, y: 1.0}}
        style={[styles.button, disabled && styles.disabled]}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GradientButton;
