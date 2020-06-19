// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAscUylXbEBthGjzOyXGbCQe74hqEOjKIY",
    authDomain: "forever-hungry-725a2.firebaseapp.com",
    databaseURL: "https://forever-hungry-725a2.firebaseio.com",
    projectId: "forever-hungry-725a2",
    storageBucket: "forever-hungry-725a2.appspot.com",
    messagingSenderId: "734038687059",
    appId: "1:734038687059:web:852ba443d01cee4054b5a6",
    measurementId: "G-W6GZ3GBKRE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


	const auth = firebase.auth();


	function signUp(){

		var email = document.getElementById("email");
    consol.log(email) ;
		var password = document.getElementById("password");
  consol.log(password) ;
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

		alert("Signed Up");
	}



	function signIn(){

		var email = document.getElementById("email");
		var password = document.getElementById("password");

		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));




	}


	function signOut(){

		auth.signOut();
		alert("Signed Out");

	}



	auth.onAuthStateChanged(function(user){

		if(user){

			var email = user.email;
			alert("Active User " + email);

			//Take user to a different or home page

			//is signed in

		}else{

			alert("No Active User");
			//no user is signed in
		}



	});

  alert("test") ;
