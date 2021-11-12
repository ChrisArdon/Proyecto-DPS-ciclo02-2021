import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight, ScrollView, Alert } from "react-native";
import firebase from "../../utils/firebase";
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling:true});

export default function paquetes(){
    const [paquetes, setPaquetes] = useState([])
    
    useEffect(() => {
        firebase.firestore().collection('paquetes').onSnapshot(querySnapShot => {
            const paquetes = [];
            querySnapShot.docs.forEach(doc => {
                const {productos, precio} = doc.data();
                paquetes.push({
                    id: doc.id,
                    productos,
                    precio
                });
            })
            setPaquetes(paquetes)
        })
    })


    return(
        <ScrollView>
            <View>
                <Text style={styles.titulo}>Productos</Text>
            </View>

            <Text style={styles.subtitulo}>Selecciona uno de nuestros paquetes disponibles:</Text>

            {
                paquetes.map(paquete => {
                    return(
                            <View style={styles.contenido}>
                                <View>
                                    <Image source={require('../../../assets/img/icons/IconoPaqueteWhite.png')} style={styles.imagen}/>
                                    
                                </View>

                                <View>
                                    <Text style={styles.textoTitle}>{paquete.productos}</Text>
                                    <View style={styles.precio}>
                                        <Text style={styles.texto}>${paquete.precio}</Text>
                                        <TouchableHighlight>
                                            <View style={styles.button}>
                                                <Text style={styles.buttonText} >Comprar </Text>
                                                <Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>        
                    )
                })
            }
           
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 10,
        color: '#000'
    },

    subtitulo: {
        marginLeft: 20,
        fontSize: 20,
        color: '#000'
    },

    imagen: {
        width: 70,
        height: 70,
        marginRight: 10,
        marginTop: 20,
        tintColor: '#232A43'
    },

    iconoCompra: { 
        tintColor: '#E9ECEF', 
        marginTop: 2,
        width: 30,
        height: 30
    },

    textoTitle: {
        textAlign: 'center',
        fontSize: 20,
        width: 250,
        color: '#000'
    },  

    texto: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#000',
        marginLeft: 20,
        marginTop: 6,
    },

    contenido: {
        height: 135,
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 25,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000'
    },

    botonCompra: {
        marginTop: 5,
        backgroundColor: '#E09F3E',
        borderRadius: 5,
        height: 25,
    },

    botonCompraTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },

    button: {
        backgroundColor: '#E09F3E',
        width: 130,
        height: 38,
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 50
    },

    buttonText: {
        fontSize: 18,
        marginTop: 6,
        marginLeft: 10,
        color: '#E9ECEF',
        fontWeight: 'bold',
        marginRight: 7,
        
    },
    
    precio: {
        flexDirection: 'row',
        marginTop: 10
    }
})
