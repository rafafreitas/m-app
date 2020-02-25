import React, { useState, useEffect } from 'react';

import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { MaskService } from 'react-native-masked-text';
import {colors} from "../../constants";

const Input = (props) => {

  const {
    style,
    editable,
    placeholder,
    errorText,
    valid,
    prefix,
    fontSize,
    labelFontSize,
    affixTextStyle,
    type,
    onChange,
    ...others
  } = props;

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(!isValid);
    if (valid !== undefined) {
      setShowError(!valid)
    }
  }, [isValid, valid]);

  const onChangeText = text => {

    if (type) {

      const value = MaskService.toMask(type, text);
      const isValid = MaskService.isValid(type, value);

      setValue(value);
      setIsValid(isValid);

      if (onChange) onChange(value, isValid);

    } else {
      setValue(text);

      if (onChange) onChange(text);
    }
  };

  return (
    <View>
      <TextField
        prefix={prefix}
        labelTextStyle={{ fontWeight: 'bold'}}
        fontSize={13}
        labelFontSize={14}
        value={value}
        label={placeholder}
        style={[style]}
        editable={editable}
        onChangeText={onChangeText}
        errorColor={colors.danger}
        error={showError ? errorText : null}
        {...others}
        onChange={null}
      />
    </View>
  );
}

Input.defaultProps = {
  editable: true,
  placeholder: '',
  labelFontSize: 14,
  fontSize: 18,
  prefix: null,
};

export default Input;
