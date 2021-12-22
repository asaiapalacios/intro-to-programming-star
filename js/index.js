// LESSON 4.2: JavaScript and the DOM

// create a new date object
const today = new Date();

// retrieve the current year from the date object
const thisYear = today.getFullYear();

// select footer element
const footer = document.querySelector("footer");

// create a new div element
const copyright = document.createElement("div");

// set innerHTML
copyright.innerHTML = "&copy; " + "Asaia Palacios ";

// append the copyright element to the footer
footer.appendChild(copyright);
// LONG version example below (without variables):
// document.querySelector("footer").appendChild(document.createElement("p").innerHTML = "Asaia Palacios " + thisYear);

// new div element for thisYear (helps with spacing in CSS file between copyright and year)
const copyrightYear = document.createElement("div");
copyrightYear.innerHTML = thisYear;
copyright.appendChild(copyrightYear);

// add a class to DOM element copyright (to horizontally display footer items inside a flex container in CSS file)
copyright.className = "copyright-item";

// list technical skills ○
const skills = ["JavaScript", "HTML", "CSS", "Git", "CLI"];

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

// LESSON 6.2: Working with Fetch API
// create a 'GET' request using Fetch API (same GitHub API url as before)
fetch("https://api.github.com/users/asaiapalacios/repos")
  .then(checkStatus)
  .then((response) => response.json()) // returns a promise response in JSON
  .then((data) => {
    return window.addEventListener("readystatechange", displayRepos(data));
  })
  .catch((error) => console.log("There was a problem", error));

// HELPER FUNCTIONS (2)
// function checks if promise resolved w/the response obj's ok property set to true
function checkStatus(response) {
  if (response.ok) {
    // return a promise obj resolved w/the given value (the response obj)
    return Promise.resolve(response);
  } else {
    // if a promise is rejected b/c of a failed HTTP response,
    // the error showing the response.statusText will...
    // be passed to the catch method & printed to the console
    return Promise.reject(new Error(response.statusText));
  }
}

// function displays GitHub repos as a bulleted list
function displayRepos(data) {
  console.log("You did it!");
  console.log(data);

  // select element <section> with id "projects"
  const projectSection = document.getElementById("projects");
  // query projectSection <ul> element
  const projectList = projectSection.querySelector("ul");
  // access <div> element within Project's <section>
  const journey = document.querySelector(".coding-journey");

  // create a for-loop to iterate over array "data"
  data.forEach((repo) => {
    // console.log(repo);

    if (repo.name === "intro-to-programming-star") {
      // console.log(repo.name);

      const project = document.createElement("li"); // create list item (li) element
      project.innerText = repo.name; // set <li> inner text to current array element's name property
      // console.log(project);

      projectList.appendChild(project); // append <li> repo names to <ul> of <section> element
      journey.appendChild(projectList); // append bullet-listed repos to <p> of Project's <section>
      // console.log("success!");
    }
  });
}
