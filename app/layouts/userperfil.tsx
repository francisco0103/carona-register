import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

// Definindo a interface para o usuário
interface User {
  name: string;
  email: string;
  phone: string;
}

// Definindo o tipo para as props do componente
interface UserProfileProps {
  navigation: StackNavigationProp<any>; // Altere 'any' para o tipo específico do seu stack, se necessário
}

const UserProfile: React.FC<UserProfileProps> = ({ navigation }) => {
  const [user, setUser ] = useState<User | null>(null); // Definindo o tipo do estado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser  = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser (JSON.parse(userData));
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser (); // Chama a função corrigida
  }, []);

  const handleLogout = async () => {
    // Limpa os dados do usuário do AsyncStorage
    await AsyncStorage.removeItem('user');
    // Redireciona para a tela inicial ou de login
    navigation.navigate('Home'); // Altere 'Home' para o nome da sua tela inicial
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    return <Text>Usuário não encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name || 'Nome não disponível'}</Text>
      <Text style={styles.email}>{user.email || 'Email não disponível'}</Text>
      <Text style={styles.phone}>{user.phone || 'Telefone não disponível'}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    marginVertical: 10,
  },
  phone: {
    fontSize: 18,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UserProfile;