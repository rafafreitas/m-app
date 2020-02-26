import {StyleSheet} from 'react-native';
import {alphas, colors} from '../../../../constants';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: `${colors.dark}${alphas.a90}`
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 360,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250
  },
  logo: {
    maxHeight: 130,
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
    marginTop: 20,
    fontSize: 16
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
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
