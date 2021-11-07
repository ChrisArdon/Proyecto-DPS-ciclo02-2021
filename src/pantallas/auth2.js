import React, { useEffect, useState } from "react";
import {StyleSheet,SafeAreaView,StatusBar,LogBox} from 'react-native';
import base64 from "react-native-base64";
import Auth from "../components/Auth";
import firebase from "../utils/firebase";
import 'firebase/auth';

//import Productos from "./Productos/Productos";
import Navegacion from "../navegacion/Navegacion";

function btoa(data){return new base64(data,"binary").toString("base64");}
function atob(data){return new base64(data,"base64").toString("binary");}

LogBox.ignoreAllLogs(['Setting a timer']);

export default function auth2(){
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((response) => {
            setUser(response);
        });
    }, []);

    if (user === undefined) return null;

    return(
        <>
        <StatusBar barStyle='light-content'></StatusBar>
        <SafeAreaView style={styles.background}>
            {user ? <Navegacion></Navegacion> : <Auth></Auth>}
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#A9BBF8',
        height:'100%',
    },
});