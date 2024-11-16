import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{flexDirection:'row'}}>
        <Image
          style={{ width: 100, height: 120 }}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOGLbnGv2oGEqqdlzpDPVZJFimrDatHPLy3UyTZvI84~iMwK3PL3aV8OiC0aBTH-lWM1NfWazxJ7jeH8ql5NvPPW2SyywSVBnv0oFhhk77~39CIoWLu~u3IslACYIwxpVUTW-LjFS2Hv~b~LJ0FCKetPTFuKVg844VArVn8hb4wYmW4DGkZgiz-A5JPJxK6aLTL-oHriguIb2t4AThDC3DiW7bM83qZvmYspjqT2A70vUWCBA1Jy7qE2i~lCvwHY2OT39biourUkeoqbqX47Eq3QVOXv5LQ5D-qID8ve9sf5aHb~IoQIgAl~flkxPsWVRnX0Yc-qC44-JOhcKYYnHA__',
          }}
        />
        <Text style={{padding:15}}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>
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
