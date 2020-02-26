import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    maxHeight: 120,
    marginBottom: 20
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13
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
  buttonWrapper: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  btn: {
    marginBottom: 10
  }
});
