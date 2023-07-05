import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Image, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, DensityCamera, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { selectUserMeta, setData, setIsLoggedIn, setUserMeta } from "~redux/slices/user";

import ImageCropPicker from "react-native-image-crop-picker";

import styles from "./styles";
import { height, width } from "~utills/Dimension";
import ScreenNames from "~routes/routes";
export default function CropImage({ navigation, route }) {
  const image = route?.params?.uri;
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  const [take, setTake] = useState(false);
  // const [image,setimage]=useState(null)
  console.log(route.params);

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.cameraview}>
          <Image
            style={{
              height: height(70),
              width: width(90),
              alignSelf: "center",
            }}
            source={{ uri: "file://" + image }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            height: height(15),
            margin: width(5),
          }}
        >
          <Button
            onPress={async () => {
              const resp = await ImageCropPicker.openCropper({
                cropping: false,
                path:
                  Platform.OS === "android"
                    ? "file://" + image
                    : image,
                freeStyleCropEnabled: true,
                width: 1800,
                height: 1500,
                // mediaType:
              });
              console.log('response',resp);
              dispatch(setData({ title: "abc", url: resp.path }));
              navigation.navigate(ScreenNames.HOME)
            }}
            title={"Crop picture"}
          />
          <Button
            onPress={() => {
              navigation.navigate(ScreenNames.HOME)
            }}
            title={"cancel"}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
