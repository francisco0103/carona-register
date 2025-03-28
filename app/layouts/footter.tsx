import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <Image style={styles.image} source={require('../../assets/casa.jpg')} />
       <Link href={"/layouts/PassengerRoutesScreen"}> <Image style={styles.image} source={require('../../assets/map.jpg')} />
       </Link>
       <Link href={"/layouts/userperfil"}> <Image style={styles.image} source={require('../../assets/perfil.png')} /></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Cor de fundo preta
    height: 86, // Altura do rodapé
    padding: 1, // Espaçamento interno
    borderTopWidth: 10, // Borda superior
    borderTopColor: '#fff', // Cor da borda
    position: 'absolute', // Fixa o rodapé na parte inferior
    bottom: 0, // Posiciona o rodapé na parte inferior
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita
    justifyContent: 'flex-end', // Alinha o conteúdo na parte inferior do rodapé
  },
  imageContainer: {
    flexDirection: 'row', // Alinha as imagens lado a lado
    justifyContent: 'space-around', // Espaça as imagens uniformemente
    alignItems: 'flex-end', // Alinha as imagens na parte inferior
    height: '100%', // Faz o contêiner ocupar toda a altura do rodapé
  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 5, // Espaço entre a imagem e a borda superior do rodapé
  },
});

export default Footer;