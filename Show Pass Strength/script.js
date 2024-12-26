const password = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    } 
    if (password.value.length < 4) {
        str.innerHTML = "Weak"
        password.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    } 
    else if (password.value.length >=4 && password.value.length <= 8) {
        str.innerHTML = "medium"
        password.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if (password.value.length >= 8) {
        str.innerHTML = "strong"
        password.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    }
})