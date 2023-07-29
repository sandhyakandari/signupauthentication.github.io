let fullname=document.getElementById('yourname');
let Email=document.getElementById('email');
let Token=document.getElementById('Token');
let Password=document.getElementById('Password');
let logOutbtn=document.getElementById('logout');



let userdata=JSON.parse(localStorage.getItem('userdata'));
console.log(userdata);

if(userdata==null){
    alert('user not signup');
    window.location.href='./index.html';
}
else{
let fuln=userdata.yourName;
let email=userdata.email;
let token=userdata.Token;
let pass=userdata.password;
fullname.innerText=`${fuln}`
Email.innerText=`${email}`;
Token.innerText=`${token}`;
Password.innerText=`${pass}`;

logOutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.removeItem('userdata');
    window.location.href='./index.html';
})

}