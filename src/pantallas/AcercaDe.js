import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AcercaDe(){
    return(
            <View style={styles.contenido}>
                <Text>Pantalla Acerca de</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        backgroundColor: '#FFBF69'
    }
})