function validateForm() {
    var input = document.getElementById("input").value;

    if (input == "") {
        alert("Input cannot be empty");
        return false;
    } else if (input.length < 5) {
        alert("Input must be at least 5 characters long");
        return false;
    }

    return true;
}