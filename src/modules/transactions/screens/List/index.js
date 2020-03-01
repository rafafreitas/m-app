import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';
import {BasePage, Tabs} from '~/components';

const List = () => {
  const [activeTab, setActiveTab] = useState(2);

  const tabs = [{id: 1, title: 'Anteriores'}, {id: 2, title: 'Hoje'}, {id: 3, title: 'Futuras'}];

  const data = [
    {id: '5', date: '26/02/2020', desc: 'Netflix', value: 34.9, input: false},
    {id: '4', date: '26/02/2020', desc: 'Internet', value: 34.9, input: false},
    {id: '3', date: '25/02/2020', desc: 'Video Game', value: 34.9, input: true},
    {id: '2', date: '24/02/2020', desc: 'Aluguel', value: 34.9, input: false},
    {id: '1', date: '24/02/2020', desc: 'Salário', value: 34.9, input: true}
  ];

  const Item = ({date, desc, value, input}) => {
    const state = input ? 'positive' : 'negative';
    const icon = input ? faArrowUp : faArrowDown;
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
              <Text style={[styles.amount, styles[state]]}>{` ${value}`}</Text>
            </Text>
            <FontAwesomeIcon icon={icon} size={10} style={styles[state]} />
          </View>
        </View>
        <View style={styles.hr} />
      </View>
    );
  };

  return (
    <BasePage title="Listagem de transações">
      <Tabs onTabPress={index => setActiveTab(index)} activeTab={activeTab} tabs={tabs} />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item date={item.date} desc={item.desc} value={item.value} input={item.input} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </BasePage>
  );
};

export default List;
