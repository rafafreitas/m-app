import React, {useState} from 'react';
import {View, Text, Image, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {setSession} from '~/store/modules/auth/actions';
import {colors, MAX_PASS_LENGTH, codesHttp, messagesHttpError} from '~/constants';
import {Input, Button, BasePage} from '~/components';
import {insertClient} from '~/services/auth';
import {emailIsValid} from '~/helpers';

import styles from './style';

const logo = require('~/assets/logo/flag_primary_w.png');

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    name: true,
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

  const insertUser = async () => {
    setLoading(true);
    try {
      const {data, headers} = await insertClient({
        name,
        email,
        pass: password
      });

      dispatch(setSession(headers.authorization, data));
      showMessage({
        message: 'Bem vindo!',
        description: 'Bem vindo ao seu controle de finanças favorito!',
        type: 'success'
      });

      navigation.navigate('Home');
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
    name.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    Object.keys(isValid)
      .map(key => isValid[key])
      .includes(false);

  return (
    <BasePage
      title="Cadastro"
      action={
        <Button
          onPress={insertUser}
          disabled={hasDisabled()}
          styleBtn={styles.btn}
          loading={loading}
        >
          Finalizar cadastro
        </Button>
      }
    >
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
          <Text style={styles.label}>Crie uma conta para usar nossos serviços.</Text>
          <Text style={styles.label}>Precisamos de poucas informações</Text>
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
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
