// Milestone 3: Dynamic Resume Updates
const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Update the header
    const displayName = document.getElementById('display-name') as HTMLElement;
    const displayContact = document.getElementById('display-contact') as HTMLElement;

    displayName.textContent = name || "Your Name";
    displayContact.innerHTML = contact 
        ? `<a href="mailto:${contact.split('|')[0].trim()}">${contact.split('|')[0].trim()}</a> | <a href="tel:${contact.split('|')[1].trim()}">${contact.split('|')[1].trim()}</a>` 
        : 'Contact Info: Email | Phone | LinkedIn';

    // Update the education section
    const displayEducation = document.getElementById('display-education') as HTMLElement;
    displayEducation.textContent = education || "Degree | University | Year";

    // Update the skills list
    const skillsList = document.getElementById('display-skills') as HTMLElement;
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});

// Milestone 5: Generate Shareable Link
const shareableLink = document.getElementById('shareable-link') as HTMLElement;
shareableLink.textContent = window.location.href;  // Use the current URL as the shareable link
