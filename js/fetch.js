//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// const button = document.querySelector('#usernameForm')

// button.addEventListener('submit', function (event) {
//         event.preventDefault()
//
//
//          const input = document.querySelector('#username').value;
//
//          fetch(`https://api.github.com/users/${input}/events/public`, {headers: {'Authorization': GITHUB_API_KEY}})
//              .then(response => response.json())
//              .then(data => console.log(data[0].payload.commits[0]))
//      })
//
// function getUserCommits (username) {
//     fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_API_KEY}})
//         .then(response => response.json())
//         .then(userData => console.log(userData[0].payload.commits[0]))
//         .catch(error => console.log(error))
// }
//
//
// getUserCommits("xjohnnymartinezx");
// getUserCommits("luisOrell")


//https://api.github.com/repos/luisOrell/codeup-web-exercises/commits
// console.log(data[0].commit.author.date)
//

function getLastCommit (username, token) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'token' + token
        }
    })
        .then(res => res.json())
}
getLastCommit( 'luisOrell', GITHUB_API_KEY)
    .then(data => {
        console.log(data);
    let commit = data.filter(event => event.type === "PushEvent")
        console.log(commit)
        console.log(new Date(commit[0].created_at))

    })


