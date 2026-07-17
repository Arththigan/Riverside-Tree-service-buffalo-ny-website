import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDIdRr5Dnh-Tcv92ZEEbX9ILptazJUXmgM",
  authDomain: "riverside-tree-service-6f7d3.firebaseapp.com",
  projectId: "riverside-tree-service-6f7d3",
  storageBucket: "riverside-tree-service-6f7d3.firebasestorage.app",
  messagingSenderId: "393953226482",
  appId: "1:393953226482:web:dc50566ae9b21c2a2b2a6b",
  measurementId: "G-0CJYJ12DPB",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
