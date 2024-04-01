const icon = document.querySelector('.icon');
const intro = document.getElementById('introduction');
const projects = document.querySelector('.projects');
const proList = document.getElementById('projectList');
const links = document.querySelector('.links');
const linkList = document.getElementById('linkList');
const sect = document.querySelector('section');
const iCap = document.querySelector('.iconCap');
const pCap = document.querySelector('.proCap');
const lCap = document.querySelector('.linkCap');
const first = document.querySelectorAll('ul > li')[0];
const second = document.querySelectorAll('ul > li')[1];
const third = document.querySelectorAll('ul > li')[2];

let oldPro = pCap.textContent;
let oldLinks = lCap.textContent;
let oldIcon = iCap.textContent;

let iconClicked;
let proClicked;
let linkClicked;
let wasMobile;

// displays information relevant to the icon clicked
icon.addEventListener("click", () => {
    if (intro.style.display == "none" && $(window).width() > 1230){
        showInfo(intro, projects, links);
        pCap.textContent = lCap.textContent = "";
        iconClicked = "clicked";
    } else if (intro.style.display == "none" && $(window).width() <= 1230 && $(window).width() > 550){
        showInfo(intro, projects, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        icon.style.display = "none";
        iconClicked = "clicked";
    } else if (intro.style.display == "none" && $(window).width() < 550){
        showInfo(intro, projects, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        icon.style.display = "none";
        iconClicked = "clicked";
    } else {
        closeInfo(intro, projects, links)
        pCap.textContent = oldPro;
        lCap.textContent = oldLinks;
        iconClicked = "unclicked";
    };
});

projects.addEventListener("click", () => {
    if (proList.style.display == "none" && $(window).width() > 1230){
        showInfo(proList, icon, links);
        iCap.textContent = lCap.textContent = "";
        proClicked = "clicked";
    } else if (proList.style.display == "none" && $(window).width() <= 1230  && $(window).width() > 550){
        showInfo(proList, icon, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        projects.style.display = "none";
        proClicked = "clicked";
    } else if (proList.style.display == "none" && $(window).width() < 550){
        showInfo(proList, icon, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        projects.style.display = "none";
        proClicked = "clicked";
    } else {
        closeInfo(proList, icon, links);
        iCap.textContent = oldIcon;
        lCap.textContent = oldLinks;
        proClicked = "unclicked";
    };
});

links.addEventListener("click", () => {
    if (linkList.style.display == "none" && $(window).width() > 1090){
        showInfo(linkList, icon, projects);
        pCap.textContent = iCap.textContent = "";
        linkClicked = "clicked";
    } else if (linkList.style.display == "none" && $(window).width() <= 1090){
        showInfo(linkList, icon, projects);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        links.style.display = "none";
        linkClicked = "clicked";
    } else if (linkList.style.display == "none" && $(window).width() < 550){
        showInfo(linkList, icon, projects);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        links.style.display = "none";
        linkClicked = "clicked";
    } else {
        closeInfo(linkList, icon, projects);
        iCap.textContent = oldIcon;
        pCap.textContent = oldPro;
        linkClicked = "unclicked";
    }
});

// redirect the user to link when button is clicked
first.addEventListener("click", () => {
    location.href = "https://www.linkedin.com/in/kavin-ly-72614218b/";
});

second.addEventListener("click", () => {
    location.href = "https://github.com/KavinLy?tab=repositories";
});
// close out of information box when anywhere is clicked
$(window).click(function() {
    if (intro.style.display == "flex" && $(window).width() < 550){
        mobileIcon();
    } else if (intro.style.display == "flex" && $(window).width() > 550){
        desktopIcon();
    } else if (proList.style.display == "block" && $(window).width() < 550){
        mobilePro();
    } else if (proList.style.display == "block" && $(window).width() > 550) {
        desktopPro();
    } else if (linkList.style.display == "block" && $(window).width() < 550){
        mobileLink();
    } else if (linkList.style.display == "block" && $(window).width() > 550) {
        desktopLink();
    }
});
// listen for click outside icon

// function for showing icon on mobile
function mobileIcon() {

        iconClicked = "unclicked";
        icon.style.display = "block";
        mobileClose(intro, projects, links);
};
// function for showing icon on desktop
function desktopIcon() {
    closeInfo(intro, projects, links);
    icon.style.display = "flex"
    iCap.textContent = oldIcon;
    pCap.textContent = oldPro;
    lCap.textContent = oldLinks;
    iconClicked = "unclicked";
};

$('.icon').click(function(event){
    event.stopPropagation();
});
// function for showing mobile projects
function mobilePro() {
    proClicked = "unclicked";
    projects.style.display = "block";
    mobileClose(proList, icon, links);
};
// function for showing desktop projects
function desktopPro(){
    closeInfo(proList, icon, links);
    projects.style.display = "flex";
    iCap.textContent = oldIcon;
    pCap.textContent = oldPro;
    lCap.textContent = oldLinks;
    proClicked = "unclicked";
};
// listens for click outside projects
$('.projects').click(function(event){
    event.stopPropagation();
});
// mobile design for links
function mobileLink() {
        linkClicked = "unclicked";
        links.style.display = "block";
        mobileClose(linkList, icon, projects);
};
// desktop design for link
function desktopLink() {
    closeInfo(linkList, icon, projects);
    links.style.display = "flex";
    iCap.textContent = oldIcon;
    pCap.textContent = oldPro;
    lCap.textContent = oldLinks;
    linkClicked = "unclicked";
};
// listens for click outside links
$('.links').click(function(event){
    event.stopPropagation();
});
// show the information of button
function showInfo(x, y, z){
    if (x == intro){
        x.style.display = "flex";
    } else {
        x.style.display = "block";
    }
    y.style.display = z.style.display = "none";
    sect.style.justifyContent = "normal";
    sect.style.paddingLeft = "13em";
}
// closes info of button
function closeInfo(x, y, z){
    x.style.display = "none";
    y.style.display = z.style.display = "flex";
    sect.style.justifyContent = "space-around";
    sect.style.paddingLeft = "0";
}

function iconClick() {
    if ($(window).width() <= 1230 && $(window).width() >= 550 && iconClicked == "clicked") {
        showInfo(intro, projects, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        icon.style.display = "none";
    } else if ($(window).width() > 1230 && iconClicked == "clicked"){
        showInfo(intro, projects, links);
        pCap.textContent = lCap.textContent = "";
        icon.style.display = "flex";
        iCap.textContent = oldIcon;
    } else {
        closeInfo(intro, projects, links);
        pCap.textContent = oldPro;
        lCap.textContent = oldLinks;
        icon.style.display = "flex";
        iCap.textContent = oldIcon;
        iconClicked = "unclicked";
    }
}
// function for projects clicked
function proClick() {
    if ($(window).width() <= 1230 && $(window).width() >= 550 && proClicked == "clicked") {
        showInfo(proList, icon, links);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        projects.style.display = "none";
    } else if ($(window).width() > 1230 && proClicked == "clicked"){
        showInfo(proList, icon, links);
        iCap.textContent = lCap.textContent = "";
        projects.style.display = "flex";
        pCap.textContent = oldPro;
    } else {
        closeInfo(proList, icon, links);
        pCap.textContent = oldPro;
        lCap.textContent = oldLinks;
        projects.style.display = "flex";
        iCap.textContent = oldIcon;
        proClicked = "unclicked";
    }
}
// function for when link is clicked
function linkClick() {
    if ($(window).width() <= 1090 && $(window).width() >= 550 && linkClicked == "clicked") {
        showInfo(linkList, icon, projects);
        pCap.textContent = lCap.textContent = iCap.textContent = "";
        links.style.display = "none";
    } else if ($(window).width() > 1090 && linkClicked == "clicked"){
        showInfo(linkList, icon, projects);
        iCap.textContent = pCap.textContent = "";
        links.style.display = "flex";
        lCap.textContent = oldLinks;
    } else {
        closeInfo(linkList, icon, projects);
        pCap.textContent = oldPro;
        lCap.textContent = oldLinks;
        links.style.display = "flex";
        iCap.textContent = oldIcon;
        linkClicked = "unclicked";
    }
}

// close function for mobile
function mobileClose(x, y, z){
    x.style.display = "none";
    sect.style.display = y.style.display = z.style.display = "block";
    pCap.textContent = oldPro;
    lCap.textContent = oldLinks;
    iCap.textContent = oldIcon;
}

function iconToDesktop(){
        icon.style.display = "none";
        showInfo(intro, projects, links);
        sect.style.display = "flex";
};

function proToDesktop(){
    projects.style.display = "none";
    showInfo(proList, icon, links);
    sect.style.display = "flex";
};

function linkToDesktop() {
    links.style.display = "none";
    showInfo(linkList, icon, projects);
    sect.style.display = "flex";
};

window.onresize = window.onload = () => {
    if ($(window).width() < 550){
        if (iconClicked == "clicked" && $(window).width() < 550){
        iconToDesktop();
        } else if (proClicked == "clicked" && $(window).width() < 550){
        proToDesktop();
        } else if (linkClicked == "clicked" && $(window).width() < 550){
        linkToDesktop();
        } else {
            sect.style.display = "block";
            sect.style.paddingLeft = "10em";
            iCap.style.paddingBottom = pCap.style.paddingBottom = lCap.style.paddingBottom = "8em";
        }
    } else if ($(window).width() > 550){
        if (iconClicked == "clicked" && $(window).width() > 550){
            iconClick();
        } else if (proClicked == "clicked" && $(window).width() > 550){
            proClick();
        } else if (linkClicked == "clicked" && $(window).width() > 550){
            linkClick();
        } else {
            sect.style.display = "flex";
            sect.style.paddingLeft = "0";
            sect.style.justifyContent = "space-around";
        }
    } 
} 
    

