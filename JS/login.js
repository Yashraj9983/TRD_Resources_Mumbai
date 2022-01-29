// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyDnStfRyi45PQg_0fWbXSBDA0Kd0V6BS-k",
    authDomain: "pdf-db-8e1a7.firebaseapp.com",
    databaseURL: "https://pdf-db-8e1a7-default-rtdb.firebaseio.com",
    projectId: "pdf-db-8e1a7",
    storageBucket: "pdf-db-8e1a7.appspot.com",
    messagingSenderId: "6672489999",
    appId: "1:6672489999:web:d0551eba5f742319584d7a",
    measurementId: "G-JZ5Z7HNS5F"
  };
  
firebase.initializeApp(config);

function checkUserData() {
    var name= document.getElementById('user').value;
    var password= document.getElementById('password').value;
    if(name==""){
        document.getElementById('success').innerHTML = "Enter Username";
        document.getElementById('success').style.color = "red";    
    }else{
        if(password==""){
        document.getElementById('success').innerHTML = "Enter Password";    
        document.getElementById('success').style.color = "red";    
        }else{
            ref=firebase.database().ref().child('AdminAuth');
            ref.once("value").then(function(snapshot) {  
                if(snapshot.child(name).exists()){
                    if(snapshot.child(name).val()==password){
                        sessionStorage.setItem('id',name);
                        document.getElementById('user').value = "";
                        document.getElementById('password').value = "";
                        document.getElementById('success').style.color = "black";    
                        document.getElementById('success').innerHTML = "Logged in successfully";
                        location.href = "home.html"
                    }
                    else{
                        document.getElementById('success').innerHTML = "Wrong Password";    
                        document.getElementById('success').style.color = "red";            
                    }
                }else{
                    document.getElementById('success').innerHTML = "Username does not exist";    
                    document.getElementById('success').style.color = "red";        
                }
            });
        }
    }
}

function clearData(){
    document.getElementById('success').innerHTML = "";   
}