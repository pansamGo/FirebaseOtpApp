import React, {useRef, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./ProfileScreen";



const VerifyOtpScreen = ({ navigation }) => {

    const [otp, setOtp] = useState('');

    const checkOtp = (otp) => {
        console.log('------otp----', otp)
        if(otp.length === 6) {
            setOtp(otp);
            navigation.navigate('ProfileScreen');
        }
    }
    
    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.inputView}>
                <View style={styles.backBtnView}>
                    <TouchableOpacity
                         style={styles.backBtn}
                         onPress={() => navigation.goBack()}>
                        <Image style={{height: 40, width: 40, resizeMode: 'center'}} source={require('./../assets/circle.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.otpInputView}>
                    <Text style={styles.text}>Please enter a six digit code sent to your mobile </Text>
                    <TextInput
                        defaultValue={otp}
                        style={styles.otpInput}
                        maxLength={6}
                        onChangeText={(value) => checkOtp(value)}
                        cursorColor={'grey'}
                        keyboardType="numeric" />
                </View>
                <View style={styles.resendCodeView}>
                    <Text style={{color: '#43A45F'}}>I haven't received a code</Text>
                    <TouchableOpacity style={styles.resendCodeBtn}>
                        <Text style={{color: '#fff'}}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    inputView: {
        marginHorizontal: 15,
        marginVertical: 20,
    },
    backBtnView: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    backBtn: {
        height: 40,
        width: 40,
    },
    otpInputView: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    otpInput: {
        borderWidth: 1,
        marginTop: 12,
        height: 60,
        borderColor: 'grey',
        borderRadius: 2,
        fontSize: 18,
        padding: 12,
        color: 'black'
    },
    resendCodeView: {
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    resendCodeBtn: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 7,
        backgroundColor: '#43A45F'

    }
});

export default VerifyOtpScreen;