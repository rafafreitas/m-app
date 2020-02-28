import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from "@react-navigation/native";

const Balance = () => {
  const [stateBalance, setStateBalance] = useState('positive');
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.label}>Confira sua carteira</Text>
      <Text style={[styles.amountPrefix, styles[stateBalance]]}>
        R$
        <Text style={[styles.amountBalance, styles[stateBalance]]}> 20.230,00</Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ListTransaction')}>
        <Text style={styles.extract}>+ extrato detalhado</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Balance;
