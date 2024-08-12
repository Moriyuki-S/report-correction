import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let app: FirebaseApp;
let analytics: Analytics;
let googleAuthProvider: GoogleAuthProvider;

if (typeof window !== "undefined" && !getApps().length) {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    googleAuthProvider = new GoogleAuthProvider();
}

export { app, analytics, googleAuthProvider };