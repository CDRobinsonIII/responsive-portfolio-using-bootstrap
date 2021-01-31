const portfolioDetails = [
    {
        portfolioScreenShot: ["./assets/images/the_brewway.jpg","./assets/images/weather_dashboard.jpg","./assets/images/burgerapp.jpg","./assets/images/studentportal.jpg"],
        portfolioTitle: ["The Brewway", "Weather Dashboard", "Burger App", "Student Database Portal"],
        portfolioGitHubLinks: ["https://github.com/CDRobinsonIII/brewery-tour", "https://github.com/CDRobinsonIII/weather-dashboard","https://github.com/CDRobinsonIII/burger-app","https://github.com/CDRobinsonIII/student-database-portal"],
        portfolioDeployedLinks: ["https://cdrobinsoniii.github.io/brewery-tour/","https://cdrobinsoniii.github.io/weather-dashboard/","https://hamburger-application.herokuapp.com/","https://student-registration-tracker.herokuapp.com/"]

    }
];



function displayPortfolio () {

    $("#portfolioPage").css("display","block");
    $("#portfolioHighlights").css("display", "block");
    $("#aboutMe").css("display", "none");
    $("#connectWithMe").css("display", "none");
    console.log("This is the css for connectWithMe: "+( $("#connectWithMe").css()));
}

function displayFirstProjectDetails () {
    $("#portfolioHighlights").text("");

    let projectScreenShot = $("<img>").attr("src",portfolioDetails[0].portfolioScreenShot[0]).addClass("mx:auto projectScreenShotDetails");
    let projectTitle = $("<h1>").text(portfolioDetails[0].portfolioTitle[0]);
    let projectGitHubLink = $("<p>").text("View GitHub Project Repo here: ").append($("<a target='_blank'>").attr("href", portfolioDetails[0].portfolioGitHubLinks[0]).text(portfolioDetails[0].portfolioGitHubLinks[0]));
    let projectDeployedLink = $("<p>").text("View deployed project here: ").append($("<a target='_blank'>").attr("href",portfolioDetails[0].portfolioDeployedLinks[0]).text(portfolioDetails[0].portfolioDeployedLinks[0]));

    $("#portfolioHighlights").append(projectScreenShot,projectTitle,projectGitHubLink,projectDeployedLink);

}

function displayProjectDetails (event) {
    $("#portfolioHighlights").text("");

    event.preventDefault(event);

    let projectToDisplayId = event.target.id;

    let projectScreenShot = $("<img>").attr("src",portfolioDetails[0].portfolioScreenShot[projectToDisplayId]).addClass("mx:auto projectScreenShotDetails");
    let projectTitle = $("<h1>").text(portfolioDetails[0].portfolioTitle[projectToDisplayId]);
    let projectGitHubLink = $("<p>").text("View GitHub Project Repo here: ").append($("<a target='_blank'>").attr("href", portfolioDetails[0].portfolioGitHubLinks[projectToDisplayId]).text(portfolioDetails[0].portfolioGitHubLinks[projectToDisplayId]));
    let projectDeployedLink = $("<p>").text("View deployed project here: ").append($("<a target='_blank'>").attr("href",portfolioDetails[0].portfolioDeployedLinks[projectToDisplayId]).text(portfolioDetails[0].portfolioDeployedLinks[projectToDisplayId]));

    $("#portfolioHighlights").append(projectScreenShot,projectTitle,projectGitHubLink,projectDeployedLink);

}

$("#viewPortfolio").on("click",displayPortfolio);

$(".portfolioshots").on("click",displayProjectDetails);

displayFirstProjectDetails();



