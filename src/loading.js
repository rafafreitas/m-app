import React, { useEffect } from 'react';
import {View, Image, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import { colors } from "~/constants";

const Loading = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000)
  });

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/img/logo_primary.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <ActivityIndicator color={colors.white} size={'large'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo: {
    maxWidth: 380
  }
});

export default Loading;
