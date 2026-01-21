function upload(){
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value, 10);
    var regno = document.getElementById("regno").value;
    var dob = document.getElementById("dob").value;
    var title = document.getElementById("main-title");
    title.innerHTML = " Well done.Details submitted successfully.";

    var gen = "";
    if (age <= 13) {
        gen = "Generation Alpha";
    } else if (age >= 14 && age <= 29) {
        gen = "Generation Z";
    } else if (age >= 30 && age <= 45) {
        gen = "Millennial";
    } else {
        gen = "an older generation";
    }

    var out = document.getElementById("output");
    out.innerHTML=`Hello ${name}, your age is ${age}, your date of birth is ${dob}, your registration number is ${regno}, and you belong to ${gen}.`;

}