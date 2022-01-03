const createTeam = (team) => {
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

    const createEngineer = (engineer) => {
        return `

        `
    }

    const createIntern = (intern) => {
        return `   
        
        `
    }

    const members = []

    members.push(team.filter(item => item.getRole() === "Manager").map(manager => createManager(manager)))
    members.push(team.filter(item => item.getRole() === "Engineer").map(engineer => createEngineer(engineer)))
    members.push(team.filter(item => item.getRole() === "Intern").map(intern => createIntern(intern)))
    return members.join("")
}


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