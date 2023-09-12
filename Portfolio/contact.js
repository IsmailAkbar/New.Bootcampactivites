function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "iconica2023@gmail.com",
        Password : "Cokezone123321",
        To : 'akbarismail900@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}