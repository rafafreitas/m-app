import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Balance = () => {
  const [stateBalance, setStateBalance] = useState('positive');

  return (
    <View>
      <Text style={styles.label}>
        Confira sua carteira
      </Text>
      <Text style={[styles.amountPrefix, styles[stateBalance]]}>
        R$
        <Text style={[styles.amountBalance, styles[stateBalance]]}> 20.230,00</Text>
      </Text>
      <Text style={styles.extract}>
        + extrato detalhado
      </Text>
    </View>
  );
};

export default Balance;
