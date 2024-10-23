var gameFrame = document.querySelector('.gameFrame');
var emergencyButton = document.querySelector('.emergencyButton');
var chat = document.querySelector('.chat');
var topRow = document.querySelector('.topRow');
var bottomRow = document.querySelector('.bottomRow');
var messageOne = document.querySelector('.messageOne');
var messageTwo = document.querySelector('.messageTwo');
var messageThree = document.querySelector('.messageThree');
var messageFour = document.querySelector('.messageFour');
var messageFive = document.querySelector('.messageFive');
var messageSix = document.querySelector('.messageSix');
var messageSeven = document.querySelector('.messageSeven');
var choices = document.querySelector('.choices');
var typingSpace = document.querySelector('.typingSpace');
var accusation = document.querySelector('.accusation');
var introText = document.querySelector('.introText');
var redButton = document.querySelector('.red');
var youButton = document.querySelector('.you');
var orangeButton = document.querySelector('.orange');
orangeButton.addEventListener('click', function () {
    accusation.textContent += " orange";
    setTimeout(function () {
        choices === null || choices === void 0 ? void 0 : choices.classList.add('hidden');
        messageSix === null || messageSix === void 0 ? void 0 : messageSix.classList.remove('hidden');
        setTimeout(function () {
            messageSeven === null || messageSeven === void 0 ? void 0 : messageSeven.classList.remove('hidden');
            setTimeout(function () {
                chat.classList.add('hidden');
                topRow.classList.remove('hidden');
                bottomRow.classList.remove('hidden');
                gameFrame.src = "./img/ejection.png";
                introText.textContent = "You were voted out :( Return home?";
                introText.classList.add('cursor');
                introText.addEventListener('click', function () {
                    window.location.href = './../index.html';
                });
            }, 2000);
        }, 2000);
    }, 1500);
});
setTimeout(function () {
    setTimeout(function () {
        gameFrame.src = "./img/frame3.png";
        setTimeout(function () {
            gameFrame.src = "./img/frame4.png";
            emergencyButton.classList.remove('hidden');
            emergencyButton.addEventListener("click", function () {
                emergencyButton.classList.add('hidden');
                setTimeout(function () {
                    gameFrame.src = "./img/frame5.png";
                    setTimeout(function () {
                        gameFrame.src = "./img/frame6.png";
                        setTimeout(function () {
                            topRow.classList.add('hidden');
                            bottomRow.classList.add('hidden');
                            chat.classList.remove('hidden');
                            setTimeout(function () {
                                messageTwo === null || messageTwo === void 0 ? void 0 : messageTwo.classList.remove('hidden');
                                setTimeout(function () {
                                    messageThree === null || messageThree === void 0 ? void 0 : messageThree.classList.remove('hidden');
                                    setTimeout(function () {
                                        messageFour === null || messageFour === void 0 ? void 0 : messageFour.classList.remove('hidden');
                                        setTimeout(function () {
                                            messageFive === null || messageFive === void 0 ? void 0 : messageFive.classList.remove('hidden');
                                            setTimeout(function () {
                                                typingSpace === null || typingSpace === void 0 ? void 0 : typingSpace.classList.add('hidden', 'absolute');
                                                choices === null || choices === void 0 ? void 0 : choices.classList.remove('hidden');
                                            }, 1500);
                                        }, 2000);
                                    }, 700);
                                }, 1500);
                            }, 1000);
                        }, 2000);
                    });
                }, 4000);
            });
        }, 2000);
    }, 2000);
    gameFrame.src = "./img/frame2.png";
}, 2000);
