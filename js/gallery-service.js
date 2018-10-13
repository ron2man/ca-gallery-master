console.log('MODAL');

gProjs = [];

function getProjs() {
    return gProjs;
}

// inject initial data to gProjs
function createProjects() {
    createProj('minesweeper', 'Minesweeper', 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. ','url1')
    createProj('touch-the-numbers', 'Touch The Numbers', '"Touch the Numbers" is a simple game for training your reflexes and peripheral vision.','url2')
    createProj('in-picture', 'In Picture', 'Answer the questions to become master','url3')
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

function openGmail(subject, msg) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ron2man10@gmail.com&su=${subject}&body=${msg}`,'_blank');
    // window.location
    //  
}