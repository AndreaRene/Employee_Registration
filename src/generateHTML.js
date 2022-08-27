
function getProp(employee) {
    if (employee.role === "Manager") {
        return `Office: ${employee.officeNumber}`;
    } else if (employee.role === "Engineer") {
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
    } else {
        return `School: ${employee.school}`;
    };
};

function generateCards(teamMembers) {
    for (const employee of teamMembers) {
        return `<div class="card">
        <header class="cardHeader">
            <h2>${employee.name}</h2>
            <h3>${employee.role}</h3>
        </header>
        <section class="cardSection">
            <p>Email: <a href="mailto:${employee.email}" target="_">${employee.email}</a></p>
            <p>ID: ${employee.id}</p>
            <p>${getProp(employee)}</p >
        </section >
    </div > `;
    };
};


function generateHTML(teamMembers) {
    return `<!DOCTYPE html>
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" src="/dist/reset.css">
                                <link rel="stylesheet" src="/dist/style.css">
                                    <title>Document</title>
                                </head>

                                <body>
                                    <header id="pageHeader">

                                    </header>
                                    <main id="pageMain">
                                        <section id="cards">
                                            ${generateCards(teamMembers)}
                                        </section>
                                    </main>
                                    <footer id="pageFooter">

                                    </footer>
                                </body>

                            </html>`;

}

module.exports = generateHTML;