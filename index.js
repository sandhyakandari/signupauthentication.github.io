const signUpBtn=document.getElementById('continue');
const yourName=document.getElementById('yourname')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirmPassword')
const error=document.getElementById('errordisplay');

console.log(error);
error.style.display='none';
let userdata=JSON.parse(localStorage.getItem('userdata'));

if(userdata!=null){
    alert('user already login');
    window.location.href='./profile.html';
}


signUpBtn.addEventListener('click',(e)=>{
e.preventDefault();
  
    if(yourName.value==='' ||  email.value===""|| password.value==="" || confirmPassword.value===''){
        error.style.display='inline';
    }
    else{
        if(password.value.trim()!==confirmPassword.value.trim()){
            alert('password not matched')
        }
        else{
             adduserindb(yourName.value,email.value,password.value);
            }
        }
})

function adduserindb(name,emailinput,passwordinput){
    let token=Math.floor(Math.random()*10000)
    let userobj={
        yourName:name,
        email:emailinput,
        password:passwordinput,
        Token:token
    }
    localStorage.setItem('userdata',JSON.stringify(userobj));   
    alert('Sign up successfully');
    window.location.href='./profile.html';
}
