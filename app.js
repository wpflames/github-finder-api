// Init GitHub
const github = new Github;

// Initialize the UI Class
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input EventListener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText != ''){
        //console.log(userText);

        // Make http call
        github.getUser(userText)
            .then(data => {
                
                //console.log(data);

                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                    
                }else{
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // Clear profile
        ui.clearProfile();
        ui.clearRepos();
    }
});