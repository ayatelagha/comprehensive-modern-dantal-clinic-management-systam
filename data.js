
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//import "firebase/firestore";

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



console.log("Firebase initialized successfully!");


document.getElementById("submitBtn").addEventListener("click", submitBooking);

function saveToFie(reservationData) {    

  var blob = new Blob([reservationData], { type: "text/plain" });
    
    // Create a temporary anchor element
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "SAVE.TXT";
    
    // Append anchor to body, trigger click, then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert('Your reservation has been completed successfully and saved to SAVE.TXT');
} 




function submitBooking() {
    // Get form values
    var patientName = getElementVal("patientName");
    var age = getElementVal("age");
    var mobile = getElementVal("mobile");
    var day=getElementVal("day");
    var time =getElementVal("time");
    
    // Format data as a string
    var reservationData = `Patient Name: ${patientName}\nAge: ${age}\nMobile: ${mobile}\nDay: ${day}\nTime: ${time}`;
    saveMessages = (patientName,age , mobile,day,time );
    // Create a Blob object containing the data
    if (!patientName || !age || !mobile || !day || !time) {
        alert('Please fill in all fields');
        return;
    }





  

    saveToFie(reservationData)



    
   // alert('Your reservation has been completed successfully:\n name:'+ patientName +'\n age: '+ age +'\n mobile:'+mobile+'\n time:'+time+ '\n Day: '+ day ) ;
}


function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('name').value = '';
    document.getElementById('time').value = '';
}


const saveMessages = (patientName,age , mobile ,day ,time ) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: patientName,
      age :age,
      mobile: mobile,
      day: day,
      time:time,

    });
    console.log('svaed ssuuuu');
  };
  


  const getElementVal = (patientName) => {
    return document.getElementById(patientName).value;
  };


