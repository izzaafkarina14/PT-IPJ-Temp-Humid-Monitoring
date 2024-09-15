// For mobile view
if (window.innerWidth <= 768) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.querySelector('.section-header').addEventListener('click', () => {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
    // Activate the first section by default
    sections[0].classList.add('active');
}

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpOqZ74Gx1_0sl3nXF6SWi0XzKX9U0mQ",
  authDomain: "temp-and-humidity-11831.firebaseapp.com",
  databaseURL: "https://temp-and-humidity-11831-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "temp-and-humidity-11831",
  storageBucket: "temp-and-humidity-11831.appspot.com",
  messagingSenderId: "168620513581",
  appId: "1:168620513581:web:9f91f8c538f59d97429ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Ambil referensi ke lokasi data di Firebase
const inP1TempRef = database.ref('/IN/P1/Temperature');
const inP1HumRef = database.ref('/IN/P1/Humidity');
const inP2TempRef = database.ref('/IN/P2/Temperature');
const inP2HumRef = database.ref('/IN/P2/Humidity');
const outP1TempRef = database.ref('/OUT/P1/Temperature');
const outP2TempRef = database.ref('/OUT/P2/Temperature');
const roomP1TempRef = database.ref('/ROOM/P1/Temperature');
const roomP1HumRef = database.ref('/ROOM/P1/Humidity');
const roomP2TempRef = database.ref('/ROOM/P2/Temperature');
const roomP2HumRef = database.ref('/ROOM/P2/Humidity');

// Fungsi untuk memperbarui elemen dengan data baru
function updateData(location, temperature, humidity = null) {
    const tempHumidDiv = document.querySelector(`#${location} .temp-humid`);
    if (humidity !== null) {
        tempHumidDiv.textContent = `${temperature}°C | ${humidity}%`;
    } else {
        tempHumidDiv.textContent = `${temperature}°C`;
    }
}

// Listener real-time untuk IN P1
onValue(inP1TempRef, (snapshot) => {
    const temperature = snapshot.val();
    onValue(inP1HumRef, (humiditySnapshot) => {
        const humidity = humiditySnapshot.val();
        updateData('inP1', temperature, humidity);
    });
});

// Listener real-time untuk IN P2
onValue(inP2TempRef, (snapshot) => {
    const temperature = snapshot.val();
    onValue(inP2HumRef, (humiditySnapshot) => {
        const humidity = humiditySnapshot.val();
        updateData('inP2', temperature, humidity);
    });
});

// Listener real-time untuk OUT P1
onValue(outP1TempRef, (snapshot) => {
    const temperature = snapshot.val();
    updateData('outP1', temperature);
    });

// Listener real-time untuk OUT P2
onValue(outP2TempRef, (snapshot) => {
    const temperature = snapshot.val();
    updateData('outP2', temperature);
    });

// Listener real-time untuk ROOM P1
onValue(roomP1TempRef, (snapshot) => {
    const temperature = snapshot.val();
    onValue(roomP1HumRef, (humiditySnapshot) => {
        const humidity = humiditySnapshot.val();
        updateData('roomP1', temperature, humidity);
    });
});

// Listener real-time untuk IN P2
onValue(roomP2TempRef, (snapshot) => {
    const temperature = snapshot.val();
    onValue(roomP2HumRef, (humiditySnapshot) => {
        const humidity = humiditySnapshot.val();
        updateData('roomP2', temperature, humidity);
    });
});