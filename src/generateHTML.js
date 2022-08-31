// TODO: Smile. You are enough.

function getProp(employee) {
    if (employee.role === "Manager") {
        return `Office: <span class="text-light">${employee.officeNumber}</span>`;
    } else if (employee.role === "Engineer") {
        return `Github: <a href="https://github.com/${employee.github}" class="text-light">${employee.github}</a>`;
    } else {
        return `School: <span class="text-light">${employee.school}</span>`;
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
    return `<div class="card m-3" style="width: 18rem; background-color:#ffc107;">
    <div class="card-header text-warning bg-dark p-3">
        <h5 class="card-title border-bottom">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-light">${employee.role}</h6>
    </div>
    <ul class="list-group list-group-flush m-3">
        <li class="list-group-item" style="background-color: #5e6170;">Email: <a
                href="mailto:${employee.email}" target="_" class="text-light">${employee.email}</a>
        </li>
        <li class="list-group-item" style="background-color: #5e6170;">EID: <span class="text-light">${employee.id}</span></li>
        <li class="list-group-item" style="background-color: #5e6170;">${getProp(employee)}</li>
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
            <link rel="stylesheet" href="style.css">
            <!-- TODO: Smile. You are enough. -->
                                    <title>${teamMembers[0].name}'s Team</title>
                                </head>

                                <body style="background-color: #949494; padding-top: 6rem; padding-bottom: 6rem;">
    <header id="pageHeader" class="text-warning bg-dark p-3 text-center position-fixed top-0 w-100" style="z-index: 1;">
        <h1>${teamMembers[0].name}'s Team</h1>
    </header>

    <main id="pageMain">
        <section id="cards" class="d-flex flex-row flex-wrap justify-content-evenly">
                                            ${cardLoop(teamMembers)}
                                        </section>
                                    </main>

                                    <footer id="pageFooter" class="text-warning bg-dark p-3 text-center position-fixed bottom-0 w-100">
                                    <h5>Made with ☕ and JavaScript</h5>
                                    <h6>(But Mostly Coffee)</h6>
                                </footer>
                                </body>

                            </html>`;

}

module.exports = generateHTML;