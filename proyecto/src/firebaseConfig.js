import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJM7fyDQTPTXYGexIoJPSUuNRU7NKjTKY",
  authDomain: "cartasapi.firebaseapp.com",
  projectId: "cartasapi",
  storageBucket: "cartasapi.firebasestorage.app",
  messagingSenderId: "1034303493107",
  appId: "1:1034303493107:web:de24c39e879efa1d1f3886"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };