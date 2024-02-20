import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.farmworld',
  appName: 'farmworld',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
