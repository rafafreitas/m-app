import { StyleSheet } from 'react-native';
import { colors } from '~/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    paddingTop: 15,
    marginTop: 15,
    height: 46
  },
  tabWrapper: {
    flex: 1,
    borderBottomWidth: 2
  },
  titleWrapper: {
    alignItems: 'center'
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
