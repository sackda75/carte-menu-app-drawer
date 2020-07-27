import React from 'react'
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'

const CustomDrawerContent = ({ navigation })  => {
    return (
        <View>
            <StatusBar style='auto' backgroundColor='#00b894' />
            <View style={styles.theta1}>
                <Image style={styles.theta2} source={{ uri: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
            </View>
            <View style={styles.theta3}>
            <TouchableOpacity style={styles.theta4} onPress={() => navigation.navigate('Accueil')}>
                    <MaterialCommunityIcons name='home' size={30} color='#00b894' /> 
                    <Text> Accueil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theta4} onPress={() => navigation.navigate('VideoResto')}>
                    <MaterialCommunityIcons name='bowl' size={30} color='#00b894' /> 
                    <Text> Découvrez Notre Restaurant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theta4} onPress={() => navigation.navigate('Contact')}>
                    <MaterialCommunityIcons name='email-open' size={30} color='#00b894' /> 
                    <Text> Nous Contacter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    theta1: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    theta2: {
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 20,
        width: 150,
        height: 150,
        borderRadius: 80
    },
    theta3: {
        marginTop: 100,
        marginLeft: 20
    },
    theta4: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    theta8: {
        fontWeight: 'bold'
    }
})

export default CustomDrawerContent