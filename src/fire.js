import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAX4e_onkruzTfIMqNadhGWj4FCAoZnyRU",
  authDomain: "app-fit-d6b6b.firebaseapp.com",
  projectId: "app-fit-d6b6b",
  storageBucket: "app-fit-d6b6b.firebasestorage.app",
  messagingSenderId: "214389237344",
  appId: "1:214389237344:web:d47572992f40d1adb80505",
  measurementId: "G-8X8G66MPS0"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
export const getFirebaseToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("Notification permission not granted");
      return null;
    }
    const swRegistration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    const fcmToken = await getToken(messaging, {
      vapidKey:
        "BHi6fsHZZS1r-yWfa5OCETit4hTc9TezRysxIBXhGO03ZK0Qax_12nuu-xBXlCKXWY2RWVUtXzq1KtZ7wW1AVhU",
      serviceWorkerRegistration: swRegistration
    });
    console.log("FCM Token:", fcmToken);
    return fcmToken;
  } catch (err) {
    console.error("Error getting Firebase token:", err);
    return null;
  }
};

export { app, analytics, messaging };
