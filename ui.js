class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // Display Profile in UI
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3 text-left">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block bg-dark">View Profile</a>
                        
                    </div>
                    <div class="col-md-9">
                        <div class="badges"> 
                            <span class="badge bg-secondary">Public Repos: ${user.public_repos}</span>
                            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge bg-secondary">Followers: ${user.followers}</span>
                            <span class="badge bg-secondary">Following ${user.following}</span>
                        </div>

                        <ul class="list-group">
                            <li id="name" class="list-group-item list-group-item-dark bg-dark">${user.name}</li>
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3>Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
                <div class="card card-body mb-2"> 
                    <div class="row">
                        <div class="col-md-9">
                            <a target="_blank" href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-3">
                            <span class="badge bg-secondary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge bg-secondary">Watchers: ${repo.watchers}</span>
                            <span class="badge bg-secondary">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show Alert Message
    showAlert(message, className){
        // Clear any remaining alerts
        this.clearAlert();
        
        // Create div
        const div = document.createElement('div');

        // Add classes 
        div.className = className;

        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.searchContainer');

        // Get Search Box
        const search = document.querySelector('.search');

        // Insert Alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Create a new method => Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }


    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
    // Clear Repos
    clearRepos() {
        this.repos.innerHTML = '';
    }
}