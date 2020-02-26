import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {colors, MAX_PASS_LENGTH} from '~/constants';
import {Input, Button, BasePage} from '~/components';
import {emailIsValid} from '~/helpers';

import styles from './style';

const logo = require('~/assets/logo/flag_primary_w.png');

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    pass: true
  });

  const changePass = text => {
    if (password.length <= MAX_PASS_LENGTH) setPassword(text);
  };

  const hasDisabled = () =>
    name.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    Object.keys(isValid)
      .map(key => isValid[key])
      .includes(false);

  return (
    <BasePage
      action={
        <Button disabled={hasDisabled()} styleBtn={styles.btn}>
          Finalizar cadastro
        </Button>
      }
    >
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
          <Text style={styles.label}>Com nossa conta, seus dados ficam mais protegidos </Text>
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            letterOnly
            labelFontSize={16}
            placeholder="Nome"
            errorText="Nome inválido"
            value={name}
            onChange={text => {
              setName(text);
            }}
            valid={isValid.name}
          />
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            labelFontSize={16}
            placeholder="E-mail"
            errorText="Email inválido"
            value={email}
            onChange={text => {
              setEmail(text);
              setIsValid({...isValid, email: true});
            }}
            onBlur={() => setIsValid({...isValid, email: emailIsValid(email)})}
            valid={isValid.email}
          />
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            labelFontSize={16}
            secureTextEntry
            maxLength={8}
            keyboardType="number-pad"
            placeholder="Senha"
            errorText="Senha incorreta"
            value={password}
            onChange={changePass}
            valid={isValid.pass}
          />
        </View>
      </View>
    </BasePage>
  );
};

export default SignUp;
