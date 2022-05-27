let html = `
<style>
.abw nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 90;
    height: 82px;
    padding: 0 10%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    background: #ebf0f4;
    box-shadow: 0 0 35px rgba(0, 53, 132, 0.26);
}

.abw .logo  {    
    justify-self: start;
}

.abw .user-icon  {    
    justify-self: end;
}

.abw .user-icon i {
    font-size: 50px;
    color: grey;
    cursor: pointer;
}

.abw .user-card-backdrop {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 95;
    background: rgba(0, 0, 0, .2);
}

.abw .user-card {
    position: absolute;
    top: 77px; right: 10%;
    z-index: 99;
    width: 550px;
    min-height: 300px;
    background: linear-gradient(319.49deg, #003484 36.16%, rgba(71, 132, 157, 0.988823) 62.76%, rgba(221, 245, 255, 0.97) 96.09%);
    box-shadow: 0 32px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.abw .user-card .left-part {
    place-self: center;
}

.abw .user-card .title {
    text-align: center;
}

.abw .user-card .title h2 {
    font-size: 30px;
    font-weight: 500;
    color: white;
}

.abw .user-card .title img {
    width: 114px;
    mix-blend-mode: luminosity;
}

.abw .user-card .right-part {
    padding: 40px 40px 40px 0;
}

.abw .form-unit {
    position: relative;
}

.abw .extra-margin-top {
    margin-top: 10px;
}

.abw .form-unit label {
    margin-bottom: 3px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #B5D0DB;
}

.abw .form-unit i {
    position: absolute;
    top: 31px;
    right: 10px;
    color: white;
    cursor: pointer;
    font-size: 18px;
}

.abw .form-unit input,
.abw .form-unit select,
.abw .form-unit button {
    width: 100%;
    height: 35px;
    border-radius: 20px;
    background: #005c85;
}

.abw .form-unit input {
    background: transparent;
    border: 1px solid white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    color: white;
    opacity: 0.8;
}

.abw .form-unit button {
    background: #FD8517;
    padding: 0 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    font-weight: 600;
    color: white;
}

.abw .user-card .or {
    text-align: center;
    font-size: 12px;
    color: #B5D0DB;
}

.abw .user-card .or a {
    font-size: inherit;      
    color: white;
    text-decoration: underline;
}


</style>

<div class="abw">
    <nav>
        <div>logo</div>
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Dashboard</a>
        <a href="#">Explorer</a>
        <div class="user-icon"><i class="material-icons">account_circle</i></div>
    </nav>
    <div class="user-card-backdrop" style="display:none">
        <div class="user-card" style="display:none">
            <div class="left-part">
                <div class="title">
                    <img src="anyblocks-logo-black-sign.png">
                    <h2></h2>
                </div>
            </div>
            <div class="right-part"></div>
        </div>
    </div>
    
</div>
`

let loginHtml = `
<div class="form-unit">
    <label for="email">Email</label>
    <input type="text" id="email">
</div>
<div class="form-unit">
    <label for="password">Password</label>
    <input type="password" class="showable" id="password">
    <i class="material-icons" onmousedown="showPass()" onmouseup="hidePass()">visibility</i>
</div>
<div class="form-unit">
    <button @click="login()" class="extra-margin-top">Login</button>
</div>
<div class="form-unit or">
    Don't have an account yet? <a onclick="switchToSignUp()">Sign Up!</a>
</div>
`

let signUpHtml = `
 <div class="form-unit">
    <label for="email">Email</label>
    <input type="text">
</div>
<div class="form-unit">
    <label for="password">Password</label>
    <input type="password" class="showable">
    <i class="material-icons" onmousedown="showPass()" onmouseup="hidePass()">visibility</i>
</div>
<div class="form-unit">
    <label for="password2">Confirm Password</label>
    <input type="password" class="showable">
    <i class="material-icons" onmousedown="showPass()" onmouseup="hidePass()">visibility</i>
</div>
<div class="form-unit">
    <button class="extra-margin-top" onclick="register()" >Sign Up</button>
</div>
<div class="form-unit or">
    Already have an account? <a onclick="switchToLogin()">Login!</a>
</div>
`

// write the template straight away, so that the rest of the code could use querySelectors
document.querySelector('body').innerHTML += html

// vars
let userCardContent = 'login',
    loggedIn = false

// dom elements
let userIcon = document.querySelector('.user-icon i'),
    userCard = document.querySelector('.user-card'),
    userCardBackdrop = document.querySelector('.user-card-backdrop'),
    userCardTitle = document.querySelector('.user-card .title h2'),
    userCardRightPart = document.querySelector('.user-card .right-part')

// methods
const fillUserCard = () => {
    switch(userCardContent) {
        case 'login':
            userCardTitle.textContent = 'Login'
            userCardRightPart.innerHTML = loginHtml
            break
        case 'signUp':
            userCardTitle.textContent = 'Sign Up'
            userCardRightPart.innerHTML = signUpHtml
            break
    }
}

const switchToSignUp = () => {
    userCardContent = 'signUp',
    fillUserCard()
}

const switchToLogin = () => {
    userCardContent = 'login',
    fillUserCard()
}

const showPass = () => {
    document.querySelectorAll('.showable').forEach( passwordInput => {
        passwordInput.type = 'text'
    })
}

const hidePass = () => {
    document.querySelectorAll('.showable').forEach( passwordInput => {
        passwordInput.type = 'password'
    })
}

const login = async () => {
    let rawAnswer = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: document.querySelector('#login').value,
            b: 'Textual content'
        })
    });
    const content = await rawResponse.json();
}


// events
// @load
window.addEventListener('load', () => {
    // check cookie, mock for now:
    loggedIn = false

    if(loggedIn) {
        userCardContent = 'name'
    } else {
        userCardContent = 'login'
    }

    fillUserCard()
})

// user icon @click
userIcon.addEventListener('click', e => {
    userCardBackdrop.style.display = userCard.style.display === 'block' ? 'none' : 'block'
    userCard.style.display = userCard.style.display === 'grid' ? 'none' : 'grid'
})

// backdrop @click
userCardBackdrop.addEventListener('click', e => {
    userCardBackdrop.style.display = 'none'
    userCard.style.display = 'none'
})

// user card @click
userCard.addEventListener('click', e => {
    e.stopPropagation()
})

