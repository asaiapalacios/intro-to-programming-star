// Lesson 4.2 JavaScript and the DOM

// create a new date object
const today = new Date();

// retrieve the current year from the date object
const thisYear = today.getFullYear();

// select footer element
const footer = document.querySelector("footer");

// create a new paragraph 'p' element
const copyright = document.createElement("p");

// set innerHTML
copyright.innerHTML = "Asaia Palacios " + thisYear;

// append the copyright element to the footer
footer.appendChild(copyright);
// LONG version example below (without variables):
// document.querySelector("footer").appendChild(document.createElement("p").innerHTML = "Asaia Palacios " + thisYear);

// list technical skills
const skills = ["HTML", "CSS", "JavaScript"];

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

// Lesson 4.3 HTML Forms and DOM Practice

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
  removeButton.innerText = "remove";
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
