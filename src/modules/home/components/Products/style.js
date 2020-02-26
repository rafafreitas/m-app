import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  title: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 14,
    color: colors.dark,
    marginLeft: 5,
    marginTop: 10
  },
  amountPrefix: {
    marginTop: 10,
    marginBottom: 15,
    color: colors.dark
  },
  amountLoans: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  positive: {
    color: colors.success
  },
  extract: {
    color: colors.primary,
    fontWeight: 'bold'
  }
});
