import React, {useState} from 'react';
import {View, Text, Keyboard, Image, ImageBackground} from 'react-native';
import {colors, MAX_PASS_LENGTH} from '~/constants';
import {Input, Button} from '~/components';
import {emailIsValid} from '~/helpers';
import styles from './style';

const back = require('~/assets/img/back.jpg');
const logo = require('~/assets/logo/logo_primary.png');

const Login = ({navigation}) => {
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

  const hasDisabled = () =>
    email.length === 0 ||
    password.length === 0 ||
    Object.keys(isValid)
      .map(key => isValid[key])
      .includes(false);

  return (
    <ImageBackground source={back} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
          </View>
          <View>
            <Text style={styles.title}>Nós cuidamos de tudo pra você.</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.inputs}>
            <Input
              baseColor={colors.white}
              textColor={colors.white}
              tintColor={colors.white}
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
          <View style={styles.inputs}>
            <Input
              baseColor={colors.white}
              textColor={colors.white}
              tintColor={colors.white}
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
          <View style={styles.buttonWrapper}>
            <Button
              loading={loading}
              state="primaryDark"
              disabled={hasDisabled()}
              styleBtn={styles.btn}
              onPress={() => navigation.navigate('Home')}
            >
              Entrar
            </Button>
            <Button state="white" type="outline" onPress={() => navigation.navigate('SignUp')}>
              Cadastre-se
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
