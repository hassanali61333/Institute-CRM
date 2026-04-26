// Import Firebase scripts from CDN
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase inside SW
firebase.initializeApp({
  apiKey: "AIzaSyAX4e_onkruzTfIMqNadhGWj4FCAoZnyRU",
  authDomain: "app-fit-d6b6b.firebaseapp.com",
  projectId: "app-fit-d6b6b",
  storageBucket: "app-fit-d6b6b.firebasestorage.app",
  messagingSenderId: "214389237344",
  appId: "1:214389237344:web:d47572992f40d1adb80505",
  measurementId: "G-8X8G66MPS0"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'Background Message';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
