import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import FlashMessage from "react-native-flash-message";
import grayTag from '/Users/jubomi/VaroEVProject/src/grayTag.png';
import redTag from '/Users/jubomi/VaroEVProject/src/redTag.png';
import greenTag from '/Users/jubomi/VaroEVProject/src/greenTag.png';


export default function LeftMap() {
  return (
    <View style={styles.container}>
      <View style={{marginTop: -280, marginLeft: 40}}>
        <Image
          style={styles.img}
          source={require('/Users/jubomi/VaroEVProject/src/leftMap.png')}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.firstCar}
          source={greenTag}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.secondCar}
          source={redTag}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.thirdCar}
          source={greenTag}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.65}>
        <Image
          style={styles.fourthCar}
          source={greenTag}
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
    height: 850,
    marginRight: 24,
    marginTop: 275,
    zIndex: 3,
  },
  firstCar: {top: -580, left: -2, height: 40, width: 40},
  secondCar: {top: -582, left: -2, height: 40, width: 40},
  thirdCar: {top: -583, left: -2, height: 40, width: 40},
  fourthCar: {top: -585, left: -2, height: 40, width: 40},
});
