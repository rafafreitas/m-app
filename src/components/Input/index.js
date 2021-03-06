import React, {useState, useEffect, useRef} from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {MaskService} from 'react-native-masked-text';
import {colors} from '~/constants';
import {onlyLetter} from '~/helpers';

const Input = props => {
  const {
    style,
    editable,
    placeholder,
    errorText,
    valid,
    prefix,
    letterOnly,
    mask,
    onChange,
    ...others
  } = props;

  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setShowError(!isValid);
    if (valid !== undefined) {
      setShowError(!valid);
    }
  }, [isValid, valid]);

  const onChangeText = text => {
    const value = letterOnly ? onlyLetter(text) : text;

    if (mask) {
      const valueMask = MaskService.toMask(mask, value);
      setIsValid(MaskService.isValid(mask, valueMask));

      inputRef.current.setValue(valueMask);

      if (onChange) onChange(valueMask, isValid);
      return;
    }
    inputRef.current.setValue(value);

    if (onChange) onChange(value);
  };

  return (
    <View>
      <TextField
        ref={inputRef}
        prefix={prefix}
        fontSize={15}
        labelFontSize={15}
        label={placeholder}
        style={[style]}
        editable={editable}
        onChangeText={onChangeText}
        errorColor={colors.danger}
        error={showError ? errorText : null}
        {...others}
      />
    </View>
  );
};

Input.defaultProps = {
  editable: true,
  placeholder: '',
  prefix: null
};

export default Input;
