import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 0,
    paddingTop: 0
  },
  expanded: {
    height: null,
    paddingTop: 32
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  action: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 32,
    backgroundColor: colors.background,
    width: '100%'
  },
  btn: {
    backgroundColor: colors.primary,
    height: 36,
    width: 36,
    borderRadius: 100,
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
