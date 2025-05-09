let nameUser = document.querySelector('#nameuser');
let emailUser = document.querySelector('#emailuser');
let passwordUser = document.querySelector('#passworduser');
let confirmPassword = document.querySelector('#conpassword');
let errorTextName = document.querySelector('.errormassage1');
let errorTextEmail = document.querySelector('.errormassage2');
let errorTextPassword = document.querySelector('.errormassage3');
let errorTextConfirm = document.querySelector('.errormassage4');
nameUser.addEventListener('input', function () {
    const amout = document.getElementById('amount')
    const limit = document.getElementById('limit')
    if (nameUser.value.length < 5) {
        if (nameUser.classList.contains('correct')) {
            nameUser.classList.replace('correct', 'incorrect');
            errorTextName.classList.replace('errormassage1', 'errormassage1pop');
        }
        else {
            nameUser.classList.add('incorrect');
            errorTextName.classList.replace('errormassage1', 'errormassage1pop');
        }
    }
    if (nameUser.value.length >= 5) {
        if (nameUser.classList.contains('incorrect')) {
            nameUser.classList.replace('incorrect', 'correct');
            errorTextName.classList.replace('errormassage1pop', 'errormassage1');
        }
        else {
            nameUser.classList.add('correct');
            errorTextName.classList.replace('errormassage1pop', 'errormassage1');
        }
    }
    let count = nameUser.value.length
    amout.innerText = count
    if(count>10){
        limit.classList.add('active')
        nameUser.classList.replace('correct', 'incorrect');
    }
    else{
        limit.classList.remove('active')
    }
});


emailUser.addEventListener('input', function () {
    if (!validateEmail(emailUser.value)) {
        if (emailUser.classList.contains('correct')) {
            emailUser.classList.replace('correct', 'incorrect');
            errorTextEmail.classList.replace('errormassage2', 'errormassage2pop');
        }
        else {
            emailUser.classList.add('incorrect');
            errorTextEmail.classList.replace('errormassage2', 'errormassage2pop');
        }
    }
    else if (validateEmail(emailUser.value)) {
        if (emailUser.classList.contains('incorrect')) {
            emailUser.classList.replace('incorrect', 'correct');
            errorTextEmail.classList.replace('errormassage2pop', 'errormassage2');
        }
        else {
            emailUser.classList.add('correct');
            errorTextEmail.classList.replace('errormassage2pop', 'errormassage2');
        }
    }
});

passwordUser.addEventListener('input', function () {
    if (passwordUser.value.length < 5) {
        if (passwordUser.classList.contains('correct')) {
            passwordUser.classList.replace('correct', 'incorrect');
            errorTextPassword.classList.replace('errormassage3', 'errormassage3pop');
        }
        else {
            passwordUser.classList.add('incorrect');
            errorTextPassword.classList.replace('errormassage3', 'errormassage3pop');
        }
    }
    else {
        passwordUser.classList.replace('incorrect', 'correct');
        errorTextPassword.classList.replace('errormassage3pop', 'errormassage3');
    }
});
const button = document.getElementById('buttonShow')
    button.addEventListener('click',function(){
        if(passwordUser.getAttribute('type') === 'password'){
            passwordUser.setAttribute('type','text')
            button.innerText="ซ่อนรหัสผ่าน"
        }
        else{
            passwordUser.setAttribute('type','password')
            button.innerText="แสดงรหัสผ่าน"
        }
    })
confirmPassword.addEventListener('input', function () {
    if (confirmPassword.value !== passwordUser.value) {
        if (confirmPassword.classList.contains('correct')) {
            confirmPassword.classList.replace('correct', 'incorrect');
            errorTextConfirm.classList.replace('errormassage4', 'errormassage4pop');
        }
        else {
            confirmPassword.classList.add('incorrect');
            errorTextConfirm.classList.replace('errormassage4', 'errormassage4pop');
        }
    }
    else {
        confirmPassword.classList.replace('incorrect', 'correct');
        errorTextConfirm.classList.replace('errormassage4pop', 'errormassage4');
    }
});
function submit() {
    if (nameUser.classList.contains('correct') &&
        emailUser.classList.contains('correct') &&
        passwordUser.classList.contains('correct') &&
        confirmPassword.classList.contains('correct')) {
        Swal.fire({
            title: "ลงทะเบียนสำเร็จ",
            icon: "success",
            draggable: true
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "กรุณากรอกข้อมูลให้ครบ",
        });
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
