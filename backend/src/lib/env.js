import dotenv from "dotenv";

dotenv.config();
// Debug: Log all environment variables
console.log('🔍 Debug - Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('DB_URL:', process.env.DB_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
};