import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

// Definindo a interface para as rotas
interface Location {
  id: string;
  name: string;
}

const PassengerRoutesScreen = () => {
  const [routes, setRoutes] = useState<Location[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const storedRoutes = await AsyncStorage.getItem('driverRoutes');
        if (storedRoutes) {
          setRoutes(JSON.parse(storedRoutes));
        }
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotas Disponíveis</Text>
      <FlatList
        data={routes}
        renderItem={({ item }) => (
          <View style={styles.routeItem}>
            <Text style={styles.routeText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  routeItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  routeText: {
    fontSize: 18,
  },
});

export default PassengerRoutesScreen;