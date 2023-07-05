import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(4),
    marginBottom: height(2)
  },
  flatview:{
    width:width(45),
    height:height(25),
    borderWidth:width(.2),
    borderColor:"lightgrey",
    borderRadius:width(2),
    justifyContent:'space-between',
    margin:width(1),
  },
  title:{
    backgroundColor:'lightgrey',
    padding:width(2),
    borderBottomLeftRadius:width(1),
    borderBottomRightRadius:width(1)
  },
  floatbutton:{
    position:'absolute',
    width:width(10),
    height:width(10),
    backgroundColor:'black',
    borderRadius:width(5),
    alignItems:'center',
    top:height(80),
    right:width(15)
  },
  buttontext:{
    color:'white',
    fontSize:width(5.5),
  },
});
export default styles;
