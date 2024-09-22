import '../css/login.css';
import { handleLogin } from './loginApi';
import loginIco from '../images/loginIcon.png';
import backgroundImg from '../images/background.png';
    const wrapper = document.createElement('div');
    const header = document.createElement('div');
    const middleInputsHolder = document.createElement('div');
    const bottomInputsHolder = document.createElement('div');
    const signupHolder = document.createElement('a');
    const emailGroup = document.createElement('div');
    const pwdGroup = document.createElement('div');
    const emailLabel = document.createElement('label');
    const passwordLabel = document.createElement('label');
    const logoImg = document.createElement('img');
    const infoText = document.createElement('p');
    const simpleNota = document.createElement('p');
    const loginH1 = document.createElement('h1');
    export const email = document.createElement('input');
    export const password = document.createElement('input');
    export const loginButton = document.createElement('button');
    export const Sloader = document.createElement('div');
    const forgotPwd = document.createElement('a');
    const signupText = document.createElement('p');
    const signupLink = document.createElement('a');
    const Eplaceholder_label = document.createElement('label');
    const Pplaceholder_label = document.createElement('label');
    Sloader.classList = 'loader';
    wrapper.classList = "wrapper";
    header.classList = "header";
    middleInputsHolder.classList = "middleInputsHolder";
    bottomInputsHolder.classList = "bottomInputsHolder";
    signupHolder.classList = "signupHolder";
    logoImg.classList = "logoImg";
    infoText.classList = "infoText";
    simpleNota.classList = "simpleNota";
    email.classList = "commonInput";
    password.classList = "commonInput";
    loginButton.classList = "loginButton";
    forgotPwd.classList = "forgotPwd";
    signupLink.classList = "signupLink";
    signupText.classList = "signupText";
    loginH1.classList = "loginH1";
    emailGroup.classList = "emailGroup";
    pwdGroup.classList = "pwdGroup";
    emailLabel.classList = "emailLabel";
    passwordLabel.classList = "passwordLabel";
    email.placeholder = "";
    email.type = "text";
    email.id = "email";
    password.placeholder = "";
    password.type = "password";
    password.id = "password";
    logoImg.src = loginIco;
    loginButton.innerText = "Login";
    loginH1.innerText = "Login";
    signupLink.innerText = "Sign Up";
    signupLink.href = "/signup";
    signupText.innerText = "Don't have an account?";
    forgotPwd.innerText = "Forgot Password?";
    forgotPwd.href = "/forgot";
    infoText.innerText = "Please login to access cashly service";
    emailLabel.setAttribute('for', 'email');
    passwordLabel.setAttribute('for', 'email');
    emailLabel.innerText  = "Email";
    passwordLabel.innerText = "Password";
document.body.style.backgroundImage = `url(${backgroundImg})`;
    header.appendChild(logoImg);
    header.appendChild(loginH1);
    header.appendChild(infoText);
    emailGroup.appendChild(email);
    emailGroup.appendChild(emailLabel);
    pwdGroup.appendChild(password);
    pwdGroup.appendChild(passwordLabel);
    middleInputsHolder.appendChild(emailGroup);
    middleInputsHolder.appendChild(pwdGroup);
    middleInputsHolder.appendChild(forgotPwd);
    signupHolder.appendChild(signupText);
    signupHolder.appendChild(signupLink);
    bottomInputsHolder.appendChild(loginButton);
    bottomInputsHolder.appendChild(signupHolder);
    wrapper.appendChild(header);
    wrapper.appendChild(middleInputsHolder);
    wrapper.appendChild(bottomInputsHolder);
    document.body.appendChild(wrapper);

    // Loader element
const loader = document.createElement('span');
loader.classList.add('loader'); // Add your CSS loader styling here

// Event listener for login button
// loginButton.addEventListener('click', () => {
//     // Add the loader and disable the button
//     loginButton.innerText = '';
//     loginButton.appendChild(loader);
//     loginButton.disabled = true;

//     handleLogin(email.value, password.value).finally(() => {
//         // Remove the loader and re-enable the button after request is complete
//         loginButton.removeChild(loader);
//         loginButton.innerText = 'Login';
//         loginButton.disabled = false;
//     });
// });
//events
loginButton.addEventListener('click',()=>{
handleLogin(email.value,password.value);
});
