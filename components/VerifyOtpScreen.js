import React, {useRef, useState, useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./ProfileScreen";
import auth from '@react-native-firebase/auth';
import AppContext from "./AppContext";


const VerifyOtpScreen = ({ navigation }) => {

    const myContext = useContext(AppContext);

    const [code, setCode] = useState('');
    const [confirm, setConfirm] = useState(myContext.confirmObj);
    const [verificationId, setVerificationId] = useState(myContext.confirmObj.verificationId);

    const checkOtp = async (otp) => {
        if(otp.length === 6) {
            confirmCode(otp);
        }
    }

    const resendCode = () => {
        
    }
    
    async function confirmCode(otp) {
        try {
            await confirm.confirm(otp);
            navigation.navigate('ProfileScreen');
        } catch (error) {
            Alert.alert('Invalid otp');
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
                        defaultValue={code}
                        style={styles.otpInput}
                        maxLength={6}
                        onChangeText={(value) => checkOtp(value)}
                        cursorColor={'grey'}
                        keyboardType="numeric" />
                </View>
                <View style={styles.resendCodeView}>
                    <Text style={{color: '#43A45F'}}>I haven't received a code</Text>
                    <TouchableOpacity onPress={() => {
                                resendCode()
                            }} 
                            style={styles.resendCodeBtn}>
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