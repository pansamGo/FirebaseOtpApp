import { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import AppContext from "./AppContext";


const myContext = useContext(AppContext);


export async function authConfirmation(number) {
    try{
        const confirmation = await auth().signInWithPhoneNumber(number);
        console.log('------confirmation--------common---', confirmation);
        myContext.setConfirmObject(confirmation);
        myContext.setPhoneNumber(number);
        return confirmation;
    }catch (e) {
        console.log('----e---', e);
    }
};