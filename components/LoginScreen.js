import React, {useEffect, useRef, useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirm, setConfirm] = useState(null);

    function onAuthStateChanged(user) {
        if (user) {}
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        console.log(auth().settings.forceRecaptchaFlowForTesting, '--------123--');
        return subscriber; // unsubscribe on unmount
    }, []);
    

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        try{
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            await AsyncStorage.setItem('confirm', JSON.stringify(confirmation));
            setConfirm(confirmation);
            navigation.navigate('VerifyOtpScreen');
            

        }catch (e) {
            console.log('----e---', e);
        }
    }


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.inputView}>
                <Text style={styles.text}>
                    Enter your Mobile Number:
                </Text>
                <View style={{flexDirection: 'row', marginHorizontal: 15}}>
                    <TextInput
                         style={styles.codeInput}
                         value={'+91'}
                         editable={false} />
                    <TextInput
                        keyboardType="numeric"
                        cursorColor={'grey'}
                        maxLength={10}
                        onChangeText={setPhoneNumber}
                        style={styles.numberInput} />
                </View>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity 
                    style={styles.continueBtn}
                    onPress={() => {
                        // signInWithPhoneNumber('+917973322959');
                        navigation.navigate('VerifyOtpScreen');
                    }} >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    inputView: {
        height: 400,
        marginHorizontal: 15,
        marginVertical: 20
    },
    btnView: {
        height: 100,
        marginHorizontal: 20,
        marginVertical: 20
    },
    codeInput: {
        width: '15%',
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        padding: 10,
        fontSize: 18,
        color: 'black',
        borderColor: 'grey',
        borderRightWidth: 0,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    numberInput: {
        flex: 1,
        borderWidth: 1,
        height: 60,
        color: 'black',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'grey',
        fontSize: 18,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3
    },
    text: {
        marginHorizontal: 15,
        marginVertical: 15,
        fontSize: 16,
        color: 'black'
    },
    continueBtn: {
        marginHorizontal: 15,
        marginVertical: 15,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43A45F',
        borderRadius: 30
    },
    loginText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default LoginScreen;