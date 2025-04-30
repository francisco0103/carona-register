// src/components/driverdata.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definindo a interface para os dados do motorista
export interface DriverData {
  name: string;
  email: string;
  telephone: string;
  type: string;
  password: string;
   carbrand: string;
   carmodel: string;
   caryear: string;
   carplate: string;
}

// Função para salvar dados do motorista
export const saveDriverData = async (driverData: DriverData): Promise<void> => {
  try {
    await AsyncStorage.setItem('driverData', JSON.stringify(driverData));
  } catch (error) {
    console.error('Erro ao salvar dados do motorista:', error);
  }
};

// Função para recuperar dados do motorista
export const getDriverData = async (): Promise<DriverData | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('driverData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Erro ao recuperar dados do motorista:', error);
    return null;
  }
};

// Função para remover dados do motorista
export const removeDriverData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('driverData');
  } catch (error) {
    console.error('Erro ao remover dados do motorista:', error);
  }
};

export default DriverData