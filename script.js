// Milestone 3: Dynamic Resume Updates
var form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the form values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    // Update the resume display section with user-entered information
    var displayName = document.getElementById('display-name');
    displayName.textContent = name.trim() ? "Name: ".concat(name.trim()) : '';
    // Update the contact info
    var displayContact = document.getElementById('display-contact');
    if (contact) {
        var _a = contact.split('|').map(function (item) { return item.trim(); }), email = _a[0], phone = _a[1];
        displayContact.innerHTML = "\n            <a href=\"mailto:".concat(email, "\">").concat(email, "</a> | \n            <a href=\"tel:").concat(phone, "\">").concat(phone, "</a>\n        ");
    }
    // Update the education section
    var displayEducation = document.getElementById('display-education');
    displayEducation.textContent = education || "Degree | University | Year";
    // Update the skills list
    var skillsList = document.getElementById('display-skills');
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
// Milestone 4: Editable Resume Section
var editableContent = document.getElementById('editable-content');
editableContent.addEventListener('input', function () {
    // Capture the edited content and reflect it in the resume dynamically
    var editedContent = editableContent.innerHTML;
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = editedContent; // Replace the resume display with the edited content
});
// Milestone 5: Generate Shareable Link
var shareableLink = document.getElementById('shareable-link');
shareableLink.textContent = window.location.href; // Use the current URL as the shareable link
// Optional: Make the link clickable and copyable
shareableLink.addEventListener('click', function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
        alert("Link copied to clipboard!");
    }).catch(function (err) {
        console.error('Failed to copy link: ', err);
    });
});
