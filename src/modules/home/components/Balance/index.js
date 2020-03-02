import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styles from './style';
import {codesHttp, messagesHttpError, colors} from '~/constants';
import {getBalance} from '~/services/transactions';
import {formatAsCurrency} from '~/helpers';

const Balance = () => {
  const [stateBalance, setStateBalance] = useState('neutral');
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getBalanceValue().finally(() => setLoading(false));
    }, [])
  );

  const getBalanceValue = async () => {
    setLoading(true);
    try {
      const {data} = await getBalance();
      setBalance(data.balance);
      setStateBalance(data.balance < 0 ? 'negative' : 'positive');
    } catch (e) {
      const {status, data} = e.response;

      const msg =
        status !== codesHttp.INTERNAL_SERVER_ERROR ? data.result : messagesHttpError.DEFAULT;

      showMessage({
        message: 'Atenção!',
        description: msg,
        type: 'warning'
      });
    }
  };

  return (
    <View>
      <Text style={styles.label}>Confira sua carteira</Text>
      {!loading ? (
        <Text style={[styles.amountPrefix, styles[stateBalance]]}>
          R$
          <Text style={[styles.amountBalance, styles[stateBalance]]}>
            {' '}
            {balance ? formatAsCurrency(balance) : '----'}
          </Text>
        </Text>
      ) : (
        <ActivityIndicator color={colors.primary} size="large" />
      )}
      <TouchableOpacity onPress={() => navigation.navigate('ListTransaction')}>
        <Text style={styles.extract}>+ extrato detalhado</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Balance;
