let nameUser = document.querySelector('#nameuser')as HTMLInputElement;
let emailUser = document.querySelector('#emailuser')as HTMLInputElement;
let passwordUser = document.querySelector('#passworduser')as HTMLInputElement;
let confirmPassword = document.querySelector('#conpassword')as HTMLInputElement;
let errorTextName = document.querySelector('.errormassage1')as HTMLInputElement;
let errorTextEmail = document.querySelector('.errormassage2')as HTMLInputElement;
let errorTextPassword = document.querySelector('.errormassage3')as HTMLInputElement;
let errorTextConfirm = document.querySelector('.errormassage4')as HTMLInputElement;
declare const Swal: any;

nameUser.addEventListener('input',function(){
    if(nameUser.value.length < 5){
        if(nameUser.classList.contains('correct')){
            nameUser.classList.replace('correct','incorrect')
            errorTextName.classList.replace('errormassage1','errormassage1pop')
        }
        else{
            nameUser.classList.add('incorrect')
            errorTextName.classList.replace('errormassage1','errormassage1pop')
        }
    }
    if(nameUser.value.length >= 5){
        if(nameUser.classList.contains('incorrect')){
            nameUser.classList.replace('incorrect','correct')
            errorTextName.classList.replace('errormassage1pop','errormassage1')
        }
        else{
            nameUser.classList.add('correct')
            errorTextName.classList.replace('errormassage1pop','errormassage1')
        }
    }
    
})

emailUser.addEventListener('input',function(){
    if(!emailUser.value.includes("@gmail.com")){
        if(emailUser.classList.contains('correct')){
            emailUser.classList.replace('correct','incorrect')
            errorTextEmail.classList.replace('errormassage2','errormassage2pop')
        }
        else{
            emailUser.classList.add('incorrect')
            errorTextEmail.classList.replace('errormassage2','errormassage2pop')
        }
    }
    else if(emailUser.value.includes("@gmail.com")){
        if(emailUser.classList.contains('incorrect')){
            emailUser.classList.replace('incorrect','correct')
            errorTextEmail.classList.replace('errormassage2pop','errormassage2')
        }
        else{
            emailUser.classList.add('correct')
            errorTextEmail.classList.replace('errormassage2pop','errormassage2')
        }
    }
    
})

passwordUser.addEventListener('input',function(){
    if(passwordUser.value.length < 5){
        if(passwordUser.classList.contains('correct')){
            passwordUser.classList.replace('correct','incorrect')
            errorTextPassword.classList.replace('errormassage3','errormassage3pop')
        }
        else{
            passwordUser.classList.add('incorrect')
            errorTextPassword.classList.replace('errormassage3','errormassage3pop')
        }
}
    else{
        passwordUser.classList.replace('incorrect','correct')
        errorTextPassword.classList.replace('errormassage3pop','errormassage3')
    }
})

confirmPassword.addEventListener('input',function(){
    if(confirmPassword.value !== passwordUser.value){
        if(confirmPassword.classList.contains('correct')){
            confirmPassword.classList.replace('correct','incorrect')
            errorTextConfirm.classList.replace('errormassage4','errormassage4pop')
        }
        else{
            confirmPassword.classList.add('incorrect')
            errorTextConfirm.classList.replace('errormassage4','errormassage4pop')
        }
    }
   
    else{
        confirmPassword.classList.replace('incorrect','correct')
        errorTextConfirm.classList.replace('errormassage4pop','errormassage4')
    }
})

function submit(): void{
    if(nameUser.classList.contains('correct') && 
    emailUser.classList.contains('correct') &&
    passwordUser.classList.contains('correct')&&
    confirmPassword.classList.contains('correct')){
        Swal.fire({
            title: "ลงทะเบียนสำเร็จ",
            icon: "success",
            draggable: true
        });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "กรุณากรอกข้อมูลให้ครบ",
          });
    }
}