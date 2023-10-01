import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";

const ProfileScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const setValue = (value, type) => {
        if (type == 'phone') {
            setPhoneNumber(value);
        } else if (type == 'email') {
            setEmail(value);
        } else {
            setName(value);
        }
    }

    const validateValues = () => {
        if (name == '' || email == '' || phoneNumber == '') {
            Alert.alert('Please fill all the fields.');
        } else {
            setModalVisible(true);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
        
            <View style={styles.inputView}>
                <Modal visible={modalVisible}
                    style={styles.modal}
                    backdropColor={'black'}
                    backdropOpacity={0.3}>
                    <View style={styles.modalView}>
                        <View style={styles.circle}>
                            <Image style={{height: 150, width: 150, resizeMode: 'contain'}} source={require('./../assets/check-mark-icon.jpg')} />
                        </View>
                        <View style={styles.congratsMsg}>
                            <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Congratulation !</Text>
                            <Text style={{color: 'black', fontSize: 16, marginTop: 8}}>Your account is ready to use</Text>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.homeScreenBtn}>
                            <Text style={{color: 'white', fontSize: 16}}>GO TO HOME SCREEN</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.backBtnView}>
                    <TouchableOpacity
                         style={styles.backBtn}
                         onPress={() => navigation.goBack()}>
                        <Image style={{height: 40, width: 40, resizeMode: 'center'}} source={require('./../assets/circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Create Your Profile</Text>
                </View>
                <View style={styles.phoneView}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        onChangeText={(value) => {setValue(value, 'phone')}}
                        style={styles.textInput}
                        maxLength={10}
                        cursorColor={'grey'}
                        keyboardType="numeric"
                        placeholder="Enter Phone Number"
                        placeholderTextColor={'grey'} />
                </View>
                <View style={styles.phoneView}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        onChangeText={(value) => {setValue(value, 'email')}}
                        style={styles.textInput}
                        cursorColor={'grey'}
                        placeholder="Enter your email"
                        placeholderTextColor={'grey'} />
                </View>
                <View style={styles.phoneView}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        onChangeText={(value) => {setValue(value, 'name')}}
                        style={styles.textInput}
                        cursorColor={'grey'}
                        placeholder="Enter your Name"
                        placeholderTextColor={'grey'} />
                </View>
                
            </View>
                <View style={{marginVertical: 20}}>
                    <TouchableOpacity 
                        style={styles.continueBtn}
                        onPress={() => validateValues()}>
                        <Text style={styles.loginText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginLeft: 20
    },
    inputView: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 20,
    },
    backBtnView: {
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        height: 40,
        width: 40,
    },
    phoneView: {
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'column'
    },
    label: {
        fontSize: 16,
        color: 'black'
    }, 
    textInput: {
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        padding: 10,
        fontSize: 18,
        color: 'black',
        borderColor: 'grey',
        borderRadius: 3,
        marginTop: 10
    },
    btnView: {
        height: 100,
        marginHorizontal: 20,
        marginVertical: 20
    },
    continueBtn: {
        marginHorizontal: 30,
        marginVertical: 15,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43A45F',
        borderRadius: 30,
        marginBottom: 0
    },
    modal: {
        marginVertical: 200,
        backgroundColor: 'white',
        borderRadius: 8
    },
    modalView: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10
    },
    circle: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 5
    },
    congratsMsg: {
        
        height: 90,
        marginBottom: 30,
        flexDirection: 'column',
        alignSelf: 'center',
        paddingHorizontal: 20
    },
    homeScreenBtn: {
        height: 60,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: '#43A45F',
    }

});

export default ProfileScreen;