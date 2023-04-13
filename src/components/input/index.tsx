import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import styles from './input.styles';

interface Props {
  control: any;
  name: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  errors?: any;
}

const Input = ({
  control,
  name,
  secureTextEntry,
  placeholder,
  errors,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {borderColor: errors?.[name] ? 'red' : 'gray'},
            ]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor="#898888"
          />
        )}
        rules={{required: true}}
        defaultValue=""
      />
      {errors?.[name] && <Text style={{ color: 'red'}}>{errors?.[name].message}</Text>}
    </View>
  );
};

export default Input;
