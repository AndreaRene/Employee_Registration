
function getProp(employee) {
    if (employee.role === "Manager") {
        return `Office: ${employee.officeNumber}`;
    } else if (employee.role === "Engineer") {
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
    } else {
        return `School: ${employee.school}`;
    };
};

function cardLoop(teamMembers) {
    var card = "";
    for (const employee of teamMembers) {
        card += generateCards(employee);
    };
    return card;
};

function generateCards(employee) {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="card-header text-warning bg-dark p-3">
        <h5 class="card-title border-bottom">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-light">${employee.role}</h6>
    </div>
    <ul class="list-group list-group-flush m-3">
        <li class="list-group-item"><a href="mailto:${employee.email}" target="_">${employee.email}</a>
        </li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${getProp(employee)}</li>
    </ul>
</div>`;
};

function generateHTML(teamMembers) {
    return `<!DOCTYPE html>
        <html lang="en">

            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/dist/style.css">
                                    <title>${teamMembers[0].name}'s Team</title>
                                </head>

                                <body>
                                    <header id="pageHeader">
                                        <h1>${teamMembers[0].name}'s Team</h1>
                                    </header>

                                    <main id="pageMain">
                                    <section id="cards" class="d-flex flex-row flex-wrap justify-content-evenly">
                                            ${cardLoop(teamMembers)}
                                        </section>
                                    </main>

                                    <footer id="pageFooter">

                                    </footer>
                                </body>

                            </html> `;

}

module.exports = generateHTML;