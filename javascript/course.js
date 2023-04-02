const sections = document.querySelectorAll('.course-info');

let find = -1;
let userinput;

function createCourseArray() {
    const courselist = [];
    for (let item of sections) {
      const itemcoursecodes = item.querySelector('h2');
      const itemcoursecode = itemcoursecodes.textContent
      const itemcoursedates = item.querySelector('.course-details p');
      const itemcoursedate = itemcoursedates.textContent
      const formatedcourse = {
        code: itemcoursecode,
        date: itemcoursedate
      };
      courselist.push(formatedcourse);
    }
    console.log(courselist);
    return courselist;
  }



function findCourse(courselist) {
    const sections = document.querySelectorAll('.course-info');

    // get 4 digit # input from user and prompt again if invalid data
    do {
        userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");
        if (userinput.length !== 4 || isNaN(userinput)) {
            alert("Invalid data, please try again!");
        }
    } while (userinput.length !== 4 || isNaN(userinput));
}

    // loop to iterate through array to check if the number provided by the user is there
    for (let i = 0; i < courselist.length; i++) {
        let object = courselist[i]
        find = object["code"].search(userinput);
        // if found, change background color of area related to that course to green
        if (find >= 0) {
            for (let item of sections) {
                if (item.textContent.includes(userinput)) {
                    item.classList.add("greenBG")
                }
            }
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