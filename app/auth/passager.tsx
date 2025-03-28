import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Passenger = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if (name && email && phone && password) {
      const user = { name, email, phone, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert('Cadastro realizado!', `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`);
      router.push('/layouts/footter');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' color='#fff' size={32} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cadastro de Passageiro</Text>
      </View>
      <Text style={styles.subHeaderText}>Vamos Realizar Seu Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#000000"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#000000"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 86,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    padding: 30,
    color: '#fff',
    fontSize: 22,
    marginLeft: 10,
  },
  subHeaderText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Passenger;



