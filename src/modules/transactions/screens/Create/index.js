import React, {useState} from 'react';
import {View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Input, Button, BasePage} from '~/components';
import {formatCurrencyToFloat} from '~/helpers';
import {colors, codesHttp, messagesHttpError, masks} from '~/constants';
import {setTransaction} from '~/services/transactions';
import TabChoice from '../../components/TabChoice';
import styles from './style';

const Create = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    title: true,
    value: true,
    type: true
  });

  const submit = async () => {
    setLoading(true);
    try {
      await setTransaction({
        title,
        value,
        type
      });

      showMessage({
        message: 'Sucesso!',
        description: 'Transação inserida',
        type: 'success'
      });

      navigation.pop();
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
    title.length === 0 ||
    value.length === 0 ||
    value === 0 ||
    !type ||
    Object.keys(isValid)
      .map(key => isValid[key])
      .includes(false);

  return (
    <BasePage
      title="Dados da Transação"
      action={
        <Button loading={loading} disabled={hasDisabled()} styleBtn={styles.btn} onPress={submit}>
          Inserir
        </Button>
      }
    >
      <View style={styles.body}>
        <View>
          <TabChoice chosen={id => setType(id)} />
        </View>
        {type && (
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
                mask={masks.money.type}
                onChange={text => {
                  setValue(formatCurrencyToFloat(text.replace('R$', '')));
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
