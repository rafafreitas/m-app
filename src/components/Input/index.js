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
    inputRef.current.setValue(value);

    if (mask) {
      const valueMask = MaskService.toMask(mask, value);
      setIsValid(MaskService.isValid(mask, valueMask));

      if (onChange) onChange(valueMask, isValid);
    } else if (onChange) onChange(value);
  };

  return (
    <View>
      <TextField
        ref={inputRef}
        prefix={prefix}
        labelTextStyle={{fontWeight: 'bold'}}
        fontSize={13}
        labelFontSize={14}
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
  labelFontSize: 14,
  fontSize: 18,
  prefix: null
};

export default Input;
