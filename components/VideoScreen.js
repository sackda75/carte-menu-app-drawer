import React, { useRef } from 'react'
import Constants from 'expo-constants'
import YoutubePlayer from 'react-native-youtube-iframe'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native'

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

const VideoScreen = ({ navigation }) => {
    const playerRef = useRef(null)
    return (
        <ScrollView style={styles.sion1}>
            <StatusBar style='light' backgroundColor={Colors.theme} />

            <View style={styles.delta2}>
                <CustomHeader title=' Notre Restaurant' navigation={navigation} />
            </View>

            <View style={styles.delta5}>
                <Text style={styles.delta6}>Découvrez notre restaurant gastronomique à travers cette vidéo de présentation :</Text>
            </View>

            <View style={styles.sion2}>
                <YoutubePlayer
                    ref={playerRef}
                    height={190}
                    width={330}
                    videoId={'Pz65LtMDk_E'}
                    play={false}
                    onChangeState={event => console.log(event)}
                    onReady={() => console.log("ready")}
                    onError={e => console.log(e)}
                    onPlaybackQualityChange={q => console.log(q)}
                    volume={50}
                    playbackRate={1}
                    playerParams={{
                        cc_lang_pref: "us",
                        showClosedCaptions: true
                    }}
                />
            </View>


            <View style={styles.delta7}>
                <Text style={styles.delta6}>Citrus Etoile est un restaurant gastronomique français situé à Paris à deux pas des Champs-Elysées et de l' Arc de Triomphe. Venez déguster une cuisine légère par le chef étoile Gilles Epié.</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sion1: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    delta2: {
        backgroundColor: Colors.theme,
        paddingBottom: Layout.height * 0.07,
        borderBottomLeftRadius: Layout.width * 0.1,
        borderBottomRightRadius: Layout.width * 0.1
      },
    delta5: {
        marginTop: 50,
        marginHorizontal: 14
      },
    delta6: {
        fontFamily: 'Damion_400Regular',
        fontSize: 20
      },
    sion2: {
        marginTop: 20,
        alignItems: 'center'
    },
    delta7: {
        marginTop: 20,
        marginHorizontal: 14
      },
})

export default VideoScreen