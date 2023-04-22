import axios from 'axios';

export async function registerUser(userData) {
  try {
    const response = await axios.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUser(credentials) {
  try {
    const response = await axios.post('/api/auth/signin', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function submitOTP(otp, uid) {
  try {
    const response = await axios.post('/api/auth/verify-otp', { otp, uid });
    return response.data;
  } catch (error) {
    console.error('Error submitting OTP:', error);
    throw error;
  }
}

export async function resendOTP(email, phone, primary_contact, uid) {
  try {
    const response = await axios.post('/api/auth/resend-otp', {
      email,
      phone,
      primary_contact,
      uid,
    });
    return response.data;
  } catch (error) {
    console.error('Error resending OTP:', error);
    throw error;
  }
}

export async function refreshJWTToken() {
  try {
    const response = await axios.post(
      '/api/auth/refresh',
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

export async function sendHandymanProfileInfo(data) {
  try {
    const response = await axios.post('/api/auth/set-handyman-profile', data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error Adding Info:', error);
    throw error;
  }
}

export async function sendHandymanIDInfo(data) {
  try {
    const response = await axios.post('/api/auth/upload-id', data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error Adding Info:', error);
    throw error;
  }
}

export async function protectedRoute() {
  try {
    const response = await axios.get('/api/auth/protected', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error resending OTP:', error);
    throw error;
  }
}
