import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { fetchUserData, UserData } from './userData'; // Importa a função e a interface

const UserProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null); // Estado para armazenar os dados do usuário
  const [loading, setLoading] = useState(true); // Estado para exibir o indicador de carregamento

  const fetchUser = async () => {
    try {
      const data = await fetchUserData(); // Chama a função para buscar os dados
      setUserData(data); // Armazena os dados no estado
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar os dados do usuário.');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    fetchUser(); // Busca os dados do usuário ao carregar o componente
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar os dados do usuário.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome: {userData.name}</Text>
      <Text style={styles.email}>E-mail: {userData.email}</Text>
      <Text style={styles.phone}>Telefone: {userData.phone}</Text>
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
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default UserProfile;