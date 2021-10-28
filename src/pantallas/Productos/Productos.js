import React, {useState} from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight, ScrollView, Alert } from "react-native";

import Compras from '../Compras/Compras';

export default function Productos(){
    const nombre = "Fresa";
    const precioU = 1.00;
    const [count1, setCount1] = useState(0);
    const contadorMas = () => setCount1(count1 + 1);
    const contadorMenos = () => setCount1(count1 - 1);

    const [count2, setCount2] = useState(0);
    const contadorMas2 = () => setCount2(count2 + 1);
    const contadorMenos2 = () => setCount2(count2 - 1);

    const [count3, setCount3] = useState(0);
    const contadorMas3 = () => setCount3(count3 + 1);
    const contadorMenos3 = () => setCount3(count3 - 1);

    const validar = () => {
        if(count1 == 0)
        {
            Alert.alert('Error', 'No se ha seleccionado una cantidad a comprar del producto', [{Text: 'OK'}]);
            return;
        }
    }

    return(
        <ScrollView>
            <View>
                <Text style={styles.titulo}>Productos</Text>
            </View>

            <View style={styles.busqueda}>
                <Image source={require("../../../assets/img/icons/IconoBuscar.png")} />
                <TextInput placeholder="Búsqueda" style={styles.input} />
            </View>


            <View style={styles.lista}>
                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/Strawberries.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>{nombre}</Text>
                            <Text style={styles.texto}>${precioU}</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count1 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                            
                        </View>
                    </View>
                    
                </View>

                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/Chocolate.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>Chocolate</Text>
                            <Text style={styles.texto}>$1.50</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas2}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count2 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos2}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/Eggs.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>Huevos</Text>
                            <Text style={styles.texto}>$1.00</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas3}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count3 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos3}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/leche.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>Leche</Text>
                            <Text style={styles.texto}>$2.75</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas3}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count3 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos3}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/fanta.jpg')} style={styles.imagen}/>
                            <Text style={styles.texto}>Fanta</Text>
                            <Text style={styles.texto}>$0.60</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas3}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count3 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos3}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.itemLista}>
                    <View style={styles.contenido}>
                        <View>
                            <Image source={require('../../../assets/img/dulce1.png')} style={styles.imagen}/>
                            <Text style={styles.texto}>Chiclin</Text>
                            <Text style={styles.texto}>$0.10</Text>
                        </View>

                        <View>
                            <TouchableHighlight onPress={contadorMas3}><Image source={require('../../../assets/img/icons/IconoAgregar.png')} resizeMode='contain' style={[styles.iconoMas, styles.icono]}/></TouchableHighlight>
                            <Text style={styles.texto}>{count3 || null}</Text>
                            <TouchableHighlight onPress={contadorMenos3}><Image source={require('../../../assets/img/icons/IconoRestar.png')} resizeMode='contain' style={[styles.iconoMenos, styles.icono]}/></TouchableHighlight>
                            <TouchableHighlight onPress={() => validar()}><Image source={require('../../../assets/img/icons/IconoAgregarCompra.png')} resizeMode='contain' style={[styles.iconoCompra, styles.icono]}/></TouchableHighlight>
                        </View>
                    </View>
                </View>

            </View>

        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        marginLeft: 20,
        marginVertical: 15,
        color: '#000'
    },

    busqueda: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 10
    },

    input: {
        height: 40,
        width: 300,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom: 7,
        padding: 10,
        fontSize: 18
      },

    lista: {
        flexBasis: '49%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },

    itemLista: {
        marginTop: 25
    },

    imagen: {
        width: 120,
        height: 120,
        marginRight: 10
    },

    icono: {
        width: 30,
        height: 30,
        
    },

    iconoMas: { tintColor: '#343A40' },
    iconoMenos: { tintColor: '#6C757D' },
    iconoCompra: { tintColor: '#E09F3E', marginTop: 10 },

    texto: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000'
    },

    contenido: {
        flexDirection: 'row'
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
    }
})
