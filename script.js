function SetCurrentDate()
        {
        const date = new Date();
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear(); 
        if (d < 10) d = '0' + d;
        if (m < 10) m = '0' + m;     
        let CurrDate = y + '-' + m + '-' + d; 
        document.getElementsByName("birthDate")[0].value = CurrDate ;
        }
document.addEventListener("DOMContentLoaded", SetCurrentDate);

// document.getElementById("myForm").addEventListener("submit", function (event) {
//     let success=submitForm();
//     if(success===false){
//         event.preventDefault();
//     }

// // else{
// //     event.submitForm();
// // }
// });


function validatePassword(password,confirm_password){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    console.log('false');
    return false;
  } else {
    confirm_password.setCustomValidity('');
    console.log('true');
    return true;
  }
}

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


function submitForm(){
    var password = document.getElementsByName("psw")[0]
  , confirm_password = document.getElementsByName("psw-repeat")[0];
    let passValRes=validatePassword(password,confirm_password);
    if(passValRes){
        console.log('Successful');
        alert('Successful');
        return true;
    }
    return false;
}

