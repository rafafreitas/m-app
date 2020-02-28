import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  type: {
    textAlign: 'center',
    marginBottom: 10
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tabItem: {
    width: 160,
    paddingHorizontal: 5
  },
  tabContent: {
    padding: 10
  },
  block: {
    borderColor: colors.transparent,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.primary
  },
  outline: {
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.transparent
  },
  labelActive: {
    textAlign: 'center',
    color: colors.white
  },
  labelOutline: {
    textAlign: 'center',
    color: colors.primary
  }
});
