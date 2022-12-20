import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
export function CardButton({texto,onPress}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d40f60',
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 5,
    },  
    texto:{
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold   '
    }
});