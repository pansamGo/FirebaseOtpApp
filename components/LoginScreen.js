import React, {useContext, useEffect, useRef, useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth';
import AppContext from "./AppContext";



const LoginScreen = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const myContext = useContext(AppContext);

    function onAuthStateChanged(user) {
        if (user) {}
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    

    // Handle the button press
    async function signInWithPhoneNumber(number) {
        if (number.length === 10) {
            number = '+91' + number;
            try{
                const confirmation = await auth().signInWithPhoneNumber(number);
                myContext.setConfirmObject(confirmation);
                myContext.setPhoneNumber(number);
                navigation.navigate('VerifyOtpScreen');
            }catch (e) {
                console.log('----e---', e);
            }
        } else {
            Alert.alert('Enter ten digit number');
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
                        signInWithPhoneNumber(phoneNumber);
                        // signInWithPhoneNumber('+44 7444 555666');
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