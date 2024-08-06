document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileDob = document.getElementById('profile-dob');
    const profileBio = document.getElementById('profile-bio');

    const originalProfileData = {
        name: profileName.innerText,
    email: profileEmail.innerText,
    dob: profileDob.innerText,
    bio: profileBio.innerText,
    };

    editBtn.addEventListener('click', () => {
        editProfile();
    });

    saveBtn.addEventListener('click', () => {
        saveProfile();
    });

    function editProfile() {
        profileName.contentEditable = "true";
    profileEmail.contentEditable = "true";
    profileDob.contentEditable = "true";
    profileBio.contentEditable = "true";

    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
    }

    function saveProfile() {
        profileName.contentEditable = "false";
    profileEmail.contentEditable = "false";
    profileDob.contentEditable = "false";
    profileBio.contentEditable = "false";

    editBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';
    }
});