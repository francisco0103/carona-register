export interface UserData {
  name: string;
  email: string;
}

export const fetchUserData = async (): Promise<UserData> => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Inclua o token de autenticação, se necessário
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do usuário');
    }

    const data = await response.json();
    return {
      name: data.name,
      email: data.email,
    }; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    throw error;
  }
};