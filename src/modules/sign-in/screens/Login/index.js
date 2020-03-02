import React, {useState} from 'react';
import {View, Text, Keyboard, Image, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {colors, MAX_PASS_LENGTH, codesHttp, messagesHttpError} from '~/constants';
import {Input, Button} from '~/components';
import {emailIsValid} from '~/helpers';
import {authUser} from '~/services/auth';
import {setSession} from '~/store/modules/auth/actions';
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

  const dispatch = useDispatch();

  const changePass = text => {
    if (password.length <= MAX_PASS_LENGTH) {
      setPassword(text);
      if (text.length === MAX_PASS_LENGTH) Keyboard.dismiss();
    }
  };

  const login = async () => {
    setLoading(true);
    try {
      const {data, headers} = await authUser({
        email,
        pass: password
      });

      dispatch(setSession(headers.authorization, data));
    } catch (e) {
      const {status, data} = e.response;

      const msg =
        status !== codesHttp.INTERNAL_SERVER_ERROR ? data.result : messagesHttpError.DEFAULT;

      showMessage({
        message: 'Atenção!',
        description: msg,
        type: 'warning'
      });
    } finally {
      setLoading(false);
    }
  };

  const hasDisabled = () =>
    email.length === 0 ||
    password.length !== MAX_PASS_LENGTH ||
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
              secureTextEntry
              maxLength={MAX_PASS_LENGTH}
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
              onPress={login}
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
