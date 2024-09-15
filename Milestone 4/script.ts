// Get references to the display area

const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

// Handle form submission 
form.addEventListener(`submit`, (event: Event) => {
    event.preventDefault();  // prevent page reload

    // Collect input values
    const name = (document.getElementById(`name`) as HTMLInputElement).value
    const email = (document.getElementById(`email`) as HTMLInputElement).value
    const phone = (document.getElementById(`phone`) as HTMLInputElement).value
    const education = (document.getElementById(`education`) as HTMLInputElement).value
    const experience = (document.getElementById(`experience`) as HTMLInputElement).value
    const skills = (document.getElementById(`skills`) as HTMLInputElement).value

    // Genrate the resume content dynamically

    const resumeHTML = `

    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p>Name:</b><span contentededitable="true">${name}</span></p>
    <p>Email:</b><span contentededitable="true">${email}</span></p>
    <p>Phone:</b><span contentededitable="true">${phone}</span></p>

    <h3>Education</h3>
    <pcontentededitable="true">${education}</p>
    <h3>Experience</h3>
    <pcontentededitable="true">${experience}</p>
    <h3>Skills</h3>
    <pcontentededitable="true">${skills}</p>
`;

// Display the generated resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error(`The reusme dislpay element is missing.`);
}

}) 