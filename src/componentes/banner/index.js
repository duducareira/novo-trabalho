import { Text, View, Image } from "react-native"
import styles from './styles';


export default function Banner(){
    return (

        <>
            <Text style={styles.textBanner}> Em cartaz </Text>

            <Image style={styles.imageBanner} source={require(`../../../assets/netflix.jpg`)} />
            
        </>
    );
}