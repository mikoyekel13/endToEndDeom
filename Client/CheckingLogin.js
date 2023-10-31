


const submitbtn = document.querySelector('#submitbtn');
function loginTemp(){
    const loginTemp = document.querySelector('#loginTemp');
    const login= loginTemp.content.cloneNode(true);

    document.body.appendChild(login);
    
    
}
function checkValid(){
    console.log(users);
    const pwrd = document.querySelector('#pwrd').value;
    const userName = document.querySelector('#userName').value;
    const users = localStorage.getItem('users');
    submitbtn.addEventListener('click',checkingValid)
        
}



