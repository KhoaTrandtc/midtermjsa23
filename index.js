
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {e.preventDefault(); 
forms.classList.toggle("show-signup");
    })
})

function saveData()
{
let name,email,psw;

email=document.getElementById("email").value;
psw2=document.getElementById("psw2").value;
psw=document.getElementById("psw").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
    alert("Đã Đăng kí Thành Công");
}
else
{
  user_records.push({
  
  "email":email,
  "psw":psw,
  "psw2":psw2
})
localStorage.setItem("users",JSON.stringify(user_records));
}

}
function check() {

    
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('psw');
    

    // entered data from the login-form
    var userEmail = document.getElementById('userEmail');
    var userPw = document.getElementById('userPw');
    


    // check if stored data from register-form is equal to data from login form
    if(userEmail.value !== storedEmail || userPw.value !== storedPw  ) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}
