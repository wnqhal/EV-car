import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Button,
  TouchableOpacity,
  zIndex,
} from 'react-native';
import grayTag from '/Users/jubomi/VaroEVProject/src/grayTag.png';
import redTag from '/Users/jubomi/VaroEVProject/src/redTag.png';
import greenTag from '/Users/jubomi/VaroEVProject/src/greenTag.png';

export default function RightMap(onPress) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: -280, marginLeft: 40}}>
        <Image
          style={styles.img}
          source={require('/Users/jubomi/VaroEVProject/src/rightMap.png')}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.firstCar}
          source={grayTag}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.secondCar}
          source={greenTag}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.thirdCar}
          source={redTag}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCFE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    height: 580,
    marginRight: 35,
    marginTop: 545,
  },
  firstCar: {
    top: -547,
    left: -22,
    height: 40,
    width: 40,
  },
  secondCar: {
    top: -587,
    left: 19,
    height: 40,
    width: 40,
  },
  thirdCar: {
    marginTop: -627,
    marginLeft: 150,
    height: 40,
    width: 40,
  },
});
