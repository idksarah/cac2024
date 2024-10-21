const startButton = document.querySelector<HTMLDivElement>('.startButton')!;
const greenSwirl = document.querySelector<HTMLImageElement>('.greenSwirl')!;
const blackSwirl = document.querySelector<HTMLImageElement>('.blackSwirl')!;
const pinkQuad = document.querySelector<HTMLImageElement>('.pinkQuad')!;
const blackSwirl3 = document.querySelector<HTMLImageElement>('.blackSwirl3')!;

const poppers = [startButton, greenSwirl, blackSwirl, pinkQuad, blackSwirl3];

poppers.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element?.classList.remove('hidden');
        
        element.addEventListener('mouseleave', () => {
            element?.classList.add('hidden');
        })
    })
    
})

startButton.addEventListener("click", () => {
    window.location.href = './aboutUs/index.html';
})