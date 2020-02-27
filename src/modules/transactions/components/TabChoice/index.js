import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

const TabChoice = ({ chosen = () => {} }) => {
  const [choice, setChoice] = useState(null);

  const hasChosen = id => {
    setChoice(id);
    chosen(id);
  };

  return (
    <View>
      <Text style={styles.type}>Informe o tipo</Text>
      <View style={styles.line}>
        <TouchableOpacity style={styles.tabItem} onPress={() => hasChosen(1)}>
          <View style={[styles.tabContent, styles[choice === 1 ? 'block' : 'outline']]}>
            <Text style={styles[choice === 1 ? 'labelActive' : 'labelOutline']}>Entrada</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => hasChosen(2)}>
          <View style={[styles.tabContent, styles[choice === 2 ? 'block' : 'outline']]}>
            <Text style={styles[choice === 2 ? 'labelActive' : 'labelOutline']}>Saída</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabChoice;
