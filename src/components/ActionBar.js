import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../utils/firebase';

export default function ActionBar(props){
    const {showList, setShowList} = props;
    return(
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={()=>firebase.auth().signOut()}>Cerrar Sesion</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:'100%',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        marginBottom:20,
    },
    viewClose:{
        backgroundColor:'#20b480',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30,
    },
    text:{
        fontSize:16,
        color:'#69f558',
        textAlign:'center',
    }
});