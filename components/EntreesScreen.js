import React, { useState } from 'react'
import Constants from 'expo-constants'
import CustomHeader from './CustomHeader'
import TouchableScale from 'react-native-touchable-scale'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, Damion_400Regular } from '@expo-google-fonts/damion'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, ScrollView, Image, Modal } from 'react-native'

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

const Colors = {
  theme: '#00b894',
  white: '#fff',
  greyish: '#a4a4a4',
}

const EntreesScreen = ({ navigation }) => {

  const [modalVisible1, setModalVisible1] = useState(false)
  const ClickModal1 = () => {
    setModalVisible1(true)
  }

  const [modalVisible2, setModalVisible2] = useState(false)
  const ClickModal2 = () => {
    setModalVisible2(true)
  }

  const [modalVisible3, setModalVisible3] = useState(false)
  const ClickModal3 = () => {
    setModalVisible3(true)
  }

  const [modalVisible4, setModalVisible4] = useState(false)
  const ClickModal4 = () => {
    setModalVisible4(true)
  }

  const [modalVisible5, setModalVisible5] = useState(false)
  const ClickModal5 = () => {
    setModalVisible5(true)
  }

  const [modalVisible6, setModalVisible6] = useState(false)
  const ClickModal6 = () => {
    setModalVisible6(true)
  }

  const [modalVisible7, setModalVisible7] = useState(false)
  const ClickModal7 = () => {
    setModalVisible7(true)
  }

  const [modalVisible8, setModalVisible8] = useState(false)
  const ClickModal8 = () => {
    setModalVisible8(true)
  }

  const [modalVisible9, setModalVisible9] = useState(false)
  const ClickModal9 = () => {
    setModalVisible9(true)
  }

  const [modalVisible10, setModalVisible10] = useState(false)
  const ClickModal10 = () => {
    setModalVisible10(true)
  }

  let [fontsLoaded, error] = useFonts({
    Damion_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.delta1}>
      <StatusBar style='light' backgroundColor='#00b894' />
      <View style={styles.delta2}>
        <CustomHeader title='Carte des Entrées' isHome={true} navigation={navigation} />
      </View>
      <View style={styles.delta3}>
        <View style={styles.delta4}>
          <Text style={[styles.delta6, { fontSize: 20, color: Colors.theme }]}>A propos de nos Entrées</Text>
          <AntDesign name='form' size={20} color='#00b894' />
        </View>
        <View style={styles.delta5}>
          <Text style={styles.delta6}>
            Les entrées (grands bols ou saladiers) sont le format à la mode.
            Les restaurants les utilisent pour proposer un plat de résistance
            composé de différents ingrédients.
          </Text>
        </View>
      </View>
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Salade de Paris</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>12,50 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal1() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible1} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible1(!modalVisible1) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Salade de Berlin</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1571047399553-603e2138b646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>13,20 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal2() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible2} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1571047399553-603e2138b646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible2(!modalVisible2) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Salade de Milan</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1568158918251-8eb4601f0c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>14,40 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal3() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible3} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1568158918251-8eb4601f0c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible3(!modalVisible3) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Salade de Porto</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>15,30 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal4() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible4} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible4(!modalVisible4) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Salade de Rio</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>16,10 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal5() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible5} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible5(!modalVisible5) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Saumon persillé</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1576670392216-eb265264c057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>8,40 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal6() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible6} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1576670392216-eb265264c057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible6(!modalVisible6) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Coquilletes du Chef</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>10,40 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal7() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible7} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible7(!modalVisible7) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Poché de Brest</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1530522464290-e32ba6a923a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>12,70 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal8() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible8} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1530522464290-e32ba6a923a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible8(!modalVisible8) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Coquille de Cuba</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1533745884-2f029a32159e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>13,90 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal9() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible9} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1533745884-2f029a32159e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible9(!modalVisible9) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.delta7}>
            <View style={styles.omicron1}>
              <Text style={styles.omicron2}>Bacon au cerfeuil</Text>
              <Image style={styles.omicron3} source={{ uri: 'https://images.unsplash.com/photo-1580376259349-5f4b7db4c39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.omicron4}>
                <Text style={styles.omicron5}>14,30 €</Text>
                <TouchableScale style={styles.submitButtonStyle} activeOpacity={0.75} activeScale={1.3} onPress={() => { ClickModal10() }}>
                  <MaterialCommunityIcons style={styles.omicron6} name='plus-circle' size={25} />
                </TouchableScale>
              </View>
            </View>
            <Modal animationType='slide' transparent={true} visible={modalVisible10} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
              <View style={styles.container}>
                <View style={styles.modalView}>
                  <Image style={styles.imageStyle} source={{ uri: 'https://images.unsplash.com/photo-1580376259349-5f4b7db4c39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
                  <Text style={styles.modalText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                  <Text style={{ alignSelf: 'flex-start', textDecorationLine: 'underline', marginHorizontal: 10 }}>Ingrédients :{'\n'}</Text>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sel</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Sucre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Poivre</Text></View>
                  <View style={styles.compoStyle}><MaterialCommunityIcons style={{ color: Colors.theme }} name='check' size={25} /><Text> Piment</Text></View>
                  <TouchableHighlight style={{ ...styles.openButton, backgroundColor: Colors.theme }} onPress={() => { setModalVisible10(!modalVisible10) }}>
                    <Text style={styles.textStyle}>Fermer</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  omicron1: {
    backgroundColor: Colors.theme,
    marginHorizontal: 8,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  omicron2: {
    fontSize: 22,
    fontFamily: 'Damion_400Regular',
    color: Colors.white
  },
  omicron3: {
    width: 160, 
    height: 160, 
    marginVertical: 10,
    borderRadius: 10
  },
  omicron4: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  omicron5: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white
  },
  omicron6: {
    color: Colors.white
  },
  delta1: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  delta2: {
    backgroundColor: Colors.theme,
    paddingBottom: Layout.height * 0.17,
    borderBottomLeftRadius: Layout.width * 0.1,
    borderBottomRightRadius: Layout.width * 0.1
  },
  delta3: {
    backgroundColor: Colors.white,
    marginHorizontal: 32,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 8,
    marginBottom: 5,
    marginTop: -Layout.height * 0.12
  },
  delta4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  delta5: {
    marginVertical: 8
  },
  delta6: {
    fontFamily: 'Damion_400Regular',
    fontSize: 15
  },
  delta7: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingVertical: 10
  },
  delta8: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 20
  },
  delta9: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: Colors.theme,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
    width: 250
  },
  delta10: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Damion_400Regular'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 560,
    width: 320,
    backgroundColor: '#ffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 4,
    width: 300,
    marginTop: 20
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  modalText: {
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'justify',
    marginHorizontal: 10,
    fontFamily: 'Damion_400Regular'
  },
  compoStyle: {
    flexDirection: 'row', 
    alignSelf: 'flex-start', 
    marginHorizontal: 10 
  },
  submitButtonStyle: {
    backgroundColor: Colors.theme,
    borderRadius: 40
  }
})

export default EntreesScreen