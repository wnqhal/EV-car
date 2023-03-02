import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import React, {Fragment, useEffect, useState} from 'react';
import redCar from '/Users/jubomi/VaroEVProject/src/redCar.png';
import greenCar from '/Users/jubomi/VaroEVProject/src/greenCar.png';
import grayCar from '/Users/jubomi/VaroEVProject/src/grayCar.png';
import DropShadow from 'react-native-drop-shadow';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import axios from 'axios';

function Item() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItem = async () => {
    setLoading(true);
    try {
      // 요청 시작할 때에는 error와 item을 초기화
      setError(null);
      setItem(null);
      // loading 상태 true로 변경
      const response = await axios.get('http://api.varoev.com/api/v3/ev');

      console.log(response.data.items);
      console.log(
        response.data.items.filter(user => user.snm == '안양2차SKV1센터2'),
      );
      setItem(
        response.data.items.filter(user => user.snm == '안양2차SKV1센터2'),
      );
    } catch (e) {
      console.log('123123', e);
      setError(e);
    }

    // fetch(`http://api.varoev.com/api/v3/ev`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // loading 끄기
    setLoading(false);
  };

  // 첫 렌더링 때 fetchItem() 한 번 실행
  useEffect(() => {
    fetchItem();
  }, []);
  if (loading)
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 30}}>로딩 중...</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 30}}>
          에러가 발생했습니다
        </Text>
      </View>
    );

  if (!item) return null;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.textView}>
          <Text style={{textAlign: 'center', marginTop: 30, color: '#fff'}}>
            {String(item[0].snm)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textView: {
    width: 400,
    height: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Item;
