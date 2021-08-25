/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {FONTS, SIZES, COLORS, icons, images} from '../constants';

const Scan = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <TouchableOpacity
          style={{
            width: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.close}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{...FONTS.body3, color: COLORS.white}}>
            Scan for Payment
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 10,
            backgroundColor: COLORS.green,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Infor')}>
          <Image
            source={icons.info}
            style={{height: 25, width: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'Camera is required for Barcode scanning',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
      </RNCamera>
    </View>
  );
};
export default Scan;
