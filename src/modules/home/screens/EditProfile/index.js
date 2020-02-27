import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {colors, MAX_PASS_LENGTH} from '~/constants';
import {Input, Button, BasePage} from '~/components';
import {emailIsValid} from '~/helpers';

import styles from './style';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    pass: true,
    cpf: true
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
      title={'Editar Perfil'}
      action={
        <Button disabled={hasDisabled()} styleBtn={styles.btn}>
          Atualiza dados
        </Button>
      }
    >
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.label}>Matenha seus dados sempre atualizados.</Text>
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            letterOnly
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
            placeholder="Cpf"
            errorText="CPF inválido"
            value={email}
            valid={isValid.cpf}
          />
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            placeholder="Data de nascimento"
            errorText="Data inválida"
            value={email}
            valid={isValid.birth}
          />
        </View>
        <View>
          <Input
            baseColor={colors.grey}
            textColor={colors.dark}
            tintColor={colors.primary}
            lineWidth={2}
            placeholder="CEP"
            errorText="Data inválida"
            value={email}
            valid={isValid.birth}
          />
        </View>
      </View>
    </BasePage>
  );
};

export default EditProfile;
