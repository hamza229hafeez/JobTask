import React, { Fragment, useRef, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { height, width } from "~utills/Dimension";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { setData } from "~redux/slices/user";
const DensityCamera = ({take,setTake, setCameraVisible = () => {}, navigation }) => {
  const dispatch=useDispatch()
  const devices = useCameraDevices("wide-angle-camera");
  const camera = useRef(null);
  const [flash, setflash] = useState("off");
  const id = new Date().valueOf().toString();
  const device = devices.back;

  React.useEffect(() => {
    getPermission();
  }, []);
  React.useEffect(() => {
    if(take){takePhoto();setTake(false)}
  }, [take]);
  const getPermission = async () => {
    await Camera.requestCameraPermission();
    await Camera.requestMicrophonePermission();
  };
  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: flash,
      width: 1800,
      height: 1500,
    });
    const resp = await ImageCropPicker.openCropper({
      cropping: false,
      path: Platform.OS === "android" ? "file://" + photo.path : photo.path,
      freeStyleCropEnabled: true,
      width: 1800,
      height: 1500,
      // mediaType:
    });
    console.log(resp);
    dispatch(setData({title:'abc',url:resp.path}))
    navigation.goback()
  };
  if (device == null)
    return <ActivityIndicator size={height(4)} color={'green'} />;
  return (
    <Fragment>
      <View style={styles.mainViewContainer}>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          video={true}
          isActive={true}
          enableZoomGesture
          photo={true}
        />
      
      </View>
    </Fragment>
  );
};
export default DensityCamera;
