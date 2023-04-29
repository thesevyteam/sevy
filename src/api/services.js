import axios from 'axios';

export async function addService(details) {
  try {
    const response = await axios.post(`/api/lbs/services`, details, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function getUserServices(uid) {
  try {
    const response = await axios.get(`/api/lbs/${uid}/services`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function getTopServices(geohash) {
  try {
    const response = await axios.get(
      `/api/lbs/services/top?geohash=${geohash}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
