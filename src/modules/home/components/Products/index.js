import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentDollar, faCarCrash} from '@fortawesome/free-solid-svg-icons';
import styles from './style';
import {colors} from '~/constants';
import {Card} from '../../../../components';

const Products = () => {
  const Product = ({icon, title, value, motive}) => (
    <>
      <View style={styles.title}>
        <FontAwesomeIcon icon={icon} size={40} color={colors.primary} />
        <Text bold style={styles.label}>
          {` ${title}`}
        </Text>
      </View>
      <Text style={[styles.amountPrefix, styles.positive]}>
        R$
        <Text style={[styles.amountLoans, styles.positive]}>{` ${value}`}</Text>
      </Text>
      <Text bold style={styles.motive}>
        {motive}
      </Text>
      <Text bold style={styles.motive}>
        Saiba mais
      </Text>
    </>
  );

  return (
    <>
      <Card>
        <Product
          icon={faCommentDollar}
          title="Precisando de grana?"
          value="3.500,00"
          motive="De crédito pré-aprovado!"
        />
      </Card>
      <Card>
        <Product
          icon={faCarCrash}
          title="Seguro auto?"
          value="79,99"
          motive="Com franquia reduzida!"
        />
      </Card>
    </>
  );
};

export default Products;
