import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import styles from './style';
import { colors } from '~/constants';

const Tabs = ({ activeTab, tabs, onTabPress }) => {
  return (
    <View style={styles.container}>
      {tabs.map(item => {
        const isActive = item.id === activeTab;
        return (
          <View
            key={item.id}
            style={[
              styles.tabWrapper,
              { borderBottomColor: isActive ? colors.primary : colors.divider }
            ]}
          >
            <TouchableWithoutFeedback onPress={() => onTabPress(item.id)}>
              <View style={styles.titleWrapper}>
                <Text
                  style={[styles.tabTitle, { color: isActive ? colors.primary : colors.grey }]}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};

export default Tabs;
