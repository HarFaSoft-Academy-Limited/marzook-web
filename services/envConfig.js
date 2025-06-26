const { VITE_APP_BASE_URL } = process.env;

const envConfig = {
    baseUrl: VITE_APP_BASE_URL || 'https://988e-197-210-76-74.ngrok-free.app',
  };
  
  export default envConfig;