import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {colors} from '~/constants';
import styles from './style';
import {useSelector} from "react-redux";

const Profile = ({press}) => {

  const {userDetails} = useSelector(store => store.auth);

  return (
    <View style={styles.profile}>
      <TouchableOpacity activeOpacity={0.8} onPress={press}>
        <View style={styles.profileBth}>
          <FontAwesomeIcon icon={faUserEdit} color={colors.white} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}> Olá, {userDetails.name.split(' ')[0]}</Text>
    </View>
  );
};

export default Profile;
