function signUp() {
    const password = document.getElementsByName("password-box")[0].value;
    const confirmPassword = document.getElementsByName("confirm-password-box")[0].value;


    if (confirm("Are you sure you want to sign-up?")) {
        if (password === confirmPassword) {
            alert("You have signed up successfully");
            window.location.href = "../home-page/home.html";
        }
        else {
            alert("The passwords don't match. Please try again");
        }
    }
}
