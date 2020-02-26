import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    marginBottom: 30
  },
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
    marginTop: 5,
    marginBottom: 10,
    color: colors.dark
  },
  amountLoans: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  positive: {
    color: colors.success
  },
  motive: {
    color: colors.primary,
    fontWeight: 'bold'
  }
});
