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

// let userinput
// userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");

// ----- step 2: prompt user again if invalid data is entered --------

// do {
//     userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");
//     if (userinput.length !== 4 || isNaN(userinput)) {
//         alert("Invalid data, please try again!");
//     }
// } while (userinput.length !== 4 || isNaN(userinput));

// ------ step 3: write a loop to iterate through courselist array -------

// let find = -1

// for (let i = 0; i < courselist.length; i++) {
//     let object = courselist[i]
//     find = object["code"].search(userinput);
//     if (find >= 0) {
//         console.log(`Yes, I am taking the course: ${object.code} - ${object.name}`);
//         break;
//         }
// };

// -------- step 4: push if code is new -----------

// if (find < 0) {
//     courselist.push(
//         {code: userinput,
//         name: "null"}
//     );
//     console.log("Course code has been successfully added to courselist.");

//     ------ check if course has been added ------
//     console.log(courselist);
// }


function createCourseArray() {

}

let userinput
let find = -1

function findCourse(courselist) {
    // get 4 digit # input from user and prompt again if invalid data
    do {
        userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");
        if (userinput.length !== 4 || isNaN(userinput)) {
            alert("Invalid data, please try again!");
        }
    } while (userinput.length !== 4 || isNaN(userinput));
}

    // loop to iterate through array to check if the number provided by the user is there

    // if found, change background color of area related to that course to green
for (let i = 0; i < courselist.length; i++) {
    let object = courselist[i]
    find = object["code"].search(userinput);
    if (find >= 0) {
        console.log(`Yes, I am taking the course: ${object.code} - ${object.name}`);
        break;
        }
};

    // if not there, add new element to HTML page
    // show entered value as course code and NA as course description and Fall 2020 as course date
    if (find < 0) {
        courselist.push(
            {code: userinput,
            name: "null"}
        );
        console.log("Course code has been successfully added to courselist.");
}