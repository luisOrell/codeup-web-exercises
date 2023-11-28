const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Problem 1

const languages = users.filter ( lan => lan.languages.length >= 3)

console.log(languages)

//Problem 2


const emails = users.map ( key => key.email)

console.log(emails)


//Problem 3
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// ex: const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);


const experience = users.reduce((number, experience) => {
    return number + experience.yearsOfExperience
}, 0)

console.log(experience)

let avgExperience = experience/users.length
console.log(avgExperience)

//Problem 5
//Use .reduce to get the longest email from the list of users

const longestEmail = emails.reduce((longest, email) => {
    if(email.length > longest.length) {
        return email
    } else {
        return longest
    }
}, "")

console.log(longestEmail);

//Problem 6

let instructors = users.reduce(function(output, user, currentIndex){
    if(currentIndex === users.length -1){
        return `${output} ${user.name}.`
    }
    return `${output} ${user.name},`;
}, "Your instructors are:")
console.log(instructors)