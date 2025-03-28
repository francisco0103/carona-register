import { View, Text, Image, Button,StyleSheet } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
const index = () => {
  return (
    <View style={ styles.View}>
    
      <Text style = {styles.Text} >Como você quer usar o app </Text>
      <Text style={{ fontSize:20 ,  marginBottom: 60}} >Ofereça carona e ganhe dinheiro</Text>
      <Link href={"/auth/driver"}><Image style={styles.Image} source={ require('../assets/driver.png')} /></Link>
     
      <Text >Motorista</Text>

      <Text style={{ fontSize:20 ,  marginBottom: 60}}>Encontre Caronas e Economize</Text>
      <Link href={"/auth/passager"}> <Image  style={styles.Image} source={ require('../assets/Passager.png')} /></Link>
      
     <Text>Carona</Text>
     

    </View>
  )
}
const styles = StyleSheet.create({

  Text:{
    position:'relative', fontSize: 34,
     fontWeight:500 , 
      paddingHorizontal: 60,
      marginBottom: 60
  },
Image:{
  width:120,height:120,
  alignSelf:'center'
  ,justifyContent:'center'
},
View:{
flex: 1, alignItems:'center',
justifyContent:'center',
display: 'flex',
backgroundColor: '#FFF'
},
h1:{
 fontSize: 32, fontWeight: 'bold',
},

})


export default index