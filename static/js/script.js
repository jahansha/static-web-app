function sendMail(){
    event.preventDefault();
    let parms={
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value

    };

    emailjs
        .send("service_qt2yn5g", "template_sw5nsin", parms)
        .then(alert("Email Sent Successfully. Thank you!").catch(()=>alert("Email not sent!!")))
        .then(document.getElementById("contact-name").value='')
        .then(document.getElementById("contact-email").value='')
        .then(document.getElementById("contact-subject").value='')
        .then(document.getElementById("contact-message").value='')
        .then(redirectPage('index.html'));
   

}
