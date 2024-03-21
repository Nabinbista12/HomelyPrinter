function validateform() {
    // This variable take class and name and value. 
    let firstName = document.forms["signupform"]["fname"].value;
    let lastName = document.forms["signupform"]["lname"].value;
    let email = document.forms["signupform"]["email"].value;
    let password = document.forms["signupform"]["password"].value;
    if (firstName == "" || lastName == "" || email == "" || password == "") {
    alert("Please fill in all fields.");
    return false;
    } else {
    alert("Thank you for signing up!");
    window.location.href = "../index.html";
    return false;
    }
}