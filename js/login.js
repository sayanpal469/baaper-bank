document.getElementById('login-submit').addEventListener(
    'click',

    function () {
        const emailField = document.getElementById('user-email').value;
        const passwordField = document.getElementById('user-password').value;

        if (emailField == '123@gmail.com' && passwordField == '123') {
            window.location.href = 'bank-site.html'
        } else {
            alert("user- 123@gmail.com, password- 123")
        }
    }
)