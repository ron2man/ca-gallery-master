// console.log('Starting up');
console.log('controller');


function init() {
    createProjects();
    renderProjects();
}

function renderModal(projId,idx){
    // console.log(projId, idx);
    var project = readProj(projId);
    var modalSelector = document.querySelector('#portfolioModal1');
    modalSelector.querySelector('.modal-body h2').innerHTML = project.name;
    modalSelector.querySelector('.modal-body .item-intro').innerHTML = project.title;
    modalSelector.querySelector('.modal-body .description').innerHTML = project.desc;
}

function renderProjects() {
    var projects = getProjs();
    var container = document.querySelector('#projects-portfolio-cont')
    var strHtml = ""
    projects.forEach(function (project, idx) {
        strHtml += `
        <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${project.id}',${idx})">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/0${idx+1}-thumbnail.jpg" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.title}</p>
              </div>
            </div>
        `
    });
    container.innerHTML = strHtml;
}