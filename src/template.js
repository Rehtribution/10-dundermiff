//sets the html framework for each team member and retrieves data for each category
const createTeam = (team) => {
    //framework for manager
    const createManager = (manager) => {
        return `
            <div class="manager-container">
                <h1>Name: ${manager.getName()}</h1>
                <p>Email: ${manager.getEmail()}</p>
                <p>ID: ${manager.getId()}</p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        `
    }
    //framework for engineer
    const createEngineer = (engineer) => {
        return `
            <div class="engineer-container">
                <h1>Name: ${engineer.getName()}</h1>
                <p>Email: ${engineer.getEmail()}</p>
                <p>ID: ${engineer.getId()}</p>
                <p><a href="https://api.github.com/users/${engineer.github}">Github: ${engineer.    getGithub()}</a></p>
            </div>
        `
    }
// api returns profile data but does not link to the github
    //framework for intern
    const createIntern = (intern) => {
        return `   
            <div class="intern-container">
                <h1>Name: ${intern.getName()}</h1>
                <p>Email: ${intern.getEmail()}</p>
                <p>ID: ${intern.getId()}</p>
                <p>School: ${intern.getSchool()}</p>
            </div>
        `
    }

    //team members array
    const members = []
//filtering and mapping through entries to return the associated data
    members.push(team.filter(item => item.getRole() === "Manager").map(manager => createManager(manager)))
    members.push(team.filter(item => item.getRole() === "Engineer").map(engineer => createEngineer(engineer)))
    members.push(team.filter(item => item.getRole() === "Intern").map(intern => createIntern(intern)))
    return members.join("")
}

//sets the html framework and calls the createTeam const at the top of the page
module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team</title>
    </head>
    <body>
        <div>${createTeam(team)}</div>
    </body>
    </html>
    `
}