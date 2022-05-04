

window.onload = function(){

    document.getElementById("submit").addEventListener("click", function submitData(e){
        e.preventDefault();
        let password = document.getElementById("exampleInputPassword1").value;
        let url = document.getElementById("urlField").value;
        console.log("Hello "+password);
        var validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
        
        let validateUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

        if(password.match(validatePassword)){
            alert("Password valid");
        }
        else{
            alert("Password must at least 10 characters in length and contain at least one number and one uppercase and lowercase letter");
        }

        if(url.match(validateUrl)){
            alert("URL valid");
        }
        else{
            alert('URL must begin with either the string, "http://" or "https://".');
        }

    });
}