const courselist = [
    {code: "ACIT 1620",
    name: "Web Fundamental Technologies"
}, {
    code: "ACIT 1630",
    name: "Database Systems"
}, {
    code: "Math 1310",
    name: "Technical Math for IT"
}

]


// ----- step 1: get 4-digit number from user -------

let userinput
// userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");

// ----- step 2: prompt user again if invalid data is entered --------

do {
    userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");
    if (userinput.length !== 4 || isNaN(userinput)) {
        alert("Invalid data, please try again!");
    }
} while (userinput.length !== 4 || isNaN(userinput));

// ------ step 3: write a loop to iterate through courselist array -------

if (courselist.indexOf(userinput) = -1) {
    courselist.push(
        {code: userinput,
        name: "null"}
    );
    console.log("Course code has been successfully added to courselist.")
    console.log(courselist)
} else {
        console.log(`Yes, I am taking the course: ${courselist["code"]} - ${courselist["name"]}`);
    }

