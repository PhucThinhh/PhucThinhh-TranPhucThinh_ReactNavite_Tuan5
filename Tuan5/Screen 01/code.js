import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: 250, height: 270 }}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOGLbnGv2oGEqqdlzpDPVZJFimrDatHPLy3UyTZvI84~iMwK3PL3aV8OiC0aBTH-lWM1NfWazxJ7jeH8ql5NvPPW2SyywSVBnv0oFhhk77~39CIoWLu~u3IslACYIwxpVUTW-LjFS2Hv~b~LJ0FCKetPTFuKVg844VArVn8hb4wYmW4DGkZgiz-A5JPJxK6aLTL-oHriguIb2t4AThDC3DiW7bM83qZvmYspjqT2A70vUWCBA1Jy7qE2i~lCvwHY2OT39biourUkeoqbqX47Eq3QVOXv5LQ5D-qID8ve9sf5aHb~IoQIgAl~flkxPsWVRnX0Yc-qC44-JOhcKYYnHA__',
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
