import {Text, View, TextInput} from "react-native";

export default function Pesquisa(){
    
    return(
    <View style={styles.containerSearch}>
    <TextInput style={styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
  </View>
)
}
