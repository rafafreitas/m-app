import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';
import style from './style';

const BasePage = props => {
  const {children, action} = props;
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.body}>
        <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
          <View style={style.children}>{children}</View>
        </ScrollView>
        <View style={style.action}>{action}</View>
      </View>
    </SafeAreaView>
  );
};

export default BasePage;
