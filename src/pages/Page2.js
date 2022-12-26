
import { View,Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardButton } from "../components/CardButton";


export function Page2({ navigation, route }){
    const [tarefas, setTarefas] = useState([]);
    useEffect(() => {
        loadDado();
    }, []);

    async function loadDado(){
        try{
            const retorno = await AsyncStorage.getItem('TarefaDado');   
            const dadosTarefas= await JSON.parse( retorno )
            console.log( 'loadDado -> ', dadosTarefas);
            setTarefas( dadosTarefas|| [] );
        }catch(error){
            Alert.alert("Erro na leitura  dos dados");
        }
    }
    
    return(
        <View style={styles.container}>
            <View>
            <FlatList data={tarefas}
            keyExtractor={item => item.id}
            renderItem={({item})=>{
                <View>
                <Text>{item.titulo}</Text>
                <Text>{item.descricao}</Text>
                <Text>{item.data}</Text>
                </View>
            }

            }
            />
            </View>

                <CardButton  texto={"Cadastrar"} onPress={()=> navigation.navigate('Cadastro')}/>

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
})