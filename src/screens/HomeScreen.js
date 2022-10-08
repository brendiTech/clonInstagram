import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';

export const HomeScreen = () => {
  return (
    <View>
      <Text>
        Hello Home Screen
        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        />
      </Text>
    </View>
  );
};
