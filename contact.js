  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDzkQEsm6CMjxhGKMpNlbah9CvGEY-Dk3I",
    authDomain: "wemakers-drd.firebaseapp.com",
    databaseURL: "https://wemakers-drd.firebaseio.com",
    projectId: "wemakers-drd",
    storageBucket: "wemakers-drd.appspot.com",
    messagingSenderId: "456382363497",
    appId: "1:456382363497:web:2cf553409ce5087dc0aff8",
    measurementId: "G-DJ78RVTJNF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
 
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email:email,
    phone:phone,
    message:message
  });
}
