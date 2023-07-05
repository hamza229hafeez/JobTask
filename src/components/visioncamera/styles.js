
import { Platform, StyleSheet } from "react-native";
import AppColors  from "~utills/AppColors";
import { height, width } from "~utills/Dimension";


const styles = StyleSheet.create({
 mainViewContainer: {
   flex: 1,
   backgroundColor: "black",
   alignItems: "center",
   justifyContent: "center",
 },


 title: {
   color: AppColors.black,
   fontWeight: "bold",
   fontSize: width(4),
   marginBottom: height(2),
 },


 flash: {
   left: width(5),
   width: width(7),
 },
 flash2: {
   height: height(7),
   width: width(7),
 },
 zoomin: {
   position: "absolute",
   top: width(3),
 },
 zoomout: {
   position: "absolute",
   bottom: width(3),
 },
 gallery: {
   position: "absolute",
   top: height(2.8),
   left: width(7),
 },


 more: {
   justifyContent: "center",
   paddingRight: width(1),
   borderWidth: 2,


   borderColor: "#00000030",


   width: width(19),
   borderRadius: width(20),
   position: "absolute",
   top: height(0),
   left: -width(10),
   elevation: 40,
 },
 container: {
   backgroundColor: AppColors.white,
   width: width(100),
   paddingVertical: height(3),
   height: height(100),
   justifyContent: "center",
   alignItems: "center",
   alignSelf: "center",
   flexDirection: "row",
 },
 imageBorder: {
   margin: 1,
   borderWidth: 0.1,
 },
 image: {
   width: width(25),
   height: width(25),
 },
 success: {
   justifyContent: "center",
   alignItems: "center",
   flex: 1,
   marginTop: -height(10),
 },
 successMeassage: {
   // backgroundColor:'white'
 },
 frame: {
   width: width(90),
   height: width(95),
   position: "absolute",
   zIndex: 1,
   top: height(12),
 },
 header: {
   position: "absolute",
   top: Platform.OS == "ios" ? height(6) : height(3),
   alignSelf: "center",
   flexDirection: "row",
   width: width(100),
   justifyContent: "space-between",
   zIndex: 1,
 },
 topRecording: {
   flexDirection: "row",
   alignItems: "center",
   marginRight: width(5),
 },
 commonText: { color: "red", fontSize: 17, marginLeft: width(3) },
 capture: {
   zIndex: 1,
   bottom: height(0),
   alignSelf: "center",
   width: width(100),
   alignItems: "center",
   justifyContent: "center",
   flexDirection: "row",
   bottom: Platform.OS == "ios" ? height(4) : height(2),
   backgroundColor:AppColors.red
 },
 rotate: {
   right: width(3),
 },
 captureImage: {
   width: height(8),
   height: height(8),
   borderRadius: height(15),
   backgroundColor: AppColors.primary,
   alignItems: "center",
   justifyContent: "center",
   position: "absolute",
bottom:height(2)
 },
 video: {
   left: width(5),
   // width:width(30)
 },
 picModal: {
   position: "absolute",
   zIndex: 1,
   top: Platform.OS == "ios" ? height(6) : height(3),
   left: width(3),
   width: width(20),
   height: height(10),
 },
 directions: {
   position: "absolute",
   backgroundColor: AppColors.white,
   width: width(93),
   flexDirection: "row",
   paddingHorizontal: width(4),
   paddingVertical: height(2),
   borderRadius: width(2),
   justifyContent: "space-between",
   bottom: height(18),
   zIndex: 1,
 },
 fullImage: {
   height: height(100),
   width: width(100),
   zIndex: 1,
 },
 animation: {
   position: "absolute",
   zIndex: 1,
   alignItems: "center",
   justifyContent: "center",
   top: height(10),
   width: width(100),
   // left: -width(1),
   height: height(50),
 },
 lotte: {
   width: width(100),
   height: height(50),
   alignItems: "center",
   justifyContent: "center",
 },
 starsLotte: {
   width: width(100),
   height: height(20),
   alignItems: "center",
   justifyContent: "center",
   position:'absolute',
   bottom:0,
   zIndex:1
 },
 analyzing:{
   top:-height(24)
 },
 cameraImg:{
    height:height(10),
    width:width(10)
 }
});
export default styles;
