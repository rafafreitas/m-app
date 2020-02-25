import React, { useState } from 'react';
import { View, Text, Keyboard, Image } from 'react-native';
import { colors, MAX_PASS_LENGTH } from "~/constants";
import Input from "~/components/Input";
import { emailIsValid } from '~/helpers';

import styles from "./style";
import Button from "~/components/Button";

const login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    email: true,
    pass: true
  });

  const changePass = text => {
    if (password.length <= MAX_PASS_LENGTH) {
      setPassword(text);
      if (text.length === MAX_PASS_LENGTH) Keyboard.dismiss();
    }
  };

  const hasDisabled = () => ((email.length === 0 || password.length === 0 || !isValid.email || !isValid.pass))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.logo}
            source={require('~/assets/img/logo_primary.png')}
            resizeMode="contain"/>
        </View>
        <View>
          <Text style={styles.title}>Lorem ipsum dolor sit amet, onsectetur adipis </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>Informe seus dados de acesso!</Text>
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            labelFontSize={16}
            placeholder="E-mail"
            errorText={`Email inválido`}
            value={email}
            onChange={(text) => {
              setEmail(text);
              setIsValid({ ...isValid, email: true})
            }}
            onBlur={() => setIsValid({ ...isValid, email: emailIsValid(email) })}
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
            errorText={`Senha incorreta`}
            value={password}
            onChange={changePass}
            valid={isValid.pass}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button loading={loading} state={'primaryDark'} disabled={hasDisabled()} styleBtn={styles.btn}>
            Entrar
          </Button>
          <Button state={'primaryDark'} type={'outline'}>
            Cadastre-se
          </Button>
        </View>
      </View>

    </View>
  )
};

export default login;
