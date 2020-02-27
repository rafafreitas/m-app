import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  label: {
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 0,
    fontSize: 16
  },
  body: {
    flex: 1,
    marginTop: 20
  },
  btn: {
    marginBottom: 10
  }
});
