import React from 'react';
import {ScrollView, View, SafeAreaView, StatusBar} from 'react-native';
import {Collapse, Button, Card} from '~/components';
import {AverageResume, Balance, Products, Profile, ListTransactions} from '../../components';
import styles from './style';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.content}>
        <Profile press={() => navigation.navigate('Profile')} />
        <Card>
          <Balance />
          <View style={styles.hr} />
          <AverageResume />
          <View style={styles.hr} />
          <View style={styles.buttonWrapper}>
            <Button type="outline" onPress={() => navigation.navigate('CreateTransaction')}>
              Inserir movimentação
            </Button>
          </View>
          <Collapse>
            <ListTransactions />
          </Collapse>
        </Card>
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
