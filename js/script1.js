function validateForm(){
    // alert("Form validated!!");
    if (document.forms[0].name.value == ""){
        alert("Name must not be empty!");
        document.forms[0].name.style.border = '1px solid red';
        return false;
    }
    if (document.forms[0].email.value == ""){
        alert("Email must not be empty!");
        document.forms[0].email.style.border = '1px solid red';
       return false;
    }
    if (document.forms[0].comment.value == ""){
        alert("Comment must not be empty!");
        document.forms[0].comment.style.border = '1px solid red';
        return false;
    }
    else {
        alert("Information Entered is Valid")
        return true;
    }
}

jQuery('document').ready(function(){
    $('.slider').cycle({
        fx: 'fade'
    })
})

function myFunction1() {
   var popup = document.getElementById("myPopup1");
   popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
    }
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
    }
function myFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
    }
function myFunction5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
    }
function myFunction6() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
    }
