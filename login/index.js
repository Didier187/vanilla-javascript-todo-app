// variables

const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const signInBtn = document.getElementById('sign-in')
const form = document.getElementById('form')
let rememberMeStatusEl = document.getElementById('remember-me')

// check if there are credentials stored in local storage, when the page loads
window.addEventListener('load',() => {
    if(localStorage.getItem('localUser')){    
        let localUserVar = JSON.parse(localStorage.getItem('localUser'))

        //login with localstorage credentials
        login(localUserVar[0],localUserVar[1])
    }
})


form.addEventListener('submit', function logSubmit(event) {
     event.preventDefault();
     let username = usernameEl.value;
     let password = passwordEl.value;
     let setLocalUser = rememberMeStatusEl.checked
    // if user checks remember me, store credentials in localStorage
     if(setLocalUser){
         localStorage.setItem('localUser',`["${username}","${password}"]`)
     }
     //log in with information provides
     login(username,password)

     // clear the input fields
     usernameEl.value=''
     passwordEl.value=''
     rememberMeStatusEl.checked = rememberMeStatusEl.checked
    
})

//login function
const login =(username, password)=>{
    console.log('logging in .... with username: ' + username + ' password: ' + password)
}