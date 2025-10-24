function sendMail(){
    event.preventDefault();
    let parms={
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value

    };

    emailjs
        .send("service_ut8yjbw", "template_604bgh2", parms)
        .then(alert("Email Sent Successfully. Thank you!").catch(()=>alert("Email not sent!!")))
        .then(window.location.href='ndex.html');

}
