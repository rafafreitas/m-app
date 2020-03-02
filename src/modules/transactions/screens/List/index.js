import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {showMessage} from 'react-native-flash-message';
import styles from './style';
import {BasePage, Tabs} from '~/components';
import {getTransactionsDetails} from '~/services/transactions';
import {TRANSACTIONS_TYPES, codesHttp, messagesHttpError, colors} from '~/constants';
import {formatAsCurrency} from '~/helpers';

const List = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);

  const tabs = [{id: 1, title: 'Anteriores'}, {id: 2, title: 'Hoje'}, {id: 3, title: 'Futuras'}];

  useEffect(() => {
    list().finally(() => setLoading(false));
  }, []);

  const list = async () => {
    setLoading(true);
    try {
      const {data} = await getTransactionsDetails();
      setItems([data.previous, data.today, []]);
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

  const Item = ({date, desc, value, input}) => {
    const state = input === TRANSACTIONS_TYPES.input ? 'positive' : 'negative';
    const icon = input === TRANSACTIONS_TYPES.input ? faArrowUp : faArrowDown;

    return (
      <View>
        <View style={styles.line}>
          <View style={styles.desc}>
            <Text style={styles.label}>{date}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.label}>{desc}</Text>
          </View>
          <View style={[styles.desc, styles.line]}>
            <Text style={[styles.amount, styles[state]]}>
              R$
              <Text style={[styles.amount, styles[state]]}>{` ${formatAsCurrency(value)}`}</Text>
            </Text>
            <FontAwesomeIcon icon={icon} size={10} style={styles[state]} />
          </View>
        </View>
        <View style={styles.hr} />
      </View>
    );
  };

  const Empty = () => (
    <>
      {activeTab !== 3 ? (
        <Text style={styles.label}>Nenhuma transação para este período</Text>
      ) : (
        <Text style={styles.label}>Esta funcionalidade ainda não está habilitada</Text>
      )}
    </>
  );

  return (
    <BasePage title="Listagem de transações">
      <Tabs onTabPress={index => setActiveTab(index)} activeTab={activeTab} tabs={tabs} />
      <View style={styles.container}>
        {!loading ? (
          <FlatList
            data={items[activeTab - 1]}
            ListEmptyComponent={Empty}
            renderItem={({item}) => (
              <Item
                date={item.create_date}
                desc={item.title}
                value={item.value}
                input={item.type}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <ActivityIndicator color={colors.primary} size="large" />
        )}
      </View>
    </BasePage>
  );
};

export default List;
