const title = document.querySelector('.title');
const intro = document.querySelector('.intro');

title?.addEventListener('mouseover', ()=> {
    title.classList.add('color');
})
title?.addEventListener('mouseleave', ()=> {
    title.classList.remove('color');
})
intro?.addEventListener('mouseover', ()=> {
    intro.classList.add('color');
})
intro?.addEventListener('mouseleave', ()=> {
    intro.classList.remove('color');
})