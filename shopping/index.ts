const loadingMessage = document.querySelector<HTMLDivElement>('.loadingMessage')!;

const linkOne = document.querySelector<HTMLSpanElement>('.linkOne');
const linkTwo = document.querySelector<HTMLSpanElement>('.linkTwo');
const linkThree = document.querySelector<HTMLSpanElement>('.linkThree');
const linkFour = document.querySelector<HTMLSpanElement>('.linkFour');

const links = [linkOne, linkTwo, linkThree, linkFour];

function saveLinkState(index: number) {
    localStorage.setItem(`link${index}Clicked`, 'true');
}

function loadLinkState() {
    links.forEach((link, index) => {
        if (localStorage.getItem(`link${index + 1}Clicked`) === 'true') {
            link?.classList.add('clickedLink');
        }
    });
}

links.forEach((link, index) => {
    link?.addEventListener('click', () => {
        link.classList.add('clickedLink');
        saveLinkState(index + 1);
        
        switch (index+1) {
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

setTimeout(() => {
    loadingMessage.classList.add('hidden');
}, 2000);

