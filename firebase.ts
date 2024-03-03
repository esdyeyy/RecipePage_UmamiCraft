import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDwCqqwf2rWNJ4X0ONqDYfV7Cz5OfP3nes',
  authDomain: 'umami-469a0.firebaseapp.com',
  projectId: 'umami-469a0',
  storageBucket: 'umami-469a0.appspot.com',
  messagingSenderId: '850664679290',
  appId: '1:850664679290:android:65c22d3c6fc5bb494458c3',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default firebaseApp;
export { database };