import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";


export default function Filmes() {
    return (
        <>
            <TouchableOpacity style={styles.containerFilmes}>

                <Image style={styles.images} source={require(`../../../assets/Starwars.jpg`)} />
                <Text style={styles.titulo}>Star Wars</Text>

                <Text style={styles.textNota}>10</Text>
                
                <Image style={styles.images} source={require(`../../../assets/Starwars2.jpg`)} />
                <Text style={styles.titulo}>Star Wars 2</Text>

                <Text style={styles.textNota}>9.5</Text>

            </TouchableOpacity>

        </>

    )
}