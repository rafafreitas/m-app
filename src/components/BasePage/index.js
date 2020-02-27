import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavBar from '../NavBar';

import style from './style';

const BasePage = props => {
  const {children, action, title} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" />
      <NavBar
        back="background"
        press={() => navigation.pop()}
        customStyle={{
          paddingTop: 20
        }}
      />
      <View style={style.body}>
        <Text style={style.title}>{title}</Text>
        <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
          <View style={style.children}>{children}</View>
        </ScrollView>
        <View style={style.action}>{action}</View>
      </View>
    </SafeAreaView>
  );
};

export default BasePage;
