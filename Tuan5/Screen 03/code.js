import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{flexDirection:'row'}}>
        <Image
          style={{ width: 100, height: 120 }}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/cc48/9fb7/38f608fb6fb887912e810af3b91e12c1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzOxgbeX3yAQ1Ey5QkQOV0FvZXSp--VQ9unTN6386QVQl91mKnRoPWMf5qSaF148HAONo1JaGoXeAPSuYlNbn2PbOYtURzFXHORRPoVZHX6RHFwQ2XSqnlHKAa0SB2n2ypWMyPJC4l82V7aXfqYcFok3BvRIHH2N~2QVJBLBA~DMk8Yo20M1Ck~OtN4OtBXa3WKP942My8LILUqoflVHK-2oUJbKJvphXArcjimiKSJy9ku9DpETU5E~BilZxEomE~3ZVtknIXFgs49~82VpPf1P3qhrgdWRrn9MDa1v~NzbuNFAibQQX-fGXwY3B50O4S8T3OCb~hvTjGYhZ9KTiw__',
          }}
        />
        <View style={{padding:10}}>
        <Text >Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>
        <Text style={{marginTop:5}}>Màu: <b>đỏ</b></Text>
        <Text style={{marginTop:5}}>Cung cấp bởi <b>Tiki Trandding</b></Text>
        <Text style={{fontWeight:'bold',marginTop:5}}>1.790.000</Text>
        </View>
      </View>

      <View style={{backgroundColor:'#c4c4c4',width:'100%',height:'100%',marginTop:10}}>
      <Text style={{padding:5}} >Chọn một màu bên dưới:</Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={{width:70,height:70,backgroundColor:'#c5f1fb',justifyContent:'center',alignItems:'center',marginTop:10}}></View>
      <View style={{width:70,height:70,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:10}}></View>
      <View style={{width:70,height:70,backgroundColor:'black',justifyContent:'center',alignItems:'center',marginTop:10}}></View>
      <View style={{width:70,height:70,backgroundColor:'#234896',justifyContent:'center',alignItems:'center',marginTop:10}}></View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
          style={{
            backgroundColor: '#5878cc',
            width:'90%',
            height:40,
            borderRadius:10,
            marginTop: 25,
            justifyContent:'center',
            alignItems:'center',
            }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              width: '100%',
              textAlign:'center'
            }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default MyApp;
