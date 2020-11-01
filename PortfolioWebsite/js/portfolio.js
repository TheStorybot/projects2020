function validateForm() {
    var x = document.forms["myForm"]["fname"]["pnumber"]["email"].value;
    if (x == "") {
        alert("Fields must be filled out");
        return false;
    }
}