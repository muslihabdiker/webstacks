// Import email and password input elements and login button
import { email } from "../forgot";
import { password } from "../forgot";
import { loginButton } from "../forgot"; // Assuming you have loginButton exported from the login file
import { Sloader } from "../forgot";
export const handleLogin = (usernameValue, passwordValue) => {
  // Create a loader element

  // Add the loader and disable the button
  loginButton.innerText = '';
  loginButton.appendChild(Sloader);
  loginButton.disabled = true;

  // Perform the login request
  fetch('http://57.152.70.224:18083/forgot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: usernameValue,
    }),
  })
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    if (data.response.code === 1) {
      // Account found, reset borders and redirect to dashboard
      email.style.borderColor = ""; // Reset border color
      password.style.borderColor = ""; // Reset border color
      window.location.href = "/login"; // Redirect to dashboard
    } else if (data.response.code === 0) {
      // Account not found, show an error and make the borders red
      console.log("Account not found. Please check your credentials.");
      email.style.borderColor = "red";
      password.style.borderColor = "red";
    }
  })
  .catch(error => {
    // Log the error and make the border red in case of a fetch error
    console.error('There was a problem with the fetch operation:', error);
    email.style.borderColor = "red";
    password.style.borderColor = "red";
  })
  .finally(() => {
    // Always remove the loader and re-enable the button after the request is complete
    if (loginButton.contains(Sloader)) {
      loginButton.removeChild(Sloader);
    }
    loginButton.innerText = 'Login';
    loginButton.disabled = false;
  });
};
