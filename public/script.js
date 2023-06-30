function checkWorkingHours() {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
    const hour = currentTime.getHours();

    // Monday to Friday (0-6 represents Sunday to Saturday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Working hours from 9 to 17
        if (hour >= 9 && hour <= 17) {
            document.body.style.display = 'block'; // Show the web application
        } else {
            document.body.style.display = 'none'; // Hide the web application
            alert('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
        }
    } else {
        document.body.style.display = 'none'; // Hide the web application
        alert('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
}

checkWorkingHours();
