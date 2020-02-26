import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: colors.dark,
    shadowOpacity: 0.3,
    shadowRadius: 7,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
});
