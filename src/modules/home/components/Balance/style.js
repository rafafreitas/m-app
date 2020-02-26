import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: 5
  },
  amountPrefix: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 14,
    color: colors.dark
  },
  amountBalance: {
    fontSize: 37,
    fontWeight: 'bold'
  },
  neutral: {
    color: colors.dark
  },
  positive: {
    color: colors.success
  },
  negative: {
    color: colors.danger
  },
  extract: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold'
  }
});
