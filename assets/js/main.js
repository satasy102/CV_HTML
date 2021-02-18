
document.querySelectorAll(".person_name").forEach(e => {
  e.append(person.name)
});

document.querySelectorAll(".facebook").forEach(e => {
  e.setAttribute("href", person.facebook);
})

document.querySelectorAll(".instagram").forEach(e => {
  e.setAttribute("href", person.instagram);
})

document.querySelectorAll(".github").forEach(e => {
  e.setAttribute("href", person.gitHub);
})

document.querySelector("#introduce").append(person.introduce);
document.querySelector("#profile").innerHTML += `
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Ngày sinh:</strong> ${person.dob}</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Số điện thoại:</strong> ${person.phone}</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Email:</strong>${person.email}</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Địa chỉ:</strong> ${person.address}</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Link Github:</strong> <a href="${person.gitHub}" target="blank">${person.gitHub}</a></li>
                  <li><i class="icofont-rounded-right"></i> <strong>CV PDF:</strong> <a href="${person.cvOffline}" target="blank">${person.cvOffline}</a></li>
                  </ul>
              </div>
              <div class="col-lg-6">
                  <div class = "text-center"><img src="${person.qrCode}"/></div>
              </div>
            </div>
`;

person.interests.forEach(e => {
  document.querySelector("#interest").innerHTML += `<img src="${e.srcImg}" alt="${e.name}" class="fav-img" />`
})

document.querySelector("#shortTarget").innerHTML = person.shortTarget;
document.querySelector("#longTarget").innerHTML = person.longTarget;

person.skills.forEach(e => {
  document.querySelector(".skills-content").innerHTML +=
    `<div class="col-lg-6">
  <div class="progress">
    <span class="skill">${e.name} <i class="val"><strong>${e.levelScore}%</strong></i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="${e.levelScore}" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    <div>${e.discription}</div>
  </div>       
</div>`
})

person.educations.forEach(e => {
  document.querySelector("#educations").innerHTML +=
    `<div class="resume-item">
      <h4>${e.nameSchool}</h4>
      <h5>${e.time}</h5>
      <p><em>${e.nameClass}</em></p>
    </div>`
})

person.experiences.forEach(e => {
  document.querySelector("#experience").innerHTML +=
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
  document.querySelector("#certi").innerHTML +=
    `<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
  data-aos-delay="200">
  <div class="icon-box iconbox-blue">
    <div class="icon">
      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <path stroke="none" stroke-width="0" fill="#f5f5f5"
          d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426">
        </path>
      </svg>
      <i class="bx bx-file"></i>
    </div>
    <h4>${e.name}</h4>
    <h6>${e.time}</h6>
    <p>${e.uses}</p>
  </div>
</div>`
})

person.projects.forEach(p => {
  document.querySelector("#projects").innerHTML +=
    `<div class="col-lg-4 col-md-6 portfolio-item filter-web">
  <div class="portfolio-wrap">
    <img src="${p.image1}" class="img-fluid" alt="">
    <div class="portfolio-info">
      <h4>${p.name}</h4>
      <a href="${p.homeLink}" target ="blank">Link trang web</p>
      <div class="portfolio-links">
        <a href="${p.fullImage}" data-gall="portfolioGallery" class="venobox"
          title="Full Image"><i class="bx bx-plus"></i></a>
        <a href="" data-gall="portfolioDetailsGallery" data-vbtype="iframe"
          class="venobox projectDetail" title="Thông tin chi tiết" onclick = getProjectDetail(${p.id})><i class="bx bx-link"></i></a>
      </div>
    </div>
  </div>
</div>`

})

