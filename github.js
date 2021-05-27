// We use ES6 classes
class Github{
    constructor(){
        this.client_id = 'aff0a1d27c3d11ecdbd5';
        this.client_secret = '4628193ea44837c67f4af9982f21ae29ec5d06ab';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Create a getUser method
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}