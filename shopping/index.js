var loadingMessage = document.querySelector('.loadingMessage');
var linkOne = document.querySelector('.linkOne');
var linkTwo = document.querySelector('.linkTwo');
var linkThree = document.querySelector('.linkThree');
var linkFour = document.querySelector('.linkFour');
var links = [linkOne, linkTwo, linkThree, linkFour];
function saveLinkState(index) {
    localStorage.setItem("link".concat(index, "Clicked"), 'true');
}
function loadLinkState() {
    links.forEach(function (link, index) {
        if (localStorage.getItem("link".concat(index + 1, "Clicked")) === 'true') {
            link === null || link === void 0 ? void 0 : link.classList.add('clickedLink');
        }
    });
}
links.forEach(function (link, index) {
    link === null || link === void 0 ? void 0 : link.addEventListener('click', function () {
        link.classList.add('clickedLink');
        saveLinkState(index + 1);
        switch (index + 1) {
            case 1:
                window.location.href = './bagLinks/linkOne.html';
                break;
            case 2:
                window.location.href = './bagLinks/linkTwo.html';
                break;
            case 3:
                window.location.href = './bagLinks/linkThree.html';
                break;
            case 4:
                window.location.href = './bagLinks/linkFour.html';
                break;
        }
    });
});
loadLinkState();
setTimeout(function () {
    loadingMessage.classList.add('hidden');
}, 2000);
