import React, {useState, useCallback} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {TRANSACTIONS_TYPES, codesHttp, messagesHttpError, colors} from '~/constants';
import {getTransactionsLimit} from '~/services/transactions';
import {formatAsCurrency} from '~/helpers';

import styles from './style';

const ListTransactions = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      list().finally(() => setLoading(false));
    }, [])
  );

  const list = async () => {
    setLoading(true);
    try {
      const {data} = await getTransactionsLimit(5);
      setItems(data);
    } catch (e) {
      const {status, data} = e.response;

      const msg =
        status !== codesHttp.INTERNAL_SERVER_ERROR ? data.result : messagesHttpError.DEFAULT;

      setError(msg);
    }
  };

  const List = () =>
    items.length !== 0 ? (
      items.map(elm => {
        const state = elm.type === TRANSACTIONS_TYPES.input ? 'positive' : 'negative';
        const icon = TRANSACTIONS_TYPES.input ? faArrowUp : faArrowDown;
        return (
          <View key={elm.id.toString()}>
            <View style={styles.line}>
              <View style={styles.desc}>
                <Text style={styles.label}>{elm.create_date}</Text>
              </View>
              <View style={styles.desc}>
                <Text style={styles.label}>{elm.title}</Text>
              </View>
              <View style={[styles.desc, styles.line]}>
                <Text style={[styles.amount, styles[state]]}>
                  R$
                  <Text style={[styles.amount, styles[state]]}>{` ${formatAsCurrency(
                    elm.value
                  )}`}</Text>
                </Text>
                <FontAwesomeIcon icon={icon} size={10} style={styles[state]} />
              </View>
            </View>
            <View style={styles.hr} />
          </View>
        );
      })
    ) : (
      <Text style={[styles.label]}>{error || 'Você ainda não possui transações'}</Text>
    );

  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <Text style={[styles.label, styles.bold]}>Últimas transações</Text>
      </View>
      {!loading ? <List /> : <ActivityIndicator color={colors.primary} size="large" />}
    </View>
  );
};

export default ListTransactions;
