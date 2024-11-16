import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: 220, height: 270 }}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/cc48/9fb7/38f608fb6fb887912e810af3b91e12c1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzOxgbeX3yAQ1Ey5QkQOV0FvZXSp--VQ9unTN6386QVQl91mKnRoPWMf5qSaF148HAONo1JaGoXeAPSuYlNbn2PbOYtURzFXHORRPoVZHX6RHFwQ2XSqnlHKAa0SB2n2ypWMyPJC4l82V7aXfqYcFok3BvRIHH2N~2QVJBLBA~DMk8Yo20M1Ck~OtN4OtBXa3WKP942My8LILUqoflVHK-2oUJbKJvphXArcjimiKSJy9ku9DpETU5E~BilZxEomE~3ZVtknIXFgs49~82VpPf1P3qhrgdWRrn9MDa1v~NzbuNFAibQQX-fGXwY3B50O4S8T3OCb~hvTjGYhZ9KTiw__',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          style={{ width: 120, height: 18 }}
          source={require('./assets/star.png')}
        />
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: -20,
        }}>
        <Text style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
        <Text style={{ color: '#9e9e9e' }}>
          <del>1.790.000 đ</del>
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 10,
            paddingLeft: 28,
          }}>
          Ở ĐÂU BÁN RẺ HƠN HOÀN TIỀN
        </Text>
      </View>
      <View style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <select
          id="dropdown"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '10px',
            border: '1px solid #aaaa',
            outline: 'none',
          }}>
          <option value="">4 MÀU-CHỌN MÀU</option>
          <option value="option1">ĐEN</option>
          <option value="option2">XANH</option>
          <option value="option3">ĐỎ</option>
          <option value="option4">TRẮNG</option>
        </select>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
      <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width:'85%',
            height:40,
            borderRadius:10,
            marginTop: 25,
            justifyContent:'center',
            alignItems:'center',          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              width: '100%',
              textAlign:'center'
            }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyApp;
