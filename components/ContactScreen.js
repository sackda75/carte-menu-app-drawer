import React from 'react'
import Constants from 'expo-constants'
import email from 'react-native-email'
import MapView from 'react-native-map-clustering'
import { StatusBar } from 'expo-status-bar'
import { Marker } from 'react-native-maps'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'

import CustomHeader from './CustomHeader'

const Layout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }

const Colors = {
    theme: '#00b894',
    white: '#fff',
    greyish: '#a4a4a4',
  }

const ContactScreen = ({ navigation }) => {
    const br = `\n`

    function handleEmail() {
        const to = ['dsouks@yahoo.fr'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            subject: 'Vous avez un message',
            body: ''
        }).catch(console.error)
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' backgroundColor={Colors.theme} />
            <View style={styles.delta2}>
                <CustomHeader title=' Nos Coordonnées' navigation={navigation} />
            </View>
            <View style={styles.delta5}>
                <Text>
                    {br}
                    <FontAwesome5 name='envelope' color='#00b894' size={15} /><Text style={{ fontWeight: 'bold', fontSize: 16 }}> ADRESSE</Text>{br}
                    <MaterialCommunityIcons name='play' color='#00b894' size={15} /> 50 rue Marceau, 75008 PARIS{br}
                    {br}
                    {br}
                    <MaterialCommunityIcons name='cellphone-iphone' color='#00b894' size={15} /><Text style={{ fontWeight: 'bold', fontSize: 16 }}> TELEPHONE</Text>{br}
                    <MaterialCommunityIcons name='play' color='#00b894' size={15} /> Téléphone portable : 01 43 83 07 00{br}
                    {br}
                    {br}
                    <MaterialCommunityIcons name='at' color='#00b894' size={15} /><Text style={{ fontWeight: 'bold', fontSize: 16 }}> INTERNET</Text>{br}
                    <MaterialCommunityIcons name='play' color='#00b894' size={15} /> www.lerestogastronomique.fr{br}
                    {br}
                    {br}
                    <MaterialCommunityIcons name='email-check-outline' color='#00b894' size={15} /><Text style={{ fontWeight: 'bold', fontSize: 16 }}> EMAIL</Text>{br}
                    <MaterialCommunityIcons name='play' color='#00b894' size={15} /> contact@lerestogastronomique.fr
                </Text>
                <View style={styles.onyx1}>
                        <TouchableOpacity style={styles.onyx2} onPress={handleEmail}>
                              <Text style={styles.onyx3}> ENVOYER UN EMAIL</Text>
                        </TouchableOpacity>
                    </View>
                <MapView style={styles.onyx4}
                    initialRegion={{
                        latitude: 48.872895,
                        longitude: 2.295897,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0461,
                    }}
                >
                    <Marker coordinate={{ latitude: 48.872895, longitude: 2.295897 }} title={'Restaurant ici'} />
                </MapView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ffff'
  },
  delta2: {
    backgroundColor: Colors.theme,
    paddingBottom: Layout.height * 0.07,
    borderBottomLeftRadius: Layout.width * 0.1,
    borderBottomRightRadius: Layout.width * 0.1
  },
  delta5: {
    marginTop: 30,
    marginHorizontal: 14,
    marginBottom: 30
  },
  onyx1: {
    marginTop: 10, 
    marginBottom: 30, 
    alignItems: 'center' 
  },
  onyx2: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ffff',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00b894',
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  onyx3: {
    color: '#00b894', 
    fontWeight: 'bold'
  },
  onyx4: {
    width: 330, 
    height: 300
  }
})

export default ContactScreen