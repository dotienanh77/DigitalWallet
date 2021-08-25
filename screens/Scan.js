import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {FONTS, SIZES, COLORS, icons, images} from '../constants';
const Scan = () => {
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
        }}
      />
    </View>
  );
};
export default Scan;
