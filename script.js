let usernameRef = document.getElementById('username');
let passwordRef = document.getElementById('password');
let submitBtn = document.getElementById('submit');
let messageRef = document.getElementById('message-ref');

let isUsernameValid = () => {
    // Username should contain more than 3 characters, should begin with an alphabetic character and can contain numbers
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
    // Password should be at least 6 characters long, should contain at least 1 number, 1 special symbol, 1 lowercase and 1 uppercase
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
    return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener('input', () => {
    if (!isUsernameValid()) {
        messageRef.style.visibility = 'hidden';
        usernameRef.style.cssText = 'border-color: #fe2e2e; background-color: #ffc2c2;';
    } else {
        usernameRef.style.cssText = 'border-color: #34bd34; background-color: #c2ffc2;';
    }
});

passwordRef.addEventListener('input', () => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = 'hidden';
        passwordRef.style.cssText = 'border-color: #fe2e2e; background-color: #ffc2c2;';
    } else {
        passwordRef.style.cssText = 'border-color: #34bd34; background-color: #c2ffc2;';
    }
});

submitBtn.addEventListener('mouseover', () => {
    // If either password or useername is invalid, then do this
    if(!isUsernameValid() || !isPasswordValid()) {
        // Get the current position of submit btn
        let containerRect = document
        .querySelector('.container')
        .getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        // If button is on the left hand side, move it to the right hand side
        if (offset <= 100) {
            submitBtn.style.transform = 'translateX(16.25em)';
        }
        //Vice versa
        else{
            submitBtn.style.transform = 'translateX(0)';
        }
    }
});
submitBtn.addEventListener('click', () => {
    messageRef.style.visibility = 'visible';
});