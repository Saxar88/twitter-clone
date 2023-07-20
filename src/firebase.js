import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBnHOu8I05yPOyQCk9FwbAQXqg3DzzKz8Q',
	authDomain: 'twitter-clone-61a1d.firebaseapp.com',
	projectId: 'twitter-clone-61a1d',
	storageBucket: 'twitter-clone-61a1d.appspot.com',
	messagingSenderId: '469094856959',
	appId: '1:469094856959:web:5a49bb4891f4d3337b74ca',
	measurementId: 'G-7694QXP89X',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
