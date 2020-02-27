import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  label: {
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 0,
    fontSize: 16
  },
  body: {
    flex: 1
  },
  btn: {
    marginBottom: 10
  }
});
