const gameFrame = document.querySelector<HTMLImageElement>('.gameFrame')!;
const emergencyButton = document.querySelector<HTMLImageElement>('.emergencyButton')!;
const chat = document.querySelector<HTMLDivElement>('.chat')!;
const topRow = document.querySelector<HTMLDivElement>('.topRow')!;
const bottomRow = document.querySelector<HTMLDivElement>('.bottomRow')!;

const messageOne = document.querySelector<HTMLDivElement>('.messageOne');
const messageTwo = document.querySelector<HTMLDivElement>('.messageTwo');
const messageThree = document.querySelector<HTMLDivElement>('.messageThree');
const messageFour = document.querySelector<HTMLDivElement>('.messageFour');
const messageFive = document.querySelector<HTMLDivElement>('.messageFive')!;
const messageSix = document.querySelector<HTMLDivElement>('.messageSix');
const messageSeven = document.querySelector<HTMLDivElement>('.messageSeven');
const choices = document.querySelector<HTMLDivElement>('.choices');
const typingSpace = document.querySelector<HTMLDivElement>('.typingSpace');
const accusation = document.querySelector<HTMLParagraphElement>('.accusation')!;
const introText = document.querySelector<HTMLParagraphElement>('.introText')!;

const redButton = document.querySelector<HTMLButtonElement>('.red')!;
const youButton = document.querySelector<HTMLButtonElement>('.you')!;
const orangeButton = document.querySelector<HTMLButtonElement>('.orange')!;

orangeButton.addEventListener('click', ()=> {
    accusation.textContent += " orange";
    setTimeout(()=> {
        choices?.classList.add('hidden');
        messageSix?.classList.remove('hidden');
        setTimeout(()=> {
            messageSeven?.classList.remove('hidden');
            setTimeout(()=> {
                chat.classList.add('hidden');
                topRow.classList.remove('hidden');
                bottomRow.classList.remove('hidden');
                gameFrame.src="./img/ejection.png";
                introText.textContent="You were voted out :( Return home?";
                introText.classList.add('cursor');
                introText.addEventListener('click', () => {
                    window.location.href = './../index.html';
                })
            },2000);
        },2000);
    },1500);
});

setTimeout(()=> {
    setTimeout(() => {
        gameFrame.src="./img/frame3.png";
        setTimeout(() => {
            gameFrame.src="./img/frame4.png";
            emergencyButton.classList.remove('hidden');
            emergencyButton.addEventListener("click", () => {
                emergencyButton.classList.add('hidden');
                setTimeout(() => {
                    gameFrame.src="./img/frame5.png";
                    setTimeout(() => {
                        gameFrame.src="./img/frame6.png";
                        setTimeout(()=>{
                            topRow.classList.add('hidden');
                            bottomRow.classList.add('hidden');
                            chat.classList.remove('hidden');
                            setTimeout(()=>{
                                messageTwo?.classList.remove('hidden');
                                setTimeout(()=>{
                                    messageThree?.classList.remove('hidden');
                                    setTimeout(()=> {
                                        messageFour?.classList.remove('hidden');
                                        setTimeout(()=>{
                                            messageFive?.classList.remove('hidden');
                                            setTimeout(()=> {
                                                typingSpace?.classList.add('hidden', 'absolute');
                                                choices?.classList.remove('hidden');
                                            },1500);
                                        },2000)
                                    },700);
                                },1500);
                            },1000);
                        },2000)
                    })
                },4000);
            })
        }, 2000);
    }, 2000);
    gameFrame.src="./img/frame2.png";
},2000);