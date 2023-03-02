// import {View, Text, StyleSheet, Image} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Home from './components/Home';
// // import first from './src/first.png';
// // import second from './src/second.png';
// // import third from './src/third.png';
// // import SlideView from './components/SlideView';
// // import AppIntroSlider from 'react-native-app-intro-slider';
// import {NavigationContainer} from '@react-navigation/native';
// import {MainStackNavigator} from './components/StackNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MainStackNavigator />
//     </NavigationContainer>
//   );
// }

import React from 'react';
import Users from './components/Home';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Users />
    </SafeAreaView>
  );
}
