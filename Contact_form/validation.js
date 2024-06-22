function handleFormSubmit(event) {
    event.preventDefault();  

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const error_message = document.getElementById('error_message');
    error_message.style.padding = "10px";
    error_message.innerHTML = "";  

    let errors = [];

    if (fname.length < 3) {
        errors.push("Please enter a valid first name.");
    }
    if (lname.length < 1) {
        errors.push("Please enter a valid last name.");
    }
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please enter a valid phone number.");
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
        errors.push("Please enter a valid email.");
    }
    if (address.length < 5) {
        errors.push("Please enter a valid address.");
    }

    if (errors.length > 0) {
        error_message.innerHTML = errors.join("<br>");
        return false;
    } else {
        const formData = new URLSearchParams({
            fname,
            lname,
            phone,
            email,
            address
        }).toString();
        window.location.href = `details.html?${formData}`;
        return true;
    }
}
