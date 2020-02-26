import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.transparent,
    marginTop: 25
  },
  profileBth: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 100,
    marginTop: -7,
    paddingLeft: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary
  }
});
