import React from "react";
import { View,Text,StyleSheet } from "react-native";


export function Login(){
    return(
        <View>
            <Text style={styles.texto}>
                Cursos técnicos integrados são cursos cujo candidato aprovado cursará, juntamente com o ensino médio, o curso técnico escolhido.
            </Text>
        </View>
    )   
}


const styles = StyleSheet.create({
    texto:{
        color: '#FFFFFF',
        fontSize: 18,
        padding: 20,
        textAlign: "center",    
    }
});