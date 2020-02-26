import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Average = () => {
  const Item = ({title, value, state = 'positive', children}) => (
    <View>
      <Text style={styles.label}>{title}</Text>
      <Text style={[styles.label, styles[state]]}>R$ {value}</Text>
      {children}
    </View>
  );

  return (
    <View style={styles.averageResume}>
      <View style={styles.average}>
        <Item title="Média receita" value="12.230,00" />
        <Item title="Média gastos" state="negative" value="1.230,00" />
      </View>
      <Text style={styles.label}>Resumo mensal</Text>
      <View style={styles.average}>
        <Item title="Atual" value="12.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
        <Item title="Anterior" value="12.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
        <Item title="Há dois meses" value="12.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
      </View>
    </View>
  );
};

export default Average;
