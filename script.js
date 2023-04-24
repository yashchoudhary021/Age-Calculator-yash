function calculateAge() {
    let today = new Date();
    let birthDate = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("day").value)
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        month += 12;
    }
    let day = today.getDate() - birthDate.getDate();
    if (day < 0) {
        month--;
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        day += lastMonth.getDate();
    }
    if (!age || !month || !day) {
        if(!age){
            document.getElementById("result").innerHTML = "Please Enter valid Data for Year Feild";
        }
        else if(!month){
            document.getElementById("result").innerHTML = "Please Enter valid Data for Month Feild";
        }
        else{
            document.getElementById("result").innerHTML = "Please Enter valid Data for Date Feild";
        }
    }
    else {
        let result = `Your age is ${age} Years ${month} Months ${day} Days`
        document.getElementById("result").innerHTML = result;
    }
}