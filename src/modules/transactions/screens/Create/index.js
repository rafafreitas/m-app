import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {colors} from '~/constants';
import {Input, Button, BasePage} from '~/components';

import styles from './style';
import TabChoice from "../../components/TabChoice";

const Create = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState(null);
  const [isValid, setIsValid] = useState({
    title: true,
    value: true,
    type: true
  });

  const hasDisabled = () =>
    title.length === 0 ||
    value.length === 0 ||
    !type ||
    Object.keys(isValid)
      .map(key => isValid[key])
      .includes(false);

  return (
    <BasePage
      title={'Dados da Transação'}
      action={
        <Button disabled={hasDisabled()} styleBtn={styles.btn}>
          Inserir
        </Button>
      }
    >
      <View style={styles.body}>
        <View>
          <TabChoice chosen={id => setType(id)}/>
        </View>
        { type && (
          <>
            <View>
              <Input
                baseColor={colors.grey}
                textColor={colors.dark}
                tintColor={colors.primary}
                lineWidth={2}
                letterOnly
                placeholder="Identificação no extrato"
                errorText="Identificação inválida"
                value={title}
                onChange={text => {
                  setTitle(text);
                }}
                valid={isValid.title}
              />
            </View>
            <View>
              <Input
                baseColor={colors.grey}
                textColor={colors.dark}
                tintColor={colors.primary}
                lineWidth={2}
                placeholder="Valor da transação"
                errorText="Valor inválido"
                value={value}
                onChange={text => {
                  setValue(text);
                  setIsValid({...isValid, value: true});
                }}
                valid={isValid.value}
              />
            </View>
          </>
        )}
      </View>
    </BasePage>
  );
};

export default Create;
