document.getElementById('email').addEventListener("click", validateForm);


function validateForm(){
    let input = document.getElementById('fname').value;
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input == ""){
        alert("Oops! Please add your email");
    }else{
        if ( input.match(mailFormat) )
        {
          alert("Request submitted!")
          return (true)
        }
          alert("Oops ! That doesn’t look like an email address")
          return (false)
      }
    
    input = '';
    }