import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    justifyContent: 'flex-end',
    padding: 20,
    height: 250,
  },
  title: {
    color: colors.white,
    fontSize: 23,
    marginBottom: 5
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold'
  },
  list: {
    marginTop: 45,
  },
  buttonWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
    paddingBottom: 10
  }
});
