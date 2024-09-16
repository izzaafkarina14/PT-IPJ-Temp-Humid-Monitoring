// For mobile view
if (window.innerWidth <= 768) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.querySelector(".section-header").addEventListener("click", () => {
      sections.forEach((s) => s.classList.remove("active"));
      section.classList.add("active");
    });
  });
  // Activate the first section by default
  sections[0].classList.add("active");
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
// import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpOqZ74Gx1_0sl3nXF6SWi0XzKX9U0mQ",
  authDomain: "temp-and-humidity-11831.firebaseapp.com",
  databaseURL:
    "https://temp-and-humidity-11831-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "temp-and-humidity-11831",
  storageBucket: "temp-and-humidity-11831.appspot.com",
  messagingSenderId: "168620513581",
  appId: "1:168620513581:web:9f91f8c538f59d97429ba4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Mengambil referensi data dari firebase
let database = firebase.database();

// Ambil referensi ke lokasi data di Firebase
let inP1TempRef = database.ref("IN/P1/Temperature");
let inP1HumRef = database.ref("IN/P1/Humidity");
let inP2TempRef = database.ref("IN/P2/Temperature");
let inP2HumRef = database.ref("IN/P2/Humidity");
let outP1TempRef = database.ref("OUT/P1/Temperature");
let outP2TempRef = database.ref("OUT/P2/Temperature");
let roomP1TempRef = database.ref("ROOM/P1/Temperature");
let roomP1HumRef = database.ref("ROOM/P1/Humidity");
let roomP2TempRef = database.ref("ROOM/P2/Temperature");
let roomP2HumRef = database.ref("ROOM/P2/Humidity");

// ambil data IN
inP1TempRef.on("value", function (getdata1) {
  let temp = getdata1.val();
  document.getElementById("temperature-in-p1").innerHTML = temp + "&#8451";
});

inP1HumRef.on("value", function (getdata2) {
  let humi = getdata2.val();
  document.getElementById("humidity-in-p1").innerHTML = humi + "%";
});

inP2TempRef.on("value", function (getdata3) {
  let temp = getdata3.val();
  document.getElementById("temperature-in-p2").innerHTML = temp + "&#8451";
});

inP2HumRef.on("value", function (getdata4) {
  let humi = getdata4.val();
  document.getElementById("humidity-in-p2").innerHTML = humi + "%";
});

// AMBIL DATA OUT
outP1TempRef.on("value", function (getdata5) {
  let temp = getdata5.val();
  document.getElementById("temperature-out-p1").innerHTML = temp + "&#8451";
});

outP2TempRef.on("value", function (getdata6) {
  let temp = getdata6.val();
  document.getElementById("temperature-out-p2").innerHTML = temp + "&#8451";
});

// AMBIL DATA ROOM
roomP1TempRef.on("value", function (getdata7) {
  let temp = getdata7.val();
  document.getElementById("temperature-room-p1").innerHTML = temp + "&#8451";
});

roomP1HumRef.on("value", function (getdata8) {
  let humi = getdata8.val();
  document.getElementById("humidity-room-p1").innerHTML = humi + "%";
});

roomP2TempRef.on("value", function (getdata9) {
  let temp = getdata9.val();
  document.getElementById("temperature-room-p2").innerHTML = temp + "&#8451";
});

roomP2HumRef.on("value", function (getdata10) {
  let humi = getdata10.val();
  document.getElementById("humidity-room-p2").innerHTML = humi + "%";
});
