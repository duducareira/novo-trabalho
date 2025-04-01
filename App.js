import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/componentes/cabecalho';
 
export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);
 
  return (
    <View  style={styles.container}>
      

      <Cabecalho/>
      {/* FIM CABEÇALHO */}
      {/* INICIO BARRA DE PESQUISA */}
      <View style={styles.containerSearch}>
        <TextInput style={styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
      </View>
      {/* FIM BARRA DE PESQUISA */}
     
         {/* INICIO DO BANNER */}
        <Text style={styles.textBanner}> Em cartaz </Text>
 
        <Image style={styles.imageBanner} source = {require(`./assets/Starwars.jpg`)}/>
        {/* FIM DO BANNER */}
     
   
 
    </View>
 
  );
 
}
 

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 10,
  },
  textHeader: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 75,
  },
 
  containerSearch: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: "white",
    marginTop: 30,
    alignItems: "center",
    borderRadius: 3
  },
  inputSearch: {
    height: 35,
    width: '100%',
    marginLeft: 5
  },
  imageBanner: {
    width: '90%',
    height: 200,
    marginTop: 15,
    borderRadius: 10
  },
 
  textBanner: {
    fontSize: 30,
    color: 'white',
    marginTop: 15,
    marginLeft: -180,
    fontWeight: 'Bold'
  }
 
});