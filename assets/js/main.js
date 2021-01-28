document.querySelector("#person_name").append(person.name);
document.querySelector("#person_dob").append(person.dob);
document.querySelector("#person_phone").append(person.phone);
document.querySelector("#person_address").append(person.address);
document.querySelector("#introduce").append(person.introduce);
document.querySelector("#person_gitHub").setAttribute("href", person.gitHub);

person.interests.forEach(e => {
    document.querySelector("#person_interest").innerHTML += `<img src="${e.srcImg}" alt="${e.name}" class="fav-img" />`
})

document.querySelector("#shortTarget").innerHTML = person.shortTarget;
document.querySelector("#longTarget").innerHTML = person.longTarget;
person.skills.forEach(e => {
    document.querySelector("#person_skill").innerHTML += `
     <div class="col-md-6">
         <div class="service-item">
             <div class="first-service-icon service-icon"></div>           
             <div class="o-media  o-media--block in-view">
                        <div class="o-media__figure">
                            <div class="c-number  t-primary-color">
                            ${e.levelScore}<small>%</small>
                            </div>
                        </div>
                        <div class="o-media__body">
                            <h4>${e.name}</h4>
                        </div>
                    </div>
             <p>${e.discription}</p>
             <div class="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                 <div class="a-progress-bar  c-progress-bar__filler  t-primary-bg in-view"
                     data-percent="${e.levelScore}" style="width: ${e.levelScore}%;"></div>
             </div>
         </div>
     </div>`
})

let stt = 0;
person.projects.forEach(e => {
    stt++;
    if (stt == 1) {
        document.querySelector(".isotope-toolbar").innerHTML += `
        <label><input type="radio" data-type="${e.id}" name="isotope-filter" checked/>
        <span>project${stt}</span></label>`
    } else {
        document.querySelector(".isotope-toolbar").innerHTML += `
        <label><input type="radio" data-type="${e.id}" name="isotope-filter" />
        <span>project${stt}</span></label>`
    }


})


person.projects.forEach(e => {
    document.querySelector(".isotope-box").innerHTML +=
        `<div class="isotope-item" data-type="${e.id}">
        <figure class="snip1321">
            <img src="${e.image}" alt="sq-sample26" />
            <figcaption>
                <a href="${e.homeLink}" target="_blank" rel="noopener noreferrer"><i class="fa fa-link"></i></a>
                <h5>${e.name}</h5>
            </figcaption>
        </figure>
    </div>
    <div class="isotope-item" data-type="${e.id}">
            <p>- Thời gian: ${e.time} </p>
            <p>- Số người làm việc: ${e.group}</p>
            <p>- Front-end: ${e.fe} </p>
            <p>- Ngôn ngữ: ${e.language} </p>
            <p>- Database: ${e.database} </p>
            <p>- Công nghệ: ${e.technology} </p>
            <p>- Tài khoản admin: ${e.accountAdmin}</p>
            <p>- Trang chủ: <a href="${e.homeLink}" target = "blank">${e.homeLink}</a></p>
            <p>- Trang Admin: <a href="${e.homeLink}" target = "blank">${e.adminLink}</a></p>
            <p>- Link Github: <a href="${e.gitHub}" target = "blank">${e.gitHub}</a></p>        
    </div>
    <div class="isotope-item inline-div" data-type="${e.id}">
    <p>- Các công việc cá nhân đã làm:</p>
    <p>${e.knowleage}</p>
    </div>
    `
})

person.educations.forEach(e => {
    document.querySelector(".education").innerHTML +=
        `<div class="resume-item">
            <h4>${e.nameSchool}</h4>
            <h5>${e.time}</h5>
            <p><em>${e.nameClass}</em></p>
        </div>`
})

person.experiences.forEach(e => {
    document.querySelector(".experience").innerHTML +=
        `<div class="resume-item">
        <h4>${e.nameCompany}</h4>
        <h5>${e.time}</h5>
        <p><em>${e.position}</em></p>
        <ul>
            ${e.experience}
        </ul>
    </div>`
})

person.certificates.forEach(e => {
    document.querySelector("#certificate").innerHTML += `
    <div class="col-md-6">
        <div class="service-item">
            <div class="first-service-icon service-icon"></div>           
            <div class="o-media  o-media--block in-view">
                        <div class="c-number  t-primary-color mr-1" >
                            ${e.time}
                        </div>
                       <div class="o-media__body">
                           <h4> ${e.name}</h4>
                       </div>                    
            </div>
            <p>${e.uses}</p>
        </div>
    </div>`
})

person.referencePersons.forEach(e => {
    document.querySelector("#referencePerson").innerHTML += `
    <p>- Họ tên: <span class="special">${e.name}</span> </p>
    <p>- Chức vụ: <span class="highlight">${e.position}</span></p>
    <p>- Công ty: <span class="highlight">${e.company}</span></p>
    <p>- Điện thoại: <span class="highlight">${e.phone}</span></p>
    <p>- Điện thoại: <span class="highlight">${e.email}</span></p>`
})






