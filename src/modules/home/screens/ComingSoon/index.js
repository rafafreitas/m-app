import React from 'react';
import {View, Text, Image} from 'react-native';
import { BasePage, Button} from '~/components';

import styles from './style';

const logo = require('~/assets/logo/flag_primary_w.png');

const ComingSoon = ({navigation}) => {

  return (
    <BasePage action={
      <Button
        onPress={() => navigation.pop()}
      >
        Voltar
      </Button>
    }>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
          <Text style={styles.label}>Em breve esta funcionalidade estará disponível para você!</Text>
        </View>
      </View>
    </BasePage>
  );
};

export default ComingSoon;
