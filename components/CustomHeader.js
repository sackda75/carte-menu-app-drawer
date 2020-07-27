import React from 'react'
import { AppLoading } from 'expo'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette'

const CustomHeader = ({ title, isHome, navigation }) => {

  let [fontsLoaded, error] = useFonts({
    Courgette_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.kappa1}>
      <View style={styles.kappa2}>
        {
          isHome ?
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MaterialCommunityIcons
                name='text'
                color={'#fff'}
                size={35}
              />
            </TouchableOpacity>
            :
            <MaterialCommunityIcons
              name='arrow-left-bold-circle'
              size={40}
              color={'#fff'}
              onPress={() => navigation.goBack()}
            />
        }
      </View>
      <View style={styles.kappa3}>
        <Text style={styles.kappa4}>{title}</Text>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  kappa1: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00b894'
  },
  kappa2: {
    backgroundColor: '#00b894' 
  },
  kappa3: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  kappa4: {
    marginTop: -35,
    color: '#fff',
    fontFamily: 'Courgette_400Regular',
    fontSize: 25
  }
})

export default CustomHeader