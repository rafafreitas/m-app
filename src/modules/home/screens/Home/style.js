import {StyleSheet} from 'react-native';
import {colors} from '~/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 50
  },
  hr: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 0.5,
    opacity: 0.5,
    marginTop: 15,
    marginBottom: 15
  },
  buttonWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
    paddingBottom: 10
  }
});
