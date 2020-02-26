import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentDollar} from '@fortawesome/free-solid-svg-icons';
import styles from './style';
import {colors} from '~/constants';
import {Card} from '../../../../components';

const Products = () => {
  return (
    <Card>
      <View style={styles.title}>
        <FontAwesomeIcon icon={faCommentDollar} size={40} color={colors.primary} />
        <Text bold style={styles.label}>
          {' '}
          Precisando de grana?
        </Text>
      </View>
      <Text style={[styles.amountPrefix, styles.positive]}>
        R$
        <Text style={[styles.amountLoans, styles.positive]}> 3.500,00</Text>
      </Text>
      <Text bold style={styles.extract}>
        De crédito pré-aprovado!
      </Text>
      <Text bold style={styles.extract}>
        Saiba mais
      </Text>
    </Card>
  );
};

export default Products;
