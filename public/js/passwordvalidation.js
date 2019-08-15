// Function to check Whether both passwords 
// is same or not. 
function check() { 
    document.getElementById('submit').disabled = false;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value; 
    console.log(password1);
    console.log(password2);
     // If password not entered 
    if (password1 == ''){
        alert ("Please enter Password"); 
    } 
        
    // If confirm password not entered 
    else if (password2 == '') {
        alert ("Please enter confirm password"); 
    }
          
    // If Not same return False.     
    else if (password1 != password2) { 
        alert ("Password did not match: Please try again...") 
        document.getElementById('submit').disabled = true;
    } 

    // If same return True. 
    else{ 
        document.getElementById('submit').disabled = false;  
    } 
} 