import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.transparent,
    paddingLeft: 20
  },
  nav: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 100,
    marginTop: -7,
    paddingLeft: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
