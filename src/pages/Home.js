import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { CardButton } from "../components/CardButton";
export function Home({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Estudo de Navegação</Text>
            <View style={styles.menu}>
                <CardButton texto={"Curso Técnicos"} onPress={()=> navigation.navigate('login')}/>
                <CardButton texto={"Cursos Superiores"} onPress={()=> navigation.navigate('Page2')}/>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#005c81',
        paddingTop: 25,
    },
    menu:{
        width: '70%',
    },
    titulo:{
        color: '#FFFFFF',
        fontSize: 20
    }


});