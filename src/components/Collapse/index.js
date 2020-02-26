import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, LayoutAnimation, Platform, UIManager} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import styles from './style';
import {colors} from '~/constants';

const Collapse = ({children}) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);
  }, []);

  const press = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            height: expanded ? null : 0,
            paddingTop: expanded ? 32 : 0
          }
        ]}
      >
        <View style={styles.content}>{children}</View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity activeOpacity={0.8} onPress={press}>
          <View style={styles.btn}>
            <FontAwesomeIcon icon={faChevronDown} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Collapse;
