import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {colors} from '~/constants';
import styles from './style';

const { height } = Dimensions.get('window');

const NavBar = ({press, state = 'primary', icon = 'white', back = 'primary'}) => {
  return (
    <View style={[styles.container, {backgroundColor: colors[back], paddingTop: height / 15}]}>
      <TouchableOpacity activeOpacity={0.8} onPress={press} style={[styles.nav, {backgroundColor: colors[state]}]}>
        <FontAwesomeIcon icon={faChevronLeft} color={colors[icon]} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
