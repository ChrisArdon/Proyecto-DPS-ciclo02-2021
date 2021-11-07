import React, {useState} from "react";
import {StyleSheet,View,Text,Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin(!isLogin);
    };

    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../../assets/img/logo.png')}></Image>
            {isLogin?(
                <LoginForm changeForm={changeForm}></LoginForm>
            ):(
                <RegisterForm changeForm={changeForm}></RegisterForm>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#43A720',
    },
    logo:{
        width:'80%',
        height:140,
        marginTop:50,
        marginBottom:50,
    },
});