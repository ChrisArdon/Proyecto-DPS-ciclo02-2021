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
        <TextInput 
        style={[styles.input, formError.email && styles.error]}
        placeholder='Correo electronico'
        placeholderTextColor='#B632BA'
        onChange={(e) => onChange(e,'email')}></TextInput>
        <TextInput 
        style={[styles.input, formError.password && styles.error]}
        placeholder='Contraseña'
        placeholderTextColor='#B632BA'
        secureTextEntry={true}
        onChange={(e) => onChange(e,'password')}></TextInput>

        <TouchableOpacity onPress={login}>
            <Text style={styles.btnText}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <View style={styles.register}>
            <TouchableOpacity onPress={changeForm}>
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
        color:'#6A2FD3',
        width:'80%',
        marginBottom:25,
        backgroundColor:'#A06C91',
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        borderWidth:1,
        borderColor:'#BD305E',
    },
    btnText:{
        color:'#FFFFFF',
        fontSize:18,
    },
    register:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10,
    },
    error:{
        borderColor:'#940c0c',
    },
});