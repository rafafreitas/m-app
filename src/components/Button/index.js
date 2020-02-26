import React from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import {validState} from '../../helpers';
import styles from './style';

const Button = ({state, type, children, disabled, loading, styleBtn, ...others}) => {
  const typeStyle = disabled ? styles[state][type].disabled : styles[state][type].enabled;

  return (
    <TouchableOpacity
      style={{...styles.button, ...typeStyle, ...styleBtn}}
      disabled={disabled || loading}
      {...others}
    >
      {!loading ? (
        <Text style={{...typeStyle.textStyle}}>{children}</Text>
      ) : (
        <ActivityIndicator color={typeStyle.loading} size="large" />
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  state: PropTypes.oneOf(validState),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['block', 'outline', 'link'])
};

Button.defaultProps = {
  state: 'primary',
  type: 'block',
  styleBtn: {},
  disabled: false
};

export default Button;
