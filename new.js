import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

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
const contactFormDB = ref(db, "bookings"); // Reference to "bookings" collection in Firebase

console.log("Firebase initialized successfully!");

// Event Listener for Submit Button
document.getElementById("cancelBtn").addEventListener("click", back);
document.getElementById("submitBtn").addEventListener("click", submitBooking);

function back(){
   
        window.history.back();
   
}


function submitBooking() {
    // Get form values
    var patientName = getElementVal("patientName");
    var age = getElementVal("age");
    var mobile = getElementVal("mobile");
    var day = getElementVal("day");
    var time = getElementVal("time");

    // Validate Input
    if (!patientName || !age || !mobile || !day || !time) {
        alert("Please fill in all fields");
        return;
    }

    ////############
    const doctor_name = localStorage.getItem("doctorName");
    console.log(doctor_name); // Outputs: Hello, World!
    // Format Data as String for Saving to File
    var reservationData = `doctor :${doctor_name}\nPatient Name: ${patientName}\nAge: ${age}\nMobile: ${mobile}\nDay: ${day}\nTime: ${time}`;
    
    // Save to Firebase
    saveMessages(patientName, age, mobile, day, time,doctor_name);

    // Save to File
   // saveToFile(reservationData);
}

// Save Data to Firebase
const saveMessages = (patientName, age, mobile, day, time,doctor_name) => {
    const newContactForm = push(contactFormDB); // Create a new unique entry

    set(newContactForm, {
        doctor :doctor_name,
        name: patientName,
        age: age,
        mobile: mobile,
        day: day,
        time: time
    })
    .then(() => {
        console.log("Data saved successfully!");
        alert("Your reservation has been completed successfully!");
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
        alert("Failed to save reservation. Please try again.");
    });
};

// Helper Function to Get Form Input Values
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// Save Data to a Local File
function saveToFile(reservationData) {
    var blob = new Blob([reservationData], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "SAVE.TXT";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Your reservation has been saved to SAVE.TXT");
}


