function SetCurrentDate()
        {
        const date = new Date();
        console.log(date);
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear(); 
        if (d < 10) d = '0' + d;
        if (m < 10) m = '0' + m;     
        let CurrDate = y + '-' + m + '-' + d; 
        document.getElementsByName("birthDate")[0].value = CurrDate ;
        }
document.addEventListener("DOMContentLoaded", SetCurrentDate);

var password = document.getElementByName("psw")
  , confirm_password = document.getElementByName("psw-repeat");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;