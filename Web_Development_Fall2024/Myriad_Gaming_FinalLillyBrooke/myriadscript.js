// This is for the profile page
document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile');

    function checkProfiles() {
        const triggerBottom = window.innerHeight / 5 * 4;

        profiles.forEach(profile => {
            const profileTop = profile.getBoundingClientRect().top;

            if(profileTop < triggerBottom) {
                profile.classList.add('active');
            } else {
                profile.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkProfiles);
    checkProfiles(); // Run on page load
});