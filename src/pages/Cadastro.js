import { useState, useEffect } from "react";
import { Text, View,StyleSheet,TouchableOpacity,TextInput ,Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Cadastro({navigation}){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setarData] = useState('');
    const [tarefas, setTarefas] = useState([]);
    
    

    async function handleSaveTarefas() {
        const dado ={
            id: String (new Date().getTime()),
            titulo: titulo,
            data: data,
            descricao: descricao 
        }   

        const date = { descricao}
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        console.log(date.descricao)

        const vetDado = [...tarefas, dado]  
        try {
            await AsyncStorage.setItem('TarefaDado', JSON.stringify(vetDado))
        } catch (error) {
            Alert.alert("Não foi possível salvar contato");
        }

        Keyboard.dismiss();      
        setTitulo("");
        setarData("");
        setDescricao("");
        loadDado();       
        
    }
    async function loadDado(){
        try{
            const retorno = await AsyncStorage.getItem('TarefaDado');   
            const dadosTarefas= await JSON.parse( retorno )
            console.log( 'loadDado -> ', retorno)
            console.log( 'loadDado -> ', dadosTarefas);
            
            setTarefas( dadosTarefas|| [] );
        }catch(error){
            Alert.alert("Erro na leitura  dos dados");
        }
    }
    useEffect(() => {
            loadDado();
        }, []);

    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Cursos técnicos integrados são cursos cujo candidato aprovado cursará, juntamente com o ensino médio, o curso técnico escolhido.
            </Text>
            <View style={styles.input_gap}>
            <TextInput
                style= {styles.input}
                placeholder="Titulo"
                value={titulo}
                onChangeText={setTitulo}
                />
                <TextInput
                style= {styles.input}
                value={descricao}
                placeholder="Descrição"
                onChangeText={setDescricao}
                />
                <TextInput
                style= {styles.input}
                value={data}
                placeholder="Data"
                keyboardType= "number"
                onChangeText={setarData}

                />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>{handleSaveTarefas()}}
            >
            <Text style={styles.button_text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        
    )   
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingTop: 25,
        gap:10,
    },
    texto:{
        color: '#00000',
        fontSize: 18,
        padding: 20,
        textAlign: "center",    
    },
    input:{
        width:280,
        height:40,
        paddingLeft:10,
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        borderColor:'#00000',
        color:'#00000',
        marginBottom: 20,
        borderWidth:1
    },
    input_gap:{
        marginTop:20
    },
    button_text:{
        fontWeight:"700",
        fontSize:18,
        color:"#FFFFFF"
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1DB863",
        width:280,
        height:40,
        borderRadius:5
    }
});