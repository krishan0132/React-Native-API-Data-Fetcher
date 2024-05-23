import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React from 'react'

const Commontextinput = ({placeholder,style,icon,value,onchangetext,keyboardType}) => {
  return (
    <View>
        <View style={styles.textinput}>
            <Image style={{height:35,width:35,marginLeft:10}} source={icon}/>
            <TextInput
            value={value}
            placeholder={placeholder}
            style={style}
            onChangeText={onchangetext}
           keyboardType={keyboardType?'number-pad':'default'}
            />
        </View>
     
    </View>
  )
}

export default Commontextinput

const styles = StyleSheet.create({
  textinput:{
    height:60,
    width:'96%',
    borderWidth:2,
    borderRadius:20,
    marginTop:15,
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center'
    }
})