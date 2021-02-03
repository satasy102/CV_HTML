getProjectDetail = function (id) {
    localStorage.setItem("id", id);
    let p = document.getElementsByClassName("projectDetail");
    for (let i = 0; i < p.length; i++) {
        p[i].href = "portfolio-details.html";
    }
}

