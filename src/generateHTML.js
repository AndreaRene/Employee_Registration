
function getProp(employee) {
    console.log(employee, "from GETPROP");
    if (employee.role === "Manager") {
        return `Office: ${employee.officeNumber}`;
    } else if (employee.role === "Engineer") {
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
    } else {
        return `School: ${employee.school}`;
    };
};

function cardLoop(teamMembers) {
    var temp = "";
    for (const employee of teamMembers) {
        temp += generateCards(employee);
    };
    return temp;
};

function generateCards(employee) {
    return `<div class="card">
        <header class="cardHeader">
            <h2>${employee.name}</h2>
            <h3>${employee.role}</h3>
        </header>
        <section class="cardSection">
            <p>Email: <a href="mailto:${employee.email}" target="_">${employee.email}</a></p>
            <p>ID: ${employee.id}</p>
            <p>${getProp(employee)}</p>
        </section>
    </div> `;
};

function generateHTML(teamMembers) {
    console.log(teamMembers, "from GENERATEHTML");
    return `<!DOCTYPE html>
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" src="/dist/reset.css">
                                <link rel="stylesheet" src="/dist/style.css">
                                    <title>${teamMembers[0].name}'s Team</title>
                                </head>

                                <body>
                                    <header id="pageHeader">
                                        <h1>${teamMembers[0].name}'s Team</h1>
                                    </header>

                                    <main id="pageMain">
                                        <section id="cards">
                                            ${cardLoop(teamMembers)}
                                        </section>
                                    </main>

                                    <footer id="pageFooter">

                                    </footer>
                                </body>

                            </html> `;

}

module.exports = generateHTML;