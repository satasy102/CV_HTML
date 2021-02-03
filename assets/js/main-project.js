
findProjectById = function (id) {
    for (let i = 0; i < person.projects.length; i++) {
        if (person.projects[i].id == id) {
            return person.projects[i];
        }
    }
}

let id = localStorage.getItem("id");
let projectDetail = findProjectById(id);
document.getElementById("portfolio-title").innerHTML = projectDetail.name;
let i1 = document.getElementsByClassName("image1");
for (let i = 0; i < i1.length; i++) {
    i1[i].src = projectDetail.image1;
}
let i2 = document.getElementsByClassName("image2");
for (let i = 0; i < i2.length; i++) {
    i2[i].src = projectDetail.image2;
}
let i3 = document.getElementsByClassName("image3");
for (let i = 0; i < i3.length; i++) {
    i3[i].src = projectDetail.image3;
}

document.getElementById("time").innerHTML = projectDetail.time;
document.getElementById("group").innerHTML = projectDetail.group;
document.getElementById("fe").innerHTML = projectDetail.fe;
document.getElementById("language").innerHTML = projectDetail.language;
document.getElementById("database").innerHTML = projectDetail.database;
document.getElementById("accountAdmin").innerHTML = projectDetail.accountAdmin;
document.getElementById("homeLink").href = projectDetail.homeLink;
document.getElementById("adminLink").href = projectDetail.adminLink;
document.getElementById("gitHub").href = projectDetail.gitHub;
document.getElementById("homeLink").innerHTML = projectDetail.homeLink;
document.getElementById("adminLink").innerHTML = projectDetail.adminLink;
document.getElementById("gitHub").innerHTML = projectDetail.gitHub;
document.getElementById("knowleage").innerHTML = projectDetail.knowleage;
