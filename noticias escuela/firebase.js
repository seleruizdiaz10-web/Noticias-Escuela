import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB83UXHUqOmp1mXPswp9X9ehXfdq_lS5pQ",
  authDomain: "noticias-escuela-819b9.firebaseapp.com",
  projectId: "noticias-escuela-819b9",
  storageBucket: "noticias-escuela-819b9.firebasestorage.app",
  messagingSenderId: "1049602390689",
  appId: "1:1049602390689:web:bf009026ba31a9564a4ee0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);