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
      {/* Para não levar mais tempo na entrega do projeto as médias e o resumo mensal serão apenas de exemplo */}
      <View style={styles.average}>
        <Item title="Média receita" value="2.230,00" />
        <Item title="Média gastos" state="negative" value="1.230,00" />
      </View>
      <Text style={styles.label}>Resumo mensal</Text>
      <View style={styles.average}>
        <Item title="Janeiro" value="2.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
        <Item title="Fevereiro" value="2.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
        <Item title="Março" value="2.230,00">
          <Text style={[styles.label, styles.negative]}>R$ 1.234,00</Text>
        </Item>
      </View>
    </View>
  );
};

export default Average;
