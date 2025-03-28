import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Definindo a interface para os locais
interface Location {
  id: string;
  name: string;
}

// Array de locais tipado
const initialLocations: Location[] = [];

const MapScreen = () => {
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [capacity, setCapacity] = useState<number>(1); // Capacidade inicial
  const [newLocation, setNewLocation] = useState<string>(''); // Local a ser adicionado

  const addLocation = () => {
    if (newLocation.trim()) {
      const newLoc: Location = {
        id: (locations.length + 1).toString(),
        name: newLocation,
      };
      setLocations([...locations, newLoc]);
      setNewLocation(''); // Limpa o campo de entrada
    } else {
      Alert.alert('Erro', 'Por favor, insira um nome para o local.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locais do Motorista</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicionar novo local"
        value={newLocation}
        onChangeText={setNewLocation}
      />
      <TouchableOpacity onPress={addLocation} style={styles.addButton}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.capacityTitle}>Capacidade do Carro:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={capacity.toString()}
        onChangeText={(text) => setCapacity(Number(text))}
      />

      <Text style={styles.capacityInfo}>Capacidade atual: {capacity} pessoas</Text>

      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{item.name}</Text>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 20,
  },
  capacityTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  capacityInfo: {
    fontSize: 16,
    marginBottom: 20,
  },
  locationItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  locationText: {
    fontSize: 18,
  },
});

export default MapScreen;