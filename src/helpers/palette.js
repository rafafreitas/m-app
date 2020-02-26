import {colors} from '../constants';

const objColors = {
  primary: {color: colors.primary, inverse: colors.white},
  primaryDark: {color: colors.primaryDark, inverse: colors.white},
  secondary: {color: colors.secondary, inverse: colors.dark},
  success: {color: colors.success, inverse: colors.white},
  warning: {color: colors.warning, inverse: colors.white},
  danger: {color: colors.danger, inverse: colors.white},
  dark: {color: colors.dark, inverse: colors.white},
  grey: {color: colors.grey, inverse: colors.dark},
  white: {color: colors.white, inverse: colors.dark}
};

export const palette = callBack => {
  const list = {};
  Object.keys(objColors).forEach(key => {
    list[key] = callBack(objColors[key], key);
  });
  return list;
};

export const validState = [
  'primary',
  'primaryDark',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'black',
  'white',
  'whitePrimary',
  'grey'
];
