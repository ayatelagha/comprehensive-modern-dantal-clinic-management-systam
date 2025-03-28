import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPpGpOfr0ALEmwJLouZCxpcanwMnxMztI",
  authDomain: "modern-dental-clinic-36e83.firebaseapp.com",
  databaseURL: "https://modern-dental-clinic-36e83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "modern-dental-clinic-36e83",
  storageBucket: "modern-dental-clinic-36e83.firebasestorage.app",
  messagingSenderId: "914277993813",
  appId: "1:914277993813:web:2683fd025888ba83b033dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const contactFormDB = ref(db, "bookings");

// Retrieve and Display Data from Firebase
function fetchBookings() {
    onValue(contactFormDB, (snapshot) => {
        const bookingsList = document.getElementById("bookingsList");
        bookingsList.innerHTML = ""; // Clear previous content

        snapshot.forEach((childSnapshot) => {
            const booking = childSnapshot.val();
            const bookingItem = document.createElement("div");
            bookingItem.classList.add("booking-card");

            bookingItem.innerHTML = `
                <h3>${booking.name}</h3>
                <p><strong>Age:</strong> ${booking.age}</p>
                <p><strong>Mobile:</strong> ${booking.mobile}</p>
                <p><strong>Day:</strong> ${booking.day}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
            `;

            bookingsList.appendChild(bookingItem);
        });
    });
}


// Load Bookings on Page Load
window.onload = fetchBookings;
