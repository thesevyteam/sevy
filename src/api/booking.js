import axios from 'axios';

export async function addService(details) {
  try {
    console.log(details);
    const response = await axios.post(`/api/lbs/services`, details, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
