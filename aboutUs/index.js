var title = document.querySelector('.title');
var intro = document.querySelector('.intro');
title === null || title === void 0 ? void 0 : title.addEventListener('mouseover', function () {
    title.classList.add('color');
});
title === null || title === void 0 ? void 0 : title.addEventListener('mouseleave', function () {
    title.classList.remove('color');
});
intro === null || intro === void 0 ? void 0 : intro.addEventListener('mouseover', function () {
    intro.classList.add('color');
});
intro === null || intro === void 0 ? void 0 : intro.addEventListener('mouseleave', function () {
    intro.classList.remove('color');
});
