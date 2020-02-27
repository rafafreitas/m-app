import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {colors} from '~/constants';
import styles from './style';

const Profile = ({press}) => {
  return (
    <View style={styles.profile}>
      <TouchableOpacity activeOpacity={0.8} onPress={press}>
        <View style={styles.profileBth}>
          <FontAwesomeIcon icon={faUserEdit} color={colors.white} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}> Olá, Rafael</Text>
    </View>
  );
};

export default Profile;
