import { initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN0nxwzEcPZrJVxgNhwvtDSgCC1i5_4Wo",
  authDomain: "portfolio-f6467.firebaseapp.com",
  projectId: "portfolio-f6467",
  storageBucket: "portfolio-f6467.firebasestorage.app",
  messagingSenderId: "290179611028",
  appId: "1:290179611028:web:ca8fcf75ca3b8d638eb781",
  measurementId: "G-DBYF5Q8KWD"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
