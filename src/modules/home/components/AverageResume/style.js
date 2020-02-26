import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  averageResume: {
    marginTop: 10
  },
  label: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: 5
  },
  bold: {
    fontWeight: 'bold'
  },
  positive: {
    color: colors.success
  },
  negative: {
    color: colors.danger
  },
  average: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 10
  },
  resume: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 10
  }
});
