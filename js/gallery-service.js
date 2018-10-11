console.log('MODAL');

gProjs = [];

function getProjs() {
    return gProjs;
}

// inject initial data to gProjs
function createProjects() {
    createProj('name', 'better call saul', 'stam description','url1', 'img/portfolio/01-thumbnail.jpg')
    createProj('name2', 'title2', 'stam description2','url2', 'img/portfolio/02-thumbnail.jpg')
    createProj('name3', 'title3', 'stam description3','url3', 'img/portfolio/03-thumbnail.jpg')
}

// return proj object 
function createProj(projName, projTitle, projDesc, projUrl) {
    var projects = getProjs();
    var proj = {
        id: getId(),
        name: projName,
        title: projTitle,
        desc: projDesc,
        url: projUrl,
        publishedAt: getTimeCreated(),
        labels: ["label1","label2"]
    }
    projects.push(proj);

}

// return selector proj - by id
function readProj(projectId) {
    var projects = getProjs();
    console.log(projects);
    return projects.find(function(proj){
        return (proj.id === projectId)
    });
}

function updateProj(projectId) {

}

function deleteProj(projectId) {

}

function addProj() {

}

// create time Stamp
function getTimeCreated() {
    return Date.now();
}

// Create RANDOM ID
function getId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}