import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  body: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  children: {
    flex: 1,
    paddingBottom: 20
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
