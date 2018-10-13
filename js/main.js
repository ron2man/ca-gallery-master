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
                <img class="img-fluid" src="img/portfolio/${project.name}.jpg" alt="${project.name}">
              </a>
              <div class="portfolio-caption">
                <h4>${project.title}</h4>
              </div>
            </div>
        `
    });
    container.innerHTML = strHtml;
}

function onClickMsg() {
  var $subject = $('#exampleFormControlInput1').val();
  var $msg = $('#exampleFormControlTextarea1').val();
  console.log('msg=',$msg,'subject',$subject)
  openGmail($subject, $msg);

}