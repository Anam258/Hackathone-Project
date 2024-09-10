// Milestone 3: Dynamic Resume Updates
const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get the form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Update the resume display section with user-entered information
    const displayName = document.getElementById('display-name') as HTMLElement;
    displayName.textContent = name.trim() ? `Name: ${name.trim()}` : '';

    // Update the contact info
    const displayContact = document.getElementById('display-contact') as HTMLElement;
    if (contact) {
        const [email, phone] = contact.split('|').map(item => item.trim());
        displayContact.innerHTML = `
            <a href="mailto:${email}">${email}</a> | 
            <a href="tel:${phone}">${phone}</a>
        `;
    }

    // Update the education section
    const displayEducation = document.getElementById('display-education') as HTMLElement;
    displayEducation.textContent = education || "Degree | University | Year";

    // Update the skills list
    const skillsList = document.getElementById('display-skills') as HTMLUListElement;
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});

// Milestone 4: Editable Resume Section
const editableContent = document.getElementById('editable-content') as HTMLElement;

editableContent.addEventListener('input', () => {
    // Capture the edited content and reflect it in the resume dynamically
    const editedContent = editableContent.innerHTML;
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

    resumeDisplay.innerHTML = editedContent; // Replace the resume display with the edited content
});

// Milestone 5: Generate Shareable Link
const shareableLink = document.getElementById('shareable-link') as HTMLElement;
shareableLink.textContent = window.location.href;  // Use the current URL as the shareable link

// Optional: Make the link clickable and copyable
shareableLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
});
