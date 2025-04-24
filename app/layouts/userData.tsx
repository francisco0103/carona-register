export interface UserData {
    name: string;
    email: string;
    phone: string; // Adicione outros campos conforme necessário
  }
  
  export const fetchUserData = async (): Promise<UserData> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do usuário');
      }
  
      const data = await response.json();
      return data; // Retorna os dados do usuário
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      throw error;
    }
  };