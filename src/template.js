//sets the html framework for each team member and retrieves data for each category
const createTeam = (team) => {
    //framework for manager
    const createManager = (manager) => {
        return `
            <div class="card">
                <h1>${manager.getName()}</h1>
                <p>${manager.getEmail()}</p>
                <p>ID: ${manager.getId()}</p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        `
    }
    //framework for engineer
    const createEngineer = (engineer) => {
        return `
            <div class="card">
                <h1>${engineer.getName()}</h1>
                <p>${engineer.getEmail()}</p>
                <p>ID: ${engineer.getId()}</p>
                <p><a href="https://api.github.com/users/${engineer.github}">Github: ${engineer.    getGithub()}</a></p>
            </div>
        `
    }
// api returns profile data but does not link to the github
    //framework for intern
    const createIntern = (intern) => {
        return `   
            <div class="card">
                <h1>${intern.getName()}</h1>
                <p>${intern.getEmail()}</p>
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
        <link rel="stylesheet" href="../src/style.css">
        <title>TPG:Team Profile Generator</title>
    </head>
    
    <header>
        <h1>The Office Team</h1>
    </header>
    
    <!--main content start-->
    <body>
        <div>${createTeam(team)}</div>
    </body>
    <!--main content end-->
    
    <!--footer-->
    <footer>
        <h4>Team Generator Challenge 10</h4><a href="README.md">ReadMe</a>
        &copy; 2021 Rehtribution
    </footer>
    </html>
    `
}
