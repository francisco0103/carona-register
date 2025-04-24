import { MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveDriverData } from './driverData';

const Passenger = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
const handleRegister = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    // Aqui é onde você vai fazer a requisição para o banco de dados
    if (!response.ok) {
      throw new Error('Erro ao cadastrar motorista');
    }
    const driverData = { name, email, phone, password }; // Define os dados do motorista
    await saveDriverData(driverData); // Salva os dados usando a função importada
    console.log('Certo', response);
    Alert.alert('Cadastro realizado!', 'Os dados do motorista foram salvos com sucesso!');
    router.push('layouts/footer'); // Navega para a próxima página
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível salvar os dados.');
  }
};

// Removed duplicate handleRegister function

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/">
          <MaterialIcons name='arrow-back' color='#fff' size={32} />
        </Link>
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
    borderRadius: 2,
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
bottom: 0,
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



function setUserData(data: any) {
  throw new Error('Function not implemented.');
}

