import React from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import {ScreenWrapper, Header} from '../../layouts';
import styles from './signIn.styles';
import {GradientButton} from '../../components';

const SignIn = ({route}) => {
  const {firstName, email, website, image} = route.params;

  const handlePress = () => {
    Linking.openURL(website);
  };

  return (
    <ScreenWrapper>
      <Header
        name={`Hello, ${firstName}`}
        description={
          'You super-awesome portfolio has been successfully submited! The preview below is what the community will see!'
        }
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
          resizeMode={'cover'}
        />
        <Text style={styles.text}>{firstName}</Text>
        <Text style={styles.text}>{email}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{color: 'blue'}}>{website}</Text>
        </TouchableOpacity>
      </View>
      <GradientButton title={'Sign In'} />
    </ScreenWrapper>
  );
};

export default SignIn;
