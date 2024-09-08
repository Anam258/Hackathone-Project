// Milestone 3: Dynamic Resume Updates
const form = document.getElementById('resume-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',');

    // Update the resume display section with user-entered information
    const displayName = document.getElementById('display-name');
    displayName.textContent = name.trim() ? `Name: ${name.trim()}` : '';

    // Update the contact info
    const displayContact = document.getElementById('display-contact');
    displayContact.innerHTML = contact 
        ? `<a href="mailto:${contact.split('|')[0].trim()}">${contact.split('|')[0].trim()}</a> | <a href="tel:${contact.split('|')[1].trim()}">${contact.split('|')[1].trim()}</a>` 
        : '<a href="mailto:anamanwer268@gmail.com">anamanwer268@gmail.com</a> | <a href="tel:+923012440210">03012440210</a>';

    // Update the education section
    const displayEducation = document.getElementById('display-education');
    displayEducation.textContent = education || "Degree | University | Year";

    // Update the skills list
    const skillsList = document.getElementById('display-skills');
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});

// Milestone 5: Generate Shareable Link
const shareableLink = document.getElementById('shareable-link');
shareableLink.textContent = window.location.href;  // Use the current URL as the shareable link
