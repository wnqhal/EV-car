import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import React, {Fragment, useEffect, useState} from 'react';
import gpsIcon from '/Users/jubomi/VaroEVProject/src/gpsIcon.png';
import DropShadow from 'react-native-drop-shadow';
import Item from '../components/Item';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 600, color: '#000'}}>안양2차SKV1센터2</Text>
          <Text style={{fontSize: 15, color: '#858585'}}>
            경기도 안양시 동안구 엘에스로 116번길 118
          </Text>
        </View>
        <View>
          <Item/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    width: 320,
    height: 120,
    backgroundColor: 'red',
    borderRadius: 20,
    opacity: 0.3,
  },
});
