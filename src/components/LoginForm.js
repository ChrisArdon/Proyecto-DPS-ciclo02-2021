import React, {useState} from "react";
import {StyleSheet,Text,View,TouchableOpacity,TextInput,} from 'react-native';
import {validateEmail} from '../utils/validations';
import firebase from "../utils/firebase";

export default function LoginForm(props){
    const {changeForm} = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError,setFormError] = useState({});

    const login = () =>{
        let errors = {};
        if(!formData.email || !formData.password){
            if(!formData.email)errors.email = true;
            if(!formData.password)errors.password = true;
        }
        else if (!validateEmail(formData.email)){
            errors.email=true;
        }
        else{
            firebase.auth().signInWithEmailAndPassword(formData.email,formData.password).catch(()=>{
                setFormError({
                    email:true,
                    password:true,
                });
            });
        }
        setFormError(errors);
    };

    const onChange = (e,type) => {
        setFormData({...formData,[type]:e.nativeEvent.text});
    };
    return(
        <>
        <Text style={styles.title}>Accede a tu cuenta</Text>
        
        <TextInput 
        style={[styles.input, formError.email && styles.error]}
        placeholder='Correo electronico'
        //placeholderTextColor='#B632BA'
        onChange={(e) => onChange(e,'email')}></TextInput>
        <TextInput 
        style={[styles.input, formError.password && styles.error]}
        placeholder='Contraseña'
        //placeholderTextColor='#B632BA'
        secureTextEntry={true}
        onChange={(e) => onChange(e,'password')}></TextInput>

        <TouchableOpacity onPress={login} style={styles.btnIniciarSesion}>
            <Text style={styles.btnText}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <View style={styles.register}>
            <Text style={styles.textRegistrar}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={changeForm} style={styles.btnRegistrar}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

function defaultValue(){
    return{
        email:'',
        password:'',
    };
}

const styles = StyleSheet.create({
    input:{
        height:50,
        //color:'#6A2FD3',
        width:'80%',
        marginBottom:25,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        //borderWidth:1,
        //borderColor:'#474747',
    },
    btnText:{
        color:'#fff',
        fontSize:18,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold'
    },
    register:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:30,
    },
    error:{
        borderColor:'#940c0c',
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

    textRegistrar: {
        color: '#5E6798',
        textAlign: 'center',
        fontSize: 18
    },

    title: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    }
});