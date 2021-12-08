// LESSON 4.2: JavaScript and the DOM

// create a new date object
const today = new Date();

// retrieve the current year from the date object
const thisYear = today.getFullYear();

// select footer element
const footer = document.querySelector("footer");

// create a new paragraph 'p' element
const copyright = document.createElement("p");

// set innerHTML
copyright.innerHTML = "&copy; " + "Asaia Palacios " + thisYear;

// append the copyright element to the footer
footer.appendChild(copyright);
// LONG version example below (without variables):
// document.querySelector("footer").appendChild(document.createElement("p").innerHTML = "Asaia Palacios " + thisYear);

// list technical skills
const skills = ["○ HTML", "○ CSS", "○ JavaScript"];

// access id skills of index.html section
const skillsSection = document.getElementById("skills");
// const skillsSection = document.querySelector("#skills"); -> OPTION 2

// find <ul> element and store in a variable
const skillsList = skillsSection.querySelector("ul");

// create a for-loop to iterate over array "skills"
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // Create list item
  skill.innerText = skills[i]; // Set <li> inner text to iterative array element
  skillsList.appendChild(skill); // Append <li> items to <ul> of section id "skills"
}

// LESSON 4.3: HTML Forms and DOM Practice

// select "leave_message" form by name attribute -> returns form element w/the name "leave_message"
const messageForm = document.leave_message;

// when detect "submit", run this function -> 2 args: event type; function to run when event detected
messageForm.addEventListener("submit", (e) => {
  // prevent default-refreshing behavior after submitting form
  e.preventDefault();

  // retrieve each form field value
  const nameInput = e.target.name.value;
  const emailInput = e.target.email.value;
  const messageInput = e.target.message.value;

  // log the 3 form field variables (their values)
  console.log(nameInput, emailInput, messageInput);

  // access id "messages" to retrieve specific section element
  const messageSection = document.getElementById("messages");
  // query to find <ul> element within this section element
  const messageList = messageSection.querySelector("ul");
  // create new <li>
  const newMessage = document.createElement("li");

  // set innerHTML using mailto and form field values
  newMessage.innerHTML = `<a href=mailto:${emailInput}>${nameInput}</a><span> wrote: ${messageInput} </span>`;

  // create a new button
  const removeButton = document.createElement("button");
  // set inner text to "remove"
  removeButton.innerText = "Remove";
  // set type attribute to "button"
  removeButton.setAttribute("type", "button");
  // add an event listener to the removeButton
  removeButton.addEventListener("click", (e) => {
    // find the button's parent element using DOM Traversal
    let entry = e.target.parentNode;
    entry.remove(); // minus (e.target)
  });

  // append the removeButton to the newMessage <li> element
  newMessage.appendChild(removeButton);
  // append the newMessage to the messageList <ul> element
  messageList.appendChild(newMessage);

  // clear the form
  e.target.reset();
  // messageForm.reset(); -> alternative option to clear form
});

// LESSON 6.1: Fetch GitHub Repo

// a) REQUESTING DATA:

// create an instance of the object XMLHttpRequest
let githubRequest = new XMLHttpRequest();
// prepare request to web server with URL endpoint
githubRequest.open("GET", "https://api.github.com/users/asaiapalacios/repos");
// send request
githubRequest.send();

// b) HANDLING RESPONSE FROM WEB SERVER:

// add event listener with callback function (invoked when event is dispatched)
// callback - programming you want to run when the web server sends back its response

// option 1
githubRequest.onload = function () {
  // 4 = server has sent back its complete response
  if (githubRequest.readyState === 4) {
    // return status from server is OK
    if (githubRequest.status === 200) {
      console.log("success");
      let repositories = JSON.parse(this.response); // parse JSON str response to JS object
      console.log(repositories);

      // c) DISPLAY REPOS IN LIST:
      // select element <section> with id "projects"
      const projectSection = document.getElementById("projects");
      // query projectSection <ul> element
      const projectList = projectSection.querySelector("ul");

      // create a for-loop to iterate over array "repositories"
      for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li"); // create list item
        project.innerText = repositories[i].name; // set <li> inner text to current array element's name property
        projectList.appendChild(project); // append <li> repo names to <ul> of element <section>
      }
    }
  }
};

// option 2 (use addEventListener instead)
// githubRequest.addEventListener("load", function() {
// ~ same code block goes here ~
// });
