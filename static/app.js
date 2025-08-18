const projectsBtn = document.getElementById("projectsButton");
if (projectsBtn) {
    projectsBtn.addEventListener("click", function() {
        window.location.href = "templates/projects.html";			
    });
}

const homeBtn = document.getElementById("homeButton");
if (homeBtn) {
    homeBtn.addEventListener("click", function() {
        window.location.href = "../index.html";			
    });
}
