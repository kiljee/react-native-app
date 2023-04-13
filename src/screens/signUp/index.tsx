import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text, Image, View} from 'react-native';
import {ScreenWrapper, Header} from '../../layouts';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm, FieldValues} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';
import {GradientButton, Input} from '../../components';
import styles from './signUp.styles';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  email: yup.string().required('Email is required'),
  website: yup
    .string()
    .url('Invalid website URL')
    .required('Website is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const [image, setImage] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({resolver: yupResolver(schema)});
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    navigation.navigate('SignIn', {...data, image});
  };

  const pressCamera = async () => {
    const {assets} = await launchImageLibrary({mediaType: 'photo'});
    setImage(assets?.[0]?.uri);
  };

  return (
    <ScreenWrapper>
      <Header
        name={'Profile Creation'}
        description={
          'Use the form bellow to submit your portfolio. An email and password are required'
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
              resizeMode={'cover'}
            />
          ) : (
            <TouchableOpacity style={styles.tapAvatar} onPress={pressCamera}>
              <Text>press to open camera</Text>
            </TouchableOpacity>
          )}
        </View>
        <Input
          control={control}
          name="firstName"
          placeholder="First Name"
          errors={errors}
        />
        <Input
          control={control}
          name="email"
          placeholder="Email Adress"
          errors={errors}
        />
        <Input
          control={control}
          name="password"
          secureTextEntry
          placeholder="Enter your password"
          errors={errors}
        />
        <Input
          control={control}
          name="website"
          placeholder="Website"
          errors={errors}
        />
      </ScrollView>
      <GradientButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScreenWrapper>
  );
};

export default SignIn;
