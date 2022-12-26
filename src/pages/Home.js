import { useState,useEffect} from 'react';
import { View, Text, Image,StyleSheet, TextInput } from "react-native";
import { CardButton } from "../components/CardButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home({ navigation }){
 


    
    const [text, onChangeText] = useState(null);
    const [password1, onChangePassword] = useState(null);
    return(
        <View style={styles.container}>
            <Image
            style = {styles.image}
            source={require('../images/Rectangle6.png')}
            />
            <Text style={styles.titulo}>Agenda</Text>
            <Text style={styles.titulo}>IFRN</Text>
            <View style={styles.input_gap}>
            <TextInput
                style= {styles.input}
                placeholder="Usuario"
                onChangeText={onChangeText}
                value = {text}
                />
                <TextInput
                style= {styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value = {password1}
                onChangeText={onChangePassword}
                />
            </View>
            <View style={styles.menu}>
                
                <CardButton style={styles.button} texto={"Entrar"} onPress={()=> navigation.navigate('Cadastro')}/>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1DB863',
        paddingTop: 25,
        gap:10,
    },
    menu:{
        width: '70%',
    },
    titulo:{
        color: '#FFFFFF',
        fontSize: 36
    },
    image:{
        width:80,
        height:100,
        marginTop: 100,
        marginBottom: 20,
    },
    input:{
        width:280,
        height:40,
        paddingLeft:10,
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        borderColor:'#000000',
        marginBottom: 20,
    },
    input_gap:{
        marginTop:20
    },
    button:{
        backgroundColor:"#666666",
        color:"#FFFFFF"
    }

});