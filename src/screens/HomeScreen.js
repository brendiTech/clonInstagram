import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Instagram_logo.png')}
        style={styles.logo}
        accessibilityLabel={'logo'}
      />
      <View style={styles.topIconsContainer}>
        <Image
          source={require('../assets/Add.png')}
          style={styles.topIcon}
          accessibilityLabel={'Add'}
        />
        <Image
          source={require('../assets/Heart.png')}
          style={styles.topIcon}
          accessibilityLabel={'Like'}
        />
        <Image
          source={require('../assets/Share.png')}
          style={styles.topIcon}
          accessibilityLabel={'Share'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginTop: 10,
    marginLeft: 5,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 30,
  },
  topIcon: {
    width: 25,
    height: 25,
  },
  topIconsContainer: {
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
