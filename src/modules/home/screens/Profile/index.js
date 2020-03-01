import React from 'react';
import {View, StatusBar, Text, FlatList} from 'react-native';
import {Button, NavBar} from '~/components';
import styles from './style';

const Profile = ({navigation}) => {
  const data = [
    {id: '1', title: 'Editar perfil', func: () => navigation.navigate('EditProfile')},
    {id: '2', title: 'Alterar senha', func: () => navigation.navigate('ChangePassword')},
    {id: '3', title: 'Desativar conta', func: () => navigation.navigate('DeleteAccount')},
    {id: '4', title: 'Sair', func: () => {}}
  ];

  const Item = ({title, func}) => {
    return (
      <View style={styles.buttonWrapper}>
        <Button type="outline" onPress={func}>
          {title}
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavBar state="white" icon="primary" press={() => navigation.pop()} />
      <View style={styles.header}>
        <Text style={[styles.title, styles.bold]}>Rafael Freitas</Text>
        <Text style={styles.subtitle}>
          Membro desde: <Text style={[styles.subtitle, styles.bold]}>22/02/2020</Text>
        </Text>
        <Text style={styles.subtitle}>
          Última atualização: <Text style={[styles.subtitle, styles.bold]}>22/02/2020</Text>
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item title={item.title} func={item.func} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Profile;
