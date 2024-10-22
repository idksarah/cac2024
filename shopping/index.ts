const loadingMessage = document.querySelector<HTMLDivElement>('.loadingMessage')!;
const messageOne = document.querySelector<HTMLDivElement>('.messageOne');
const messageTwo = document.querySelector<HTMLDivElement>('.messageTwo');
const messageTwoAndaHalf = document.querySelector<HTMLDivElement>('.messageTwoAndaHalf');
const messageThree = document.querySelector<HTMLDivElement>('.messageThree');
const messageFour = document.querySelector<HTMLDivElement>('.messageFour');
const messageFive = document.querySelector<HTMLDivElement>('.messageFive')!;
const messageSix = document.querySelector<HTMLDivElement>('.messageSix')!;
const typingSpace = document.querySelector<HTMLDivElement>('.typingSpace');

const linkOne = document.querySelector<HTMLSpanElement>('.linkOne');
const linkTwo = document.querySelector<HTMLSpanElement>('.linkTwo');
const linkThree = document.querySelector<HTMLSpanElement>('.linkThree');
const linkFour = document.querySelector<HTMLSpanElement>('.linkFour');

const links = [linkOne, linkTwo, linkThree, linkFour];

function loadVariable() {
    return localStorage.getItem('viewedOnce') === 'true';
}

function saveVariable() {
    localStorage.setItem('viewedOnce', 'true');
}

const viewedOnce = loadVariable();

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
    setTimeout(() => {
        messageSix.classList.remove('hidden');
    }, 2000);
    messageSix.id = 'link';
    messageSix.addEventListener('click', () => {
        window.location.href = './../aboutUs/index.html';
    });
});

if (!viewedOnce) {
    setTimeout(() => {
        loadingMessage.classList.add('hidden');

        const showMessages = () => {
            messageOne?.classList.remove('hidden');
            typingSpace?.classList.remove('hidden');
            setTimeout(() => {
                messageTwo?.classList.remove('hidden');
                setTimeout(() => {
                    messageTwoAndaHalf?.classList.remove('hidden');
                    setTimeout(() => {
                        messageThree?.classList.remove('hidden');
                        setTimeout(() => {
                            messageFour?.classList.remove('hidden');
                            saveVariable();
                        }, 2000);
                    }, 2500);
                }, 3000);
            }, 1500);
        };

        setTimeout(showMessages, 1000);
    }, 2000);
} else {
    loadingMessage.classList.add('hidden');
    messageOne?.classList.remove('hidden');
    messageTwo?.classList.remove('hidden');
    messageTwoAndaHalf?.classList.remove('hidden');
    messageThree?.classList.remove('hidden');
    messageFour?.classList.remove('hidden');
    typingSpace?.classList.remove('hidden');
}
