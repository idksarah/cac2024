var loadingMessage = document.querySelector('.loadingMessage');
var messageOne = document.querySelector('.messageOne');
var messageTwo = document.querySelector('.messageTwo');
var messageTwoAndaHalf = document.querySelector('.messageTwoAndaHalf');
var messageThree = document.querySelector('.messageThree');
var messageFour = document.querySelector('.messageFour');
var messageFive = document.querySelector('.messageFive');
var messageSix = document.querySelector('.messageSix');
var typingSpace = document.querySelector('.typingSpace');
var linkOne = document.querySelector('.linkOne');
var linkTwo = document.querySelector('.linkTwo');
var linkThree = document.querySelector('.linkThree');
var linkFour = document.querySelector('.linkFour');
var links = [linkOne, linkTwo, linkThree, linkFour];
function loadVariable() {
    return localStorage.getItem('viewedOnce') === 'true';
}
function saveVariable() {
    localStorage.setItem('viewedOnce', 'true');
}
var viewedOnce = loadVariable();
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
document.addEventListener('paste', function () {
    messageFive.classList.remove('hidden');
    setTimeout(function () {
        messageSix.classList.remove('hidden');
    }, 2000);
    messageSix.id = 'link';
    messageSix.addEventListener('click', function () {
        window.location.href = './../aboutUs/index.html';
    });
});
if (!viewedOnce) {
    setTimeout(function () {
        loadingMessage.classList.add('hidden');
        var showMessages = function () {
            messageOne === null || messageOne === void 0 ? void 0 : messageOne.classList.remove('hidden');
            typingSpace === null || typingSpace === void 0 ? void 0 : typingSpace.classList.remove('hidden');
            setTimeout(function () {
                messageTwo === null || messageTwo === void 0 ? void 0 : messageTwo.classList.remove('hidden');
                setTimeout(function () {
                    messageTwoAndaHalf === null || messageTwoAndaHalf === void 0 ? void 0 : messageTwoAndaHalf.classList.remove('hidden');
                    setTimeout(function () {
                        messageThree === null || messageThree === void 0 ? void 0 : messageThree.classList.remove('hidden');
                        setTimeout(function () {
                            messageFour === null || messageFour === void 0 ? void 0 : messageFour.classList.remove('hidden');
                            saveVariable();
                        }, 2000);
                    }, 2500);
                }, 3000);
            }, 1500);
        };
        setTimeout(showMessages, 1000);
    }, 2000);
}
else {
    loadingMessage.classList.add('hidden');
    messageOne === null || messageOne === void 0 ? void 0 : messageOne.classList.remove('hidden');
    messageTwo === null || messageTwo === void 0 ? void 0 : messageTwo.classList.remove('hidden');
    messageTwoAndaHalf === null || messageTwoAndaHalf === void 0 ? void 0 : messageTwoAndaHalf.classList.remove('hidden');
    messageThree === null || messageThree === void 0 ? void 0 : messageThree.classList.remove('hidden');
    messageFour === null || messageFour === void 0 ? void 0 : messageFour.classList.remove('hidden');
    typingSpace === null || typingSpace === void 0 ? void 0 : typingSpace.classList.remove('hidden');
}
