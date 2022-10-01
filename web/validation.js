function validate(){
    var fullname = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var terms = document.getElementById('checkbox');

    if(fullname.value.length == 0 && email.value.length == 0 && message.value.length == 0){
        alert("*Please fill all of the required fields");
        return false;
    }
    else if(fullname.value.length == 0){
        alert("*Name cannot be empty");
        return false;
    }
    else if(email.value.length == 0){
        alert("*Email cannot be empty");
        return false;
    }
    else if(message.value.length == 0){
        alert("*Message cannot be empty");
        return false;
    }
    else if(male.checked == false && female.checked == false){
        alert("*Please select your gender");
        return false;
    }
    else if(terms.checked == false){
        alert("*Must agree with terms & conditions");
        return false;
    }
    else{
        return true;
    }
}