import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  logo: {
    marginTop: 50
  },
  label: {
    color: colors.dark,
    textAlign: 'center',
    marginTop: 30,
    fontSize: 22
  },
  body: {
    flex: 1
  }
});
