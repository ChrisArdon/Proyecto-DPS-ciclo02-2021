import React,{useState} from "react";
import {StyleSheet,Text,TouchableOpacity,TextInput,View,} from 'react-native';
import {validateEmail} from '../utils/validations';
import firebase from "../utils/firebase";

export default function RegisterForm(props){
    const {changeForm} = props;
    const [formData,setFormData] = useState(defaultValue());
    const [formError,setFormError] = useState({});

    const register = () => {
        let errors = {};
        if(!formData.email || !formData.password || !formData.repeatPassword){
            if(!formData.email) errors.email = true;
            if(!formData.password) errors.password = true;
            if(!formData.repeatPassword) errors.repeatPassword = true;
        }
        else if(formData.password !== formData.repeatPassword){
            errors.password = true;
            errors.repeatPassword = true;
        }
        else if(formData.password.length < 6){
            errors.password = true;
            errors.repeatPassword = true;
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password).catch(() => {
                setFormError({
                    email:true,
                    password:true,
                    repeatPassword:true,
                });
            });
        }
        setFormError(errors);
    };

    return(
        <>
        <TextInput style={[styles.input, formError.email && styles.error]}
        placeholder='Correo electronico'
        placeholderTextColor='#A49343'
        onChange={(e)=>setFormData({...formData,email: e.nativeEvent.text})}></TextInput>

        <TextInput style={[styles.input, formError.password && styles.error]}
        placeholder='Contraseña'
        placeholderTextColor='#A49343'
        secureTextEntry={true}
        onChange={(e)=>setFormData({...formData,password: e.nativeEvent.text})}></TextInput>

        <TextInput style={[styles.input, formError.repeatPassword && styles.error]}
        placeholder='Repetir contraseña'
        placeholderTextColor='#A49343'
        secureTextEntry={true}
        onChange={(e)=>setFormData({...formData,repeatPassword: e.nativeEvent.text})}></TextInput>
        <TouchableOpacity onPress={register}>
            <Text style={styles.btnText}>Registrate</Text>
        </TouchableOpacity>

        <View>
            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btnText}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

function defaultValue(){
    return{
        email:'',
        password:'',
        repeatPassword:'',
    };
}

const styles = StyleSheet.create({
    btnText:{
        color:'#fff',
        fontSize:18,
    },
    input:{
        height:50,
        color:'#68c876',
        width:'80%',
        marginBottom:25,
        backgroundColor:'#DE19BB',
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        borderWidth:1,
        borderColor:'#1CD67E',
    },
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10,
    },
    error:{
        borderColor:'#8AE6EE',
    }
});