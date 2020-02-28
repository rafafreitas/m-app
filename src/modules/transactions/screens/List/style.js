import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hr: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 0.5,
    opacity: 0.5,
    marginBottom: 15
  },
  desc: {
    marginBottom: 15
  },
  label: {
    fontSize: 15,
    color: colors.dark,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5
  },
  positive: {
    color: colors.success
  },
  negative: {
    color: colors.danger
  }
});
