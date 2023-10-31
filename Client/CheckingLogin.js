function checkValid(){
    console.log(users);
    const pwrd = document.querySelector('#pwrd').value;
    const userName = document.querySelector('#userName').value;
    const users = localStorage.getItem('users');
    submitbtn.addEventListener('click',checkingValid)
        
}



