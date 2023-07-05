import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, DensityCamera, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import styles from "./styles";
import { height, width } from "~utills/Dimension";
export default function AddImage({ navigation, route }) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  const [take,setTake]=useState(false)
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View
        style={styles.cameraview}
        >
          <DensityCamera 
          take={take}
          setTake={setTake}
          navigation={navigation}
          />
        </View>
        <View 
        style={{justifyContent:'space-between',height:height(15),margin:width(5)}}
        >
        <Button
        onPress={()=>{setTake(true)}}
        title={"Take Photo"}
        />
        <Button
        onPress={()=>{navigation.goBack()}}
        title={"cancel"}
        />
        </View>
      </View>
    </ScreenWrapper>
  );
}
