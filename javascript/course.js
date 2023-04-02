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
    // get 4 digit # input from user and prompt again if invalid data
    do {
      userinput = prompt("Please enter a 4 digit course code. (e.g. '1310') ");
      if (userinput.length !== 4 || isNaN(userinput)) {
        alert("Invalid data, please try again!");
      }
    } while (userinput.length !== 4 || isNaN(userinput));
  
    // loop to iterate through array to check if the number provided by the user is there
    for (let i = 0; i < courselist.length; i++) {
      let object = courselist[i];
      find = object["code"].search(userinput);
      // if found, change background color of area related to that course to green
      if (find >= 0) {
        for (let item of sections) {
          if (item.textContent.includes(userinput)) {
            item.classList.add("greenBG");
          }
        }
      break;
      }
    }
  
    // if not there, add new element to HTML page
    // show entered value as course code and NA as course description and Fall 2020 as course date
    if (find < 0) {
      //remove no border from top section and replace with new one
      const removeid = document.querySelector("#section-no-bot-border");
      removeid.removeAttribute("id");
      //create new section with class and id
      const newsection = document.createElement("section");
      newsection.classList.add("course-info");
      newsection.id = "section-no-bot-border";
      //create new div and add class
      const newdiv = document.createElement("div");
      newdiv.classList.add("course-details");
      //create new h2 with user input
      const newcoursecode = document.createElement("h2");
      newcoursecode.textContent = userinput;
      //create new p with date as 'Fall 2020'
      const newcoursedate = document.createElement("p");
      newcoursedate.textContent = "Fall 2020";
      //create new div for details and put 'N/A'
      const coursedetails = document.createElement("div")
      coursedetails.classList.add("course-summary")
      coursedetails.textContent = "N/A";
      //add child div (course code and date) and other div (details) to parent section
      newsection.appendChild(newdiv);
      newsection.appendChild(coursedetails);
      newdiv.appendChild(newcoursecode);
      newdiv.appendChild(newcoursedate);
      //add new section inside of main
      document.querySelector('main').appendChild(newsection);
  
      courselist.push({
        code: userinput,
        description: "NA",
        date: "Fall 2020"
      });
      console.log("Course code has been successfully added to courselist.");
    }
  
    console.log(courselist);
  }