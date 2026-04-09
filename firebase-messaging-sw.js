importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAvY09SYk1EvyfBuFVDC6Y14oxg_okokVo",
  authDomain: "rafeeqalber.firebaseapp.com",
  projectId: "rafeeqalber",
  storageBucket: "rafeeqalber.firebasestorage.app",
  messagingSenderId: "525633660631",
  appId: "1:525633660631:web:d4ee8de458ba9c72d8b292"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('إشعار جديد في الخلفية:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.postimg.cc/6qvp47vN/shʿar-aljmʿyt.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
