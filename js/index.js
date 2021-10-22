// Create a new date object
const today = new Date();

// Retrieve the current year from the date object
const thisYear = today.getFullYear();

// Select footer element
const footer = document.querySelector("footer");

// Create a new paragraph 'p' element
const copyright = document.createElement("p");

// Set innerHTML
copyright.innerHTML = "Asaia Palacios " + thisYear;

// Append the copyright element to the footer
footer.appendChild(copyright);
// document.querySelector("footer").appendChild(document.createElement("p").innerHTML = "Asaia Palacios " + thisYear); -> LONG version example (without variables)

// List technical skills
const skills = ["HTML", "CSS", "JavaScript"];

// Access id skills of index.html section
const skillsSection = document.getElementById("skills");
// const skillsSection = document.querySelector("#skills"); -> OPTION 2

// Find <ul> element and store in a variable
const skillsList = skillsSection.querySelector("ul");

// Create a for-loop to iterate over array "skills"
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // Create list item
  skill.innerText = skills[i]; // Set <li> inner text to iterative array element
  skillsList.appendChild(skill); // Append <li> items to <ul> of section id "skills"
}
