var startButton = document.querySelector('.startButton');
var greenSwirl = document.querySelector('.greenSwirl');
var blackSwirl = document.querySelector('.blackSwirl');
var pinkQuad = document.querySelector('.pinkQuad');
var blackSwirl3 = document.querySelector('.blackSwirl3');
var poppers = [startButton, greenSwirl, blackSwirl, pinkQuad, blackSwirl3];
poppers.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        element === null || element === void 0 ? void 0 : element.classList.remove('hidden');
        element.addEventListener('mouseleave', function () {
            element === null || element === void 0 ? void 0 : element.classList.add('hidden');
        });
    });
});
startButton.addEventListener("click", function () {
    window.location.href = './shopping/index.html';
});
