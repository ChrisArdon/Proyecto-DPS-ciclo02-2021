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
        <Text style={styles.title}>Crea una cuenta</Text>
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
        <TouchableOpacity onPress={register} style={styles.btnRegistrar}>
            <Text style={styles.btnText}>Registrate</Text>
        </TouchableOpacity>

        <View>
            <Text style={styles.textIniciarSesion}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={changeForm} style={styles.btnIniciarSesion}>
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
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold'
    },
    input:{
        height:50,
        //color:'#fff',
        width:'80%',
        marginBottom:18,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        //borderWidth:1.5,
        //borderColor:'#000',
    },
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10,
    },
    error:{
        borderColor:'#8AE6EE',
    },

    title: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    },

    btnRegistrar: {
        width: 250,
        height: 45,
        backgroundColor: '#E09F3E',
        marginVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        alignSelf: 'center'
    },

    btnIniciarSesion: {
        width: 250,
        height: 45,
        backgroundColor: '#000',
        marginVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        alignSelf: 'center'
    },

    textIniciarSesion: {
        color: '#5E6798',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 25
    }
});