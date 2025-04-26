const sideBar = document.querySelector('i#sideBar');
const iSide = document.querySelector('i#side');
const navBar = document.querySelector('nav');
const side = document.querySelector('div#sidebar');
const relnav = document.querySelector('.rel-nav');
const navBarIcon = document.querySelector('.rel-nav .bar-icon svg');
const logoSide = document.querySelector('div.logo__side');
const overlay = document.getElementById('overlay');
const disclaim = document.querySelector('.prompt__disclaim');

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('prompt__deepseek');
    const formContainer = document.querySelector('.form_container');
    const isChat = formContainer.classList.includes('form--chat--active');
    const formm = document.querySelector('.form_container');
    const welcomeMessageElement = document.querySelector("main div.head");
    // const visibleChat = document.querySelector("main .chats .message--incoming");

    const applyFocusEffect = () => {
        formContainer.classList.add('form--focus--effect');
        formContainer.classList.remove('form--chat--active');
        disclaim.classList.add('disclaim--focus--effect');
        formm.classList.add('form--focus');
        welcomeMessageElement.classList.add("hide-header");
    };

    const removeFocusEffect = () => {
        formContainer.classList.remove('form--focus--effect');
        formContainer.classList.add('form--chat--active');
        formm.classList.remove('form--focus');
        if (isChat) {
            welcomeMessageElement.classList.add("hide-header");
        } else {
            welcomeMessageElement.classList.remove("hide-header");
        }
    };

    inputField.addEventListener('focus', () => {
        applyFocusEffect();
    });

    inputField.addEventListener('focusin', () => {
        applyFocusEffect();
    });

    inputField.addEventListener('focusout', () => {
        removeFocusEffect();
    });

    inputField.addEventListener('blur', () => {
        removeFocusEffect();
    });

    inputField.addEventListener('input', () => {
        if (document.activeElement === inputField) {
            applyFocusEffect();
        }
    });

    if (inputField.value.length > 0) {
        applyFocusEffect();
    } else {
        removeFocusEffect();
    }
});

sideBar.addEventListener('click', () => {
    const isSide = side.classList.contains('sidebar__hidden');

    if (isSide) {
        navBar.classList.add('nav__hidden');
        const FormSection = document.querySelector(".form_container");
        FormSection.classList.add('form--nav--active');
        disclaim.classList.add('nav--active');
        side.classList.remove('sidebar__hidden');
    }
    if (navBar.style.transform === 'translate(-100%)') {
        navBar.style.transform = 'translate(0%)';
        overlay.style.zIndex = '799';
        overlay.style.opacity = '1';
    } else {
        navBar.style.transform = 'translate(-100%)';
        overlay.style.zIndex = '-799';
        overlay.style.opacity = '0';
    }

});

navBarIcon.addEventListener('click', () => {
    if (navBar.style.transform === 'translate(-100%)') {
        navBar.style.transform = 'translate(0%)';
        overlay.style.zIndex = '799';
        overlay.style.opacity = '1';
    } else {
        navBar.style.transform = 'translate(-100%)';
        overlay.style.zIndex = '-799';
        overlay.style.opacity = '0';
    }
});

overlay.addEventListener('click', () => {
    if (overlay.style.opacity === '1') {
        navBar.style.transform = 'translate(-100%)';
        overlay.style.zIndex = '-799';
        overlay.style.opacity = '0';
    }
});

iSide.addEventListener('click', () => {
    if (navBar.style.transform === 'translate(-100%)') {
        navBar.style.transform = 'translate(0%)';
    } else {
        navBar.style.transform = 'translate(-100%)';
    }
});

logoSide.addEventListener('click', () => {
    if (navBar.style.transform === 'translate(-100%)') {
        navBar.style.transform = 'translate(0%)';
        navBar.style.zIndex = '800';
        overlay.style.zIndex = '799';
        overlay.style.opacity = '1';
    } else {
        navBar.style.transform = 'translate(-100%)';
        navBar.style.zIndex = '-800';
        overlay.style.zIndex = '-799';
        overlay.style.opacity = '0';
    }
});





const promptInput = document.querySelector('input#prompt__deepseek');
const btn = document.querySelector('div.prompt__btn button');
const sendBtn = document.querySelector('button svg.send--btn');

promptInput.addEventListener('input', () => {
    if (promptInput.value.length > 0) {
        btn.classList.add('btn__active');
        sendBtn.classList.remove('send--btn');
        sendBtn.classList.add('send--active');
    } else if (promptInput.value.length === 0) {
        btn.classList.remove('btn__active');
        sendBtn.classList.remove('send--active');
        sendBtn.classList.add('send--btn');
    }
});



const chatOne = document.querySelector('div.chatOne');
const chatTwo = document.querySelector('div.chatTwo');
const chatOneSvg = document.querySelector('div.chatOne svg');
const chatTwoSvg = document.querySelector('div.chatTwo svg');

chatOne.addEventListener('mouseover', () => {
    chatOneSvg.style.transform = 'translate(45%, -50%)';
});
chatOne.addEventListener('mouseout', () => {
    chatOneSvg.style.transform = 'translate(110%, -50%)';
});

chatTwo.addEventListener('mouseover', () => {
    chatTwoSvg.style.transform = 'translate(45%, -50%)';
});
chatTwo.addEventListener('mouseout', () => {
    chatTwoSvg.style.transform = 'translate(110%, -50%)';
});

const profilePic = document.getElementById('img__prof');
const profileSec = document.getElementById('divOne');
const profileOptions = document.querySelectorAll('.clickOptions');





function toggleProfileOptions() {
    profileOptions.forEach(option => {
        if (option.style.opacity === '0') {
            option.style.opacity = '1';
            option.style.display = 'block';
        } else {
            option.style.opacity = '0';
            option.style.display = 'block';
        }
    });
}

profilePic.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleProfileOptions();
});

profileSec.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleProfileOptions();
});

document.addEventListener('click', (event) => {
    let isClickInside = false;

    profileOptions.forEach(option => {
        if (option.contains(event.target) || event.target === profilePic || event.target === profileSec) {
            isClickInside = true;
        }
    });

    if (!isClickInside) {
        profileOptions.forEach(option => {
            option.style.opacity = '0';
        });
    }
});









const messageForm = document.querySelector(".prompt__form");
const GOOGLE_API_KEY = "AIzaSyAP0ZPOvbNNleycCmQopCUgXFGvqDKBTjE";
const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_API_KEY}`;
const chatHistoryContainer = document.querySelector("section.chats");
const chatsSection = document.querySelector('section.chats');
const stopButton = document.querySelector('.prompt__btn button.stop__btn');
let chatHistory = [];

let typingInterval;

function showTypingEffect(text, messageElement, stopButton) {
    let index = 0;
    typingInterval = setInterval(() => {
        if (index < text.length) {
            const currentText = text.substring(0, index + 1);
            const parsedText = marked.parse(currentText);
            messageElement.innerHTML = parsedText;


            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);

                if (!block.parentNode.querySelector('.copy-button')) {
                    const copyButton = document.createElement('button');
                    copyButton.classList.add('copy-button');
                    copyButton.innerHTML = '<i class="bx bx-copy"></i>';
                    copyButton.addEventListener('click', () => {
                        navigator.clipboard.writeText(block.innerText).then(() => {
                            copyButton.innerHTML = '<i class="bx bx-check"></i>';
                            setTimeout(() => {
                                copyButton.innerHTML = '<i class="bx bx-copy"></i>';
                            }, 2000);
                            console.log("Copy button clicked");
                        });
                    });

                    block.parentNode.insertBefore(copyButton, block);
                }
            });

            if (parsedText.includes("<pre>")) {
                const codeBlock = messageElement.querySelector("pre");
                const codeElement = messageElement.querySelector("code");

                const languageClass = codeElement.className.split(' ').find(cls => cls.startsWith('language-'));
                const language = languageClass ? languageClass.replace('language-', '') : 'Code';

                if (!codeBlock.querySelector('.code-label')) {
                    const codeLabel = document.createElement("div");
                    codeLabel.classList.add("code-label");
                    codeLabel.textContent = language;
                    codeBlock.insertBefore(codeLabel, codeBlock.firstChild);
                }
            }


            chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;
            index++;
        } else {
            clearInterval(typingInterval);
            stopButton.style.zIndex = '-1';
            btn.classList.remove('btn__active');
        }
    }, 30);
}


stopButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
        stopButton.style.zIndex = '-1';
        btn.classList.remove('btn__active');
    }
});

messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userMessage = messageForm.querySelector(".prompt__form-input").value.trim();
    if (!userMessage) {
        return;
    }

    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }

    stopButton.style.zIndex = '-1';

    const welcomeMessageElement = document.querySelector("main div.head");
    welcomeMessageElement.classList.add("hide-header");

    messageForm.reset();

    chatHistory.push({ role: "user", parts: [{ text: userMessage }] });

    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "message--outgoing");
    userMessageElement.innerHTML = `
        <span class="text-xl" title="user">🥸</span>
        <div class="message__content">
            <p class="message__text msgg">${userMessage}</p>
        </div>
    `;
    chatHistoryContainer.appendChild(userMessageElement);

    chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;

    const response = await fetch(API_REQUEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: chatHistory }),
    });

    const responseData = await response.json();
    const aiMessage = responseData.candidates[0].content.parts[0].text;

    chatHistory.push({ role: "model", parts: [{ text: aiMessage }] });

    const aiMessageElement = document.createElement("div");
    aiMessageElement.classList.add("message", "message--incoming");
    aiMessageElement.innerHTML = `
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="path" d="M27.501 8.46875C27.249 8.3457 27.1406 8.58008 26.9932 8.69922C26.9434 8.73828 26.9004 8.78906 26.8584 8.83398C26.4902 9.22852 26.0605 9.48633 25.5 9.45508C24.6787 9.41016 23.9785 9.66797 23.3594 10.2969C23.2275 9.52148 22.79 9.05859 22.125 8.76172C21.7764 8.60742 21.4238 8.45312 21.1807 8.11719C21.0098 7.87891 20.9639 7.61328 20.8779 7.35156C20.8242 7.19336 20.7695 7.03125 20.5879 7.00391C20.3906 6.97266 20.3135 7.13867 20.2363 7.27734C19.9258 7.84375 19.8066 8.46875 19.8174 9.10156C19.8447 10.5234 20.4453 11.6562 21.6367 12.4629C21.7725 12.5547 21.8076 12.6484 21.7646 12.7832C21.6836 13.0605 21.5869 13.3301 21.501 13.6074C21.4473 13.7852 21.3662 13.8242 21.1768 13.7461C20.5225 13.4727 19.957 13.0684 19.458 12.5781C18.6104 11.7578 17.8438 10.8516 16.8877 10.1426C16.6631 9.97656 16.4395 9.82227 16.207 9.67578C15.2314 8.72656 16.335 7.94727 16.5898 7.85547C16.8574 7.75977 16.6826 7.42773 15.8193 7.43164C14.957 7.43555 14.167 7.72461 13.1611 8.10938C13.0137 8.16797 12.8594 8.21094 12.7002 8.24414C11.7871 8.07227 10.8389 8.0332 9.84766 8.14453C7.98242 8.35352 6.49219 9.23633 5.39648 10.7441C4.08105 12.5547 3.77148 14.6133 4.15039 16.7617C4.54883 19.0234 5.70215 20.8984 7.47559 22.3633C9.31348 23.8809 11.4307 24.625 13.8457 24.4824C15.3125 24.3984 16.9463 24.2012 18.7881 22.6406C19.2529 22.8711 19.7402 22.9629 20.5498 23.0332C21.1729 23.0918 21.7725 23.002 22.2373 22.9062C22.9648 22.752 22.9141 22.0781 22.6514 21.9531C20.5186 20.959 20.9863 21.3633 20.5605 21.0371C21.6445 19.752 23.2783 18.418 23.917 14.0977C23.9668 13.7539 23.9238 13.5391 23.917 13.2598C23.9131 13.0918 23.9512 13.0254 24.1445 13.0059C24.6787 12.9453 25.1973 12.7988 25.6738 12.5352C27.0557 11.7793 27.6123 10.5391 27.7441 9.05078C27.7637 8.82422 27.7402 8.58789 27.501 8.46875ZM15.46 21.8613C13.3926 20.2344 12.3906 19.6992 11.9766 19.7227C11.5898 19.7441 11.6592 20.1875 11.7441 20.4766C11.833 20.7617 11.9492 20.959 12.1123 21.209C12.2246 21.375 12.3018 21.623 12 21.8066C11.334 22.2207 10.1768 21.668 10.1221 21.6406C8.77539 20.8477 7.64941 19.7988 6.85547 18.3652C6.08984 16.9844 5.64453 15.5039 5.57129 13.9238C5.55176 13.541 5.66406 13.4062 6.04297 13.3379C6.54199 13.2461 7.05762 13.2266 7.55664 13.2988C9.66602 13.6074 11.4619 14.5527 12.9668 16.0469C13.8262 16.9004 14.4766 17.918 15.1465 18.9121C15.8584 19.9688 16.625 20.9746 17.6006 21.7988C17.9443 22.0879 18.2197 22.3086 18.4824 22.4707C17.6895 22.5586 16.3652 22.5781 15.46 21.8613ZM16.4502 15.4805C16.4502 15.3105 16.5859 15.1758 16.7568 15.1758C16.7949 15.1758 16.8301 15.1836 16.8613 15.1953C16.9033 15.2109 16.9424 15.2344 16.9727 15.2695C17.0273 15.3223 17.0586 15.4004 17.0586 15.4805C17.0586 15.6504 16.9229 15.7852 16.7529 15.7852C16.582 15.7852 16.4502 15.6504 16.4502 15.4805ZM19.5273 17.0625C19.3301 17.1426 19.1328 17.2129 18.9434 17.2207C18.6494 17.2344 18.3281 17.1152 18.1533 16.9688C17.8828 16.7422 17.6895 16.6152 17.6074 16.2168C17.5732 16.0469 17.5928 15.7852 17.623 15.6348C17.6934 15.3105 17.6152 15.1035 17.3877 14.9141C17.2012 14.7598 16.9658 14.7188 16.7061 14.7188C16.6094 14.7188 16.5205 14.6758 16.4541 14.6406C16.3457 14.5859 16.2568 14.4512 16.3418 14.2852C16.3691 14.2324 16.501 14.1016 16.5322 14.0781C16.8838 13.877 17.29 13.9434 17.666 14.0938C18.0146 14.2363 18.2773 14.498 18.6562 14.8672C19.0439 15.3145 19.1133 15.4395 19.334 15.7734C19.5078 16.0371 19.667 16.3066 19.7754 16.6152C19.8408 16.8066 19.7559 16.9648 19.5273 17.0625Z" fill-rule="nonzero" fill="#4D6BFE"></path></svg>
        <div class="message__content">
            <div class="message__text">
                <div class="msgg"></div>
            </div>
            <div class="message__buttons">
                <button class="copy--button">
                    <i class="bx bx-copy"></i>
                </button>
                <button class="regenerate--button">
                    <i class="bx bx-refresh"></i>
                </button>
            </div>
        </div>
    `;

    chatHistoryContainer.appendChild(aiMessageElement);

    const messageTextElement = aiMessageElement.querySelector(".msgg");
    showTypingEffect(aiMessage, messageTextElement, stopButton);

    const copyButton = aiMessageElement.querySelector(".copy--button");
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(aiMessage).then(() => {
            copyButton.innerHTML = '<i class="bx bx-check"></i>';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="bx bx-copy"></i>';
            }, 2000);
        });
    });

    const regenerateButton = aiMessageElement.querySelector(".regenerate--button");
    regenerateButton.addEventListener("click", () => {
        messageForm.querySelector(".prompt__form-input").value = userMessage;
        messageForm.dispatchEvent(new Event("submit"));
    });
});



const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// تحقق من الوضع الحالي من localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    }
}

// تغيير الوضع عند النقر على الزر
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'light');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.querySelector('.scroll-down');
    const chatSection = document.querySelector('.chats');

    if (chatSection && scrollDownButton) {
        chatSection.addEventListener('scroll', function () {
            if (chatSection.scrollHeight > 0 && chatSection.scrollTop < 2) {
                scrollDownButton.style.display = 'block'; // إظهار الزر عند التمرير لأسفل
            } else {
                scrollDownButton.style.display = 'none'; // إخفاء الزر عند التمرير للأعلى
            }
        });

        scrollDownButton.addEventListener('click', function (e) {
            e.preventDefault();
            const allDivs = document.querySelectorAll(".message");
            const lastDiv = allDivs[allDivs.length - 1];

            if (lastDiv) {
                lastDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});



function showToast(message, type = "success") {
    const toastContainer = document.querySelector(".toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    toast.innerHTML = `
      <div class="toast-content">
        <div class="icon">${getIcon(type)}</div>
        <div class="message">
          <span class="text text-1">${capitalize(type)}</span>
          <span class="text text-2">${message}</span>
        </div>
      </div>
      <i class="bx bx-x close-icon"></i>
      <div class="progress active"></div>
    `;

    toastContainer.appendChild(toast);
    let showToast = setTimeout(() => {
        void toast.offsetHeight;
        toast.classList.add("active");
    }, 1);

    const progress = toast.querySelector(".progress");
    const closeIcon = toast.querySelector(".close-icon");

    // Auto-remove toast after 5s
    const timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    const timer2 = setTimeout(() => {
        progress.classList.remove("active");
        setTimeout(() => toast.remove(), 500);
    }, 5300);

    // Manual close
    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(showToast);
        setTimeout(() => toast.remove(), 500);
    });
}

function getIcon(type) {
    switch (type) {
        case "success":
            return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.878px" height="88.858px" viewBox="0 0 122.878 88.858" enable-background="new 0 0 122.878 88.858" xml:space="preserve"><g><path d="M17.215,43.332l10.399,10.57c1.096-1.28,2.282-2.497,3.551-3.642c7.666-6.908,18.284-11.183,30.038-11.183v0.029h0.001h0 v-0.029c11.754,0,22.373,4.275,30.039,11.184c1.416,1.276,2.73,2.644,3.93,4.09l10.489-10.489 c-1.408-1.612-2.919-3.146-4.525-4.594c-10.243-9.233-24.363-14.944-39.932-14.944v-0.029h0h-0.001v0.029 c-15.567,0-29.688,5.711-39.931,14.944C19.843,40.555,18.489,41.913,17.215,43.332L17.215,43.332z M61.656,48.555L61.656,48.555 l0.001,0.028c10.656,0.001,20.332,3.913,27.358,10.237l0.003,0.002l-8.575,8.575l-1.977,1.848 c-4.388-3.666-10.294-5.908-16.81-5.908v0.029h-0.001h-0.001v-0.029c-6.846,0-13.019,2.476-17.464,6.477 c-0.111,0.1-0.221,0.2-0.33,0.302L33.86,59.221c0.145-0.135,0.29-0.268,0.438-0.4C41.324,52.496,51,48.584,61.655,48.583 L61.656,48.555L61.656,48.555L61.656,48.555z M61.933,71.679c4.264,0,8.143,1.648,11.036,4.341L60.5,88.858L49.909,77.021 C52.875,73.74,57.163,71.679,61.933,71.679L61.933,71.679z M10.005,34.716c0.629-0.616,1.272-1.22,1.929-1.813 c12.421-11.195,29.61-18.121,48.619-18.121v0.029h0.001l0,0v-0.029c19.01,0,36.198,6.926,48.619,18.122 c1.122,1.011,2.204,2.058,3.246,3.137l10.458-10.458c-1.226-1.262-2.496-2.487-3.811-3.672 C104.068,8.392,83.378,0.029,60.555,0.029V0l0,0h-0.001v0.029c-22.823,0-43.513,8.363-58.512,21.882 C1.348,22.535,0.668,23.171,0,23.818L10.005,34.716L10.005,34.716z"/></g></svg>`;
        case "error":
            return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 113.45 122.88" style="enable-background:new 0 0 113.45 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M105.36,68.94c5.04,5.72,8.09,13.23,8.09,21.45c0,17.94-14.54,32.49-32.49,32.49 c-12.45,0-23.27-7.01-28.72-17.29H37.43v6.94h-22.1v-6.94H0.01v-8.06h15.32v-7.01h7.02V74.65H7.24c-1.99,0-3.8-0.81-5.11-2.12 C0.81,71.22,0,69.41,0,67.42V41.99c0-1.77,0.64-3.4,1.71-4.66C0.64,36.07,0,34.44,0,32.66V7.24c0-1.99,0.81-3.8,2.12-5.11 C3.43,0.81,5.24,0,7.24,0h91.06c1.99,0,3.8,0.81,5.11,2.12c1.31,1.31,2.12,3.12,2.12,5.11v25.43c0,1.77-0.65,3.4-1.71,4.66 c1.07,1.26,1.71,2.89,1.71,4.66v25.43C105.53,67.93,105.47,68.44,105.36,68.94L105.36,68.94z M87.38,77.66 c1.49-1.51,3.9-1.52,5.39-0.01c1.49,1.5,1.5,3.94,0.01,5.45l-6.52,6.61l6.52,6.62c1.47,1.5,1.45,3.92-0.04,5.41 c-1.5,1.49-3.91,1.49-5.38-0.01l-6.48-6.57l-6.49,6.58c-1.49,1.51-3.9,1.52-5.39,0.01c-1.49-1.5-1.5-3.94-0.01-5.45l6.52-6.61 l-6.52-6.62c-1.47-1.5-1.45-3.92,0.04-5.41c1.5-1.49,3.91-1.49,5.38,0.01l6.48,6.57L87.38,77.66L87.38,77.66z M49.27,97.53 c-0.52-2.3-0.79-4.69-0.79-7.14c0-5.71,1.48-11.08,4.06-15.74H30.4v15.88h7.02v7.01H49.27L49.27,97.53z M26.38,96.51 c2.77,0,5.02,2.25,5.02,5.02c0,2.77-2.25,5.02-5.02,5.02c-2.77,0-5.02-2.25-5.02-5.02C21.36,98.76,23.6,96.51,26.38,96.51 L26.38,96.51z M14.17,13.03h5.35v13.85h-5.35V13.03L14.17,13.03z M87.69,50.46c2.34,0,4.24,1.9,4.24,4.24c0,2-1.38,3.67-3.24,4.12 c1.68,0.41,3.31,0.95,4.88,1.61c2.45,1.03,4.75,2.34,6.86,3.91V41.99c0-0.58-0.24-1.12-0.63-1.5c-0.3-0.3-0.69-0.51-1.12-0.59 c-0.13,0.01-0.26,0.01-0.38,0.01H7.24c-0.13,0-0.26,0-0.38-0.01c-0.43,0.08-0.82,0.29-1.12,0.59C5.34,40.87,5.1,41.4,5.1,41.99 v25.43c0,0.58,0.24,1.12,0.63,1.5c0.39,0.39,0.92,0.63,1.5,0.63H55.8c2.94-3.48,6.58-6.34,10.7-8.35 c4.35-2.12,9.23-3.31,14.39-3.31c1.48,0,2.94,0.1,4.37,0.29c-1.1-0.77-1.81-2.04-1.81-3.48C83.45,52.36,85.35,50.46,87.69,50.46 L87.69,50.46z M71.54,50.46c2.34,0,4.24,1.9,4.24,4.24c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24 C67.3,52.36,69.2,50.46,71.54,50.46L71.54,50.46z M43.75,47.78h5.35v13.85h-5.35V47.78L43.75,47.78z M28.96,47.78h5.35v13.85h-5.35 V47.78L28.96,47.78z M14.17,47.78h5.35v13.85h-5.35V47.78L14.17,47.78z M87.69,15.71c2.34,0,4.24,1.9,4.24,4.24 c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24C83.45,17.61,85.35,15.71,87.69,15.71L87.69,15.71z M71.54,15.71 c2.34,0,4.24,1.9,4.24,4.24c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24C67.3,17.61,69.2,15.71,71.54,15.71L71.54,15.71z M43.75,13.03h5.35v13.85h-5.35V13.03L43.75,13.03z M28.96,13.03h5.35v13.85h-5.35V13.03L28.96,13.03z M6.85,34.76 c0.13-0.01,0.26-0.01,0.38-0.01h91.06c0.13,0,0.26,0,0.38,0.01c0.43-0.08,0.82-0.29,1.12-0.59c0.39-0.39,0.63-0.92,0.63-1.5V7.24 c0-0.58-0.24-1.12-0.63-1.51c-0.39-0.39-0.92-0.63-1.5-0.63H7.24c-0.58,0-1.12,0.24-1.51,0.63C5.34,6.12,5.1,6.65,5.1,7.24v25.43 c0,0.58,0.24,1.12,0.63,1.5C6.03,34.47,6.42,34.68,6.85,34.76L6.85,34.76z M97.96,68.85c-1.93-1.5-4.06-2.76-6.34-3.72 c-3.29-1.38-6.92-2.14-10.72-2.14c-2.37,0-4.67,0.3-6.87,0.86c-11.79,3.08-20.49,13.8-20.49,26.55c0,15.15,12.28,27.44,27.44,27.44 s27.44-12.28,27.44-27.44C108.4,81.66,104.32,73.88,97.96,68.85L97.96,68.85z"/></g></svg>`;
        case "warning":
            return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.87" style="enable-background:new 0 0 122.88 122.87" xml:space="preserve"><g><path d="M23.04,53.31c-0.78,0.67-1.76,0.96-2.7,0.88c-0.91-0.07-1.8-0.48-2.46-1.21c-0.06-0.06-0.11-0.12-0.16-0.19 c-0.61-0.76-0.87-1.69-0.8-2.59c0.07-0.91,0.48-1.8,1.21-2.46c0.05-0.05,0.11-0.1,0.17-0.15c6.55-5.6,13.53-9.85,20.76-12.68 c7.31-2.87,14.86-4.3,22.48-4.23c6.18,0.05,12.37,1.09,18.48,3.15l-5.96,5.97c-4.18-1.09-8.39-1.65-12.57-1.69 c-6.67-0.06-13.33,1.22-19.79,3.77C35.2,44.42,28.94,48.25,23.04,53.31L23.04,53.31z M67.48,0.28c-0.96-0.09-1.95-0.16-2.97-0.21 C63.54,0.02,62.52,0,61.44,0c-1.08,0-2.1,0.02-3.06,0.07c-1.02,0.05-2.01,0.12-2.97,0.21c-0.95,0.09-1.93,0.21-2.95,0.36 c-1,0.15-2.01,0.32-3.02,0.52c-0.96,0.19-1.93,0.41-2.89,0.65c-1,0.25-1.96,0.52-2.88,0.8c-1.01,0.31-1.97,0.62-2.89,0.95 c-0.96,0.34-1.88,0.69-2.76,1.06l-0.14,0.06c-0.93,0.39-1.85,0.79-2.73,1.21c-0.92,0.43-1.8,0.88-2.64,1.33 c-0.87,0.46-1.74,0.96-2.62,1.49c-0.87,0.52-1.73,1.07-2.56,1.62c-0.8,0.53-1.6,1.1-2.41,1.7c-0.78,0.58-1.58,1.2-2.4,1.87 c-0.8,0.65-1.57,1.31-2.3,1.97c-0.75,0.68-1.47,1.36-2.15,2.04L18,17.98c-0.73,0.73-1.44,1.48-2.13,2.23 c-0.66,0.73-1.31,1.48-1.93,2.24c-0.63,0.77-1.25,1.56-1.86,2.38c-0.6,0.81-1.18,1.64-1.74,2.48c-0.56,0.83-1.1,1.69-1.62,2.56 c-0.52,0.87-1.02,1.75-1.48,2.61c-0.46,0.86-0.91,1.76-1.35,2.69c-0.43,0.91-0.84,1.83-1.22,2.74l-0.01,0.03 c-0.4,0.97-0.77,1.91-1.1,2.84c-0.34,0.94-0.65,1.89-0.94,2.83c-0.28,0.91-0.54,1.86-0.78,2.85c-0.24,0.96-0.46,1.95-0.66,2.97 c-0.2,1-0.38,2.01-0.52,3.01c-0.15,0.99-0.27,1.95-0.36,2.87L0.28,55.4c-0.09,0.96-0.17,1.95-0.21,2.97C0.02,59.33,0,60.35,0,61.43 c0,1.08,0.02,2.1,0.07,3.06c0.05,1.02,0.12,2,0.21,2.96c0.09,0.96,0.22,1.95,0.37,2.97c0.15,1,0.32,2,0.52,3 c0.2,1.02,0.42,2.01,0.66,2.97c0.25,0.99,0.51,1.94,0.79,2.85c0.28,0.92,0.59,1.87,0.95,2.85c0.33,0.93,0.69,1.87,1.09,2.83 c0.77,1.87,1.63,3.69,2.58,5.46c0.95,1.78,1.98,3.5,3.1,5.17c1.11,1.67,2.31,3.28,3.59,4.83c1.28,1.56,2.64,3.06,4.08,4.49 l0.62,0.63c0.53,0.51,1.05,1.01,1.58,1.48c0.71,0.64,1.47,1.3,2.28,1.96c0.77,0.63,1.56,1.25,2.38,1.86 c0.81,0.6,1.64,1.18,2.47,1.74c0.84,0.56,1.69,1.1,2.57,1.63c0.88,0.53,1.75,1.02,2.62,1.49c0.86,0.46,1.76,0.91,2.69,1.35 c0.71,0.34,1.43,0.66,2.15,0.96l0.62,0.26c0.97,0.4,1.92,0.77,2.85,1.1c0.9,0.32,1.84,0.63,2.82,0.93 c0.91,0.28,1.86,0.54,2.86,0.79c0.96,0.24,1.94,0.46,2.96,0.66c1,0.2,2,0.37,3,0.52c1.02,0.15,2,0.27,2.94,0.37 c0.96,0.09,1.95,0.17,2.97,0.21c0.97,0.05,2,0.07,3.08,0.07c1.08,0,2.11-0.02,3.07-0.07c1.02-0.05,2.01-0.12,2.97-0.21 c0.95-0.09,1.93-0.22,2.95-0.37c1-0.15,2-0.32,3-0.52c1.01-0.2,1.99-0.42,2.95-0.66c0.76-0.19,1.5-0.39,2.21-0.59v-0.01l0.63-0.19 c0.96-0.29,1.92-0.61,2.89-0.95c0.95-0.34,1.86-0.69,2.74-1.05l0.98-0.43l0.01,0.01c0.64-0.28,1.28-0.57,1.9-0.86 c0.91-0.43,1.8-0.88,2.65-1.33c0.87-0.46,1.74-0.96,2.61-1.48c0.87-0.52,1.73-1.07,2.57-1.63c0.84-0.56,1.67-1.14,2.48-1.75 c0.82-0.6,1.61-1.22,2.38-1.85c0.78-0.64,1.54-1.3,2.28-1.97c0.73-0.66,1.46-1.36,2.19-2.09s1.43-1.46,2.09-2.19 c0.64-0.71,1.29-1.47,1.96-2.28c0.63-0.77,1.25-1.56,1.86-2.38c0.6-0.82,1.19-1.65,1.75-2.49c0.56-0.84,1.1-1.69,1.63-2.57 c0.53-0.88,1.02-1.75,1.49-2.62c0.46-0.86,0.91-1.76,1.35-2.68c0.43-0.91,0.84-1.83,1.21-2.74l0.01-0.03 c0.4-0.97,0.77-1.92,1.1-2.84c0.34-0.94,0.65-1.89,0.94-2.83c0.28-0.91,0.54-1.86,0.79-2.85c0.24-0.96,0.46-1.95,0.66-2.96 c0.2-1,0.38-2.01,0.52-3.01c0.15-0.99,0.27-1.95,0.36-2.87l0.01-0.08c0.09-0.96,0.17-1.95,0.21-2.97c0.05-0.96,0.07-1.99,0.07-3.07 c0-1.08-0.02-2.1-0.07-3.06c-0.05-1.02-0.12-2.01-0.21-2.97l-0.01-0.08c-0.09-0.92-0.21-1.88-0.36-2.88 c-0.15-1-0.32-2.01-0.52-3.01c-0.2-1.02-0.42-2.01-0.66-2.96c-0.25-1-0.51-1.95-0.79-2.86c-0.29-0.95-0.61-1.9-0.94-2.85 c-0.34-0.94-0.7-1.89-1.09-2.83c-0.38-0.92-0.79-1.84-1.22-2.76c-0.44-0.93-0.89-1.83-1.35-2.69c-0.46-0.87-0.96-1.74-1.48-2.62 c-0.52-0.87-1.06-1.72-1.62-2.56c-0.56-0.84-1.15-1.67-1.75-2.49c-0.61-0.82-1.22-1.61-1.85-2.38c-0.6-0.74-1.25-1.49-1.94-2.24 c-0.66-0.73-1.37-1.47-2.12-2.21c-0.74-0.74-1.47-1.44-2.21-2.11c-0.74-0.67-1.5-1.33-2.29-1.97c-0.76-0.63-1.56-1.24-2.37-1.85 c-0.81-0.6-1.63-1.18-2.46-1.74c-0.83-0.56-1.69-1.1-2.56-1.62c-0.88-0.52-1.75-1.02-2.62-1.48c-0.86-0.46-1.75-0.91-2.68-1.35 c-0.9-0.43-1.8-0.82-2.7-1.2l-0.08-0.03c-0.97-0.4-1.91-0.77-2.84-1.1c-0.94-0.34-1.88-0.65-2.82-0.93 c-0.91-0.28-1.86-0.54-2.86-0.79c-0.96-0.24-1.95-0.46-2.96-0.66c-1-0.2-2.01-0.37-3-0.52C69.41,0.5,68.43,0.38,67.48,0.28 L67.48,0.28z M31.83,100.1l71.61-71.61L106,32.4c0.2,0.31,0.44,0.68,0.71,1.12l0.24,0.39l0.01-0.01l0.47,0.81 c0.2,0.34,0.41,0.71,0.64,1.14c0.23,0.43,0.46,0.85,0.67,1.25c0.29,0.56,0.57,1.12,0.83,1.68c0.27,0.58,0.52,1.12,0.74,1.64 c0.21,0.49,0.44,1.04,0.67,1.66c0.22,0.57,0.44,1.16,0.65,1.76c0.25,0.7,0.47,1.4,0.68,2.09c0.2,0.67,0.4,1.39,0.6,2.17 c0.2,0.78,0.37,1.51,0.52,2.2c0.15,0.72,0.29,1.45,0.42,2.17c0.13,0.77,0.24,1.51,0.33,2.24c0.09,0.73,0.17,1.46,0.23,2.2 c0.06,0.71,0.11,1.47,0.14,2.26c0.03,0.79,0.05,1.54,0.05,2.24c0,0.81-0.02,1.67-0.07,2.58c-0.04,0.87-0.11,1.75-0.2,2.65 c-0.09,0.92-0.2,1.79-0.31,2.62c-0.13,0.87-0.27,1.71-0.43,2.53c-0.16,0.83-0.35,1.67-0.56,2.51c-0.14,0.56-0.29,1.11-0.45,1.66 l0.02,0l-0.27,0.88c-0.23,0.77-0.51,1.59-0.81,2.44c-0.3,0.84-0.62,1.65-0.94,2.44c-0.33,0.79-0.68,1.59-1.05,2.37 c-0.36,0.76-0.76,1.54-1.17,2.32c-0.42,0.79-0.85,1.55-1.29,2.28c-0.45,0.74-0.91,1.48-1.4,2.2c-0.48,0.72-0.98,1.43-1.5,2.12 c-0.52,0.69-1.05,1.38-1.62,2.06c-0.57,0.69-1.15,1.37-1.75,2.03c-0.62,0.69-1.21,1.31-1.77,1.87c-1.17,1.17-2.48,2.35-3.9,3.52 c-0.68,0.56-1.37,1.1-2.06,1.61c-0.69,0.51-1.4,1.02-2.13,1.5c-0.72,0.48-1.45,0.94-2.18,1.39c-0.73,0.44-1.49,0.87-2.28,1.29 c-0.8,0.43-1.59,0.83-2.36,1.19c-0.79,0.37-1.57,0.72-2.36,1.05l-0.03,0.01c-0.81,0.33-1.63,0.65-2.45,0.95 c-0.85,0.31-1.66,0.58-2.42,0.81c-0.8,0.24-1.63,0.47-2.5,0.69c-0.84,0.21-1.69,0.4-2.55,0.57c-0.82,0.16-1.67,0.31-2.54,0.43 c-0.83,0.12-1.71,0.23-2.62,0.32c-0.9,0.09-1.79,0.15-2.65,0.2c-0.9,0.04-1.75,0.07-2.56,0.07c-0.7,0-1.44-0.02-2.23-0.05 s-1.54-0.08-2.26-0.14c-0.69-0.06-1.42-0.13-2.2-0.23c-0.77-0.1-1.51-0.21-2.23-0.33c-0.72-0.12-1.45-0.26-2.17-0.41 c-0.69-0.15-1.43-0.32-2.21-0.52c-0.78-0.2-1.5-0.4-2.16-0.6c-0.68-0.2-1.38-0.43-2.1-0.69c-0.6-0.21-1.18-0.42-1.75-0.64 c-0.61-0.24-1.17-0.46-1.66-0.67c-0.52-0.22-1.06-0.47-1.64-0.74c-0.56-0.26-1.12-0.54-1.69-0.83c-0.38-0.2-0.78-0.41-1.21-0.64 c-0.42-0.23-0.82-0.45-1.18-0.67c-0.45-0.26-0.85-0.5-1.2-0.72c-0.41-0.26-0.79-0.49-1.12-0.71l-3.92-2.56L31.83,100.1L31.83,100.1 z M94.84,25.41l-72.4,72.4l-2.65-3.34c-0.34-0.42-0.68-0.88-1.04-1.36c-0.34-0.46-0.68-0.94-1.03-1.43 c-0.34-0.49-0.66-0.96-0.96-1.43l-0.48-0.76l-0.01,0l-0.42-0.7c-0.37-0.61-0.73-1.24-1.08-1.87c-0.35-0.64-0.68-1.27-1-1.9 L13.79,85c-0.3-0.6-0.6-1.24-0.89-1.9c-0.29-0.64-0.57-1.31-0.84-1.99c-0.3-0.74-0.59-1.51-0.87-2.33 c-0.27-0.76-0.52-1.57-0.77-2.43c-0.23-0.8-0.45-1.62-0.65-2.45c-0.2-0.83-0.38-1.65-0.53-2.46c-0.15-0.81-0.29-1.64-0.41-2.47 c-0.11-0.8-0.21-1.64-0.29-2.52c-0.08-0.88-0.15-1.74-0.19-2.58c-0.04-0.87-0.06-1.7-0.06-2.47c0-0.81,0.02-1.67,0.07-2.57 c0.04-0.87,0.11-1.75,0.2-2.66c0.09-0.92,0.2-1.8,0.32-2.63c0.13-0.87,0.27-1.71,0.43-2.53c0.17-0.85,0.36-1.7,0.57-2.55 c0.22-0.87,0.45-1.7,0.69-2.5l0.19-0.63h0.02c0.2-0.64,0.41-1.26,0.62-1.85c0.28-0.79,0.59-1.59,0.93-2.41 c0.34-0.81,0.69-1.61,1.05-2.38c0.36-0.77,0.76-1.55,1.18-2.34c0.42-0.79,0.85-1.55,1.29-2.28c0.45-0.74,0.91-1.48,1.4-2.2 c0.48-0.72,0.98-1.43,1.5-2.12c0.51-0.69,1.05-1.38,1.62-2.07c0.55-0.67,1.12-1.34,1.72-1.99c0.51-0.57,1.03-1.11,1.54-1.63v-0.02 l0.26-0.26c0.56-0.56,1.18-1.15,1.87-1.77c0.65-0.59,1.33-1.17,2.02-1.74c0.68-0.56,1.38-1.1,2.07-1.62 c0.69-0.51,1.4-1.02,2.13-1.5c0.75-0.5,1.48-0.97,2.2-1.4c0.72-0.44,1.47-0.86,2.23-1.27c0.76-0.41,1.53-0.8,2.31-1.17 c0.53-0.25,1.06-0.49,1.59-0.72l0.84-0.35c0.79-0.33,1.59-0.64,2.4-0.93c0.77-0.28,1.6-0.55,2.5-0.82 c0.88-0.27,1.73-0.51,2.54-0.71c0.84-0.21,1.67-0.4,2.5-0.56c0.82-0.16,1.67-0.31,2.53-0.43c0.83-0.12,1.71-0.23,2.63-0.32 c0.9-0.09,1.79-0.15,2.65-0.2c0.9-0.05,1.76-0.07,2.56-0.07c0.78,0,1.61,0.02,2.49,0.06c0.83,0.04,1.69,0.1,2.58,0.19 c0.88,0.08,1.73,0.18,2.53,0.29c0.83,0.12,1.65,0.25,2.46,0.41c0.81,0.15,1.63,0.33,2.45,0.53c0.83,0.2,1.65,0.42,2.45,0.65 c0.84,0.24,1.63,0.5,2.39,0.76c0.75,0.26,1.54,0.55,2.36,0.88c0.68,0.27,1.35,0.56,2.02,0.85c0.71,0.32,1.34,0.61,1.9,0.89 c0.63,0.31,1.26,0.65,1.9,1c0.64,0.35,1.27,0.72,1.89,1.09c0.44,0.26,0.91,0.56,1.42,0.89c0.51,0.33,1,0.66,1.46,0.98 c0.49,0.34,0.96,0.68,1.42,1.02c0.44,0.33,0.9,0.68,1.35,1.04l3.34,2.65L94.84,25.41L94.84,25.41z M96.38,41.98 c2.82,1.89,5.6,4.03,8.32,6.41l0.11,0.1c0.71,0.67,1.1,1.55,1.15,2.45c0.06,0.95-0.24,1.92-0.91,2.69 c-0.04,0.04-0.06,0.07-0.1,0.11c-0.67,0.7-1.55,1.09-2.45,1.15c-0.95,0.06-1.92-0.24-2.69-0.91c-2.88-2.51-5.82-4.72-8.8-6.63 L96.38,41.98L96.38,41.98z M61.44,83.06c2.25,0,4.28,0.91,5.75,2.38c1.47,1.47,2.38,3.51,2.38,5.75c0,2.25-0.91,4.28-2.38,5.75 l-0.09,0.08c-1.46,1.42-3.46,2.3-5.66,2.3c-2.25,0-4.28-0.91-5.75-2.38l-0.08-0.09c-1.42-1.47-2.3-3.46-2.3-5.66 c0-2.24,0.91-4.27,2.39-5.75l0,0C57.16,83.97,59.19,83.06,61.44,83.06L61.44,83.06z M71.01,67.36l0.12,0.04 c3.09,1.19,6.12,2.98,9.05,5.37c0.8,0.65,1.26,1.56,1.35,2.5c0.1,0.94-0.17,1.93-0.81,2.72l-0.01,0.01 c-0.65,0.79-1.55,1.25-2.49,1.34c-0.94,0.1-1.93-0.17-2.72-0.81l-0.01,0c-2.28-1.86-4.6-3.24-6.93-4.16 c-1.18-0.46-2.36-0.81-3.53-1.03L71.01,67.36L71.01,67.36z M35.61,66.66c-0.06,0.06-0.12,0.12-0.19,0.16 c-0.75,0.61-1.66,0.88-2.56,0.82c-0.92-0.06-1.82-0.45-2.5-1.18l0,0c-0.06-0.06-0.12-0.13-0.16-0.19 c-0.61-0.75-0.88-1.66-0.82-2.56c0.06-0.92,0.45-1.82,1.18-2.5l0,0c0.05-0.05,0.11-0.1,0.17-0.14c4.91-4.33,9.97-7.6,15.14-9.78 c5.2-2.19,10.5-3.27,15.84-3.18c1.25,0.02,2.5,0.11,3.75,0.26l-7.31,7.31c-3.2,0.32-6.4,1.17-9.57,2.53 C44.19,60.08,39.85,62.91,35.61,66.66L35.61,66.66z M83.31,55.06c3.05,1.95,6.06,4.33,9.04,7.13c0.75,0.7,1.14,1.64,1.17,2.6 c0.03,0.95-0.3,1.91-1.01,2.65c-0.7,0.75-1.64,1.14-2.6,1.17c-0.95,0.03-1.91-0.3-2.66-1.01c-3.1-2.92-6.22-5.29-9.35-7.14 L83.31,55.06L83.31,55.06z"/></g></svg>`;
        case "info":
            return `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 426 511.48"><path d="M104.07 355.71c12.55 0 22.71 10.18 22.71 22.7 0 12.55-10.18 22.71-22.71 22.71-12.54 0-22.7-10.18-22.7-22.71 0-12.52 10.17-22.7 22.7-22.7zm172.31 6.15c34.23-34.22 89.73-34.22 123.95 0 34.23 34.23 34.23 89.73 0 123.95-34.22 34.23-89.72 34.23-123.95 0-34.22-34.22-34.22-89.72 0-123.95zm76.16 23.46c2.06 2.07 3.11 4.93 3.11 8.59 0 8.84-9.98 14.29-17.86 14.29-3.56 0-6.41-1-8.58-3-2.17-2.03-3.26-4.65-3.26-7.91 0-4.1 1.77-7.64 5.3-10.64 5.27-4.44 15.73-6.89 21.29-1.33zm-32.27 69.88h4.67v-29.57h-8.82c0-12.03 22.08-4.22 38.34-8.33v37.9h6.14v10.38h-40.33V455.2zM27.95 481.46C12.64 481.46 0 468.81 0 453.51V96.07c0-15.38 12.61-27.98 28-27.98h45.05v-8.81c0-10.3 8.52-18.75 18.8-18.75h30.57V20.79c0-11.34 9.33-20.79 20.7-20.79H250.4c11.43 0 20.79 9.38 20.79 20.79v19.79h26.34c10.3 0 18.79 8.56 18.79 18.84v8.81h45.06c15.34 0 27.99 12.59 27.99 27.94v220.74c-7.48-3.56-15.26-6.3-23.2-8.21V94.11c0-1.62-1.21-2.82-2.82-2.82l-47.03-.01v15.32c0 10.28-8.57 18.75-18.84 18.75H91.8c-10.3 0-18.75-8.51-18.75-18.79V91.23H25.98c-1.55 0-2.83 1.29-2.83 2.83v361.32c0 1.56 1.31 2.88 2.88 2.88l198.99.05c2.42 7.95 5.69 15.7 9.8 23.1-96.11-.01-206.87-.01-206.87.05zm236.3-417.9c-7.92 0-16.64-4.18-16.64-13.2V23.23H145.92v27.13c0 8.36-7.93 13.2-15.57 13.2H97.01v40.58h195.36V63.56h-28.12zm-81.36 250.69h-68.68v26.89H93.94v-37c0-5.59 4.54-10.13 10.13-10.13h78.26l-.33-31.38c-4.03-1.19-8.12-2.77-11.74-4.91l-6.3 6.94c-2.31 2.39-6.19 2.52-8.67.33l-9.25-8.67c-2.43-2.4-2.82-6.05-.35-8.57l6.92-7.47a51.672 51.672 0 0 1-4.98-11.8l-9.24.37c-3.37.12-6.23-2.5-6.36-5.86l-.5-12.68c-.12-3.45 2.4-6.23 5.86-6.36l10.1-.39c1.16-4.05 2.76-8.17 4.91-11.81l-6.83-6.29c-2.54-2.37-2.71-6.13-.35-8.69l8.5-9.24c2.4-2.45 6.02-2.81 8.57-.36l7.59 6.9c3.78-2.25 7.42-3.76 11.64-4.98l-.37-9.24c-.12-3.37 2.5-6.23 5.86-6.36l12.68-.48c3.44-.12 6.23 2.4 6.35 5.87l.4 10.09c4.1 1.21 8.04 2.73 11.74 4.91l6.29-6.81c2.37-2.54 6.14-2.71 8.7-.35l.12.1 9.25 8.5c2.44 2.41 2.8 6.03.35 8.57l-6.9 7.6c2.2 3.82 3.73 7.45 4.98 11.68l9.25-.37c3.36-.13 6.22 2.5 6.35 5.86l.5 12.67c.12 3.45-2.4 6.24-5.87 6.36l-10.09.4c-1.19 4.02-2.77 8.11-4.91 11.74l6.93 6.29c2.45 2.35 2.49 6.11.33 8.67l-8.67 9.27c-2.23 2.53-6.13 2.7-8.56.35l-7.47-6.91c-3.82 2.18-7.58 3.75-11.81 4.97l.31 31.5h78.06c5.6 0 10.14 4.54 10.14 10.13v9.31c-7 2.71-13.79 6.12-20.27 10.22v-9.38H207.2v26.89h-24.31v-26.89zm20.14-121.81c9.48 3.69 15.67 12.14 16.1 22.33.42 10.11-5.17 19.19-14.27 23.55-9.13 4.38-20.08 2.54-27.55-4.21-7.4-6.87-9.94-17.67-6.4-27.12 1.78-4.58 4.68-8.4 8.35-11.16 6.75-5.08 15.88-6.35 23.77-3.39zm-8.75 163.27c12.55 0 22.7 10.18 22.7 22.7 0 12.55-10.17 22.71-22.7 22.71-12.55 0-22.71-10.18-22.71-22.71 0-12.52 10.16-22.7 22.71-22.7z"/></svg>`;
        default:
            return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.878px" height="88.858px" viewBox="0 0 122.878 88.858" enable-background="new 0 0 122.878 88.858" xml:space="preserve"><g><path d="M17.215,43.332l10.399,10.57c1.096-1.28,2.282-2.497,3.551-3.642c7.666-6.908,18.284-11.183,30.038-11.183v0.029h0.001h0 v-0.029c11.754,0,22.373,4.275,30.039,11.184c1.416,1.276,2.73,2.644,3.93,4.09l10.489-10.489 c-1.408-1.612-2.919-3.146-4.525-4.594c-10.243-9.233-24.363-14.944-39.932-14.944v-0.029h0h-0.001v0.029 c-15.567,0-29.688,5.711-39.931,14.944C19.843,40.555,18.489,41.913,17.215,43.332L17.215,43.332z M61.656,48.555L61.656,48.555 l0.001,0.028c10.656,0.001,20.332,3.913,27.358,10.237l0.003,0.002l-8.575,8.575l-1.977,1.848 c-4.388-3.666-10.294-5.908-16.81-5.908v0.029h-0.001h-0.001v-0.029c-6.846,0-13.019,2.476-17.464,6.477 c-0.111,0.1-0.221,0.2-0.33,0.302L33.86,59.221c0.145-0.135,0.29-0.268,0.438-0.4C41.324,52.496,51,48.584,61.655,48.583 L61.656,48.555L61.656,48.555L61.656,48.555z M61.933,71.679c4.264,0,8.143,1.648,11.036,4.341L60.5,88.858L49.909,77.021 C52.875,73.74,57.163,71.679,61.933,71.679L61.933,71.679z M10.005,34.716c0.629-0.616,1.272-1.22,1.929-1.813 c12.421-11.195,29.61-18.121,48.619-18.121v0.029h0.001l0,0v-0.029c19.01,0,36.198,6.926,48.619,18.122 c1.122,1.011,2.204,2.058,3.246,3.137l10.458-10.458c-1.226-1.262-2.496-2.487-3.811-3.672 C104.068,8.392,83.378,0.029,60.555,0.029V0l0,0h-0.001v0.029c-22.823,0-43.513,8.363-58.512,21.882 C1.348,22.535,0.668,23.171,0,23.818L10.005,34.716L10.005,34.716z"/></g></svg>`;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// دالة للكشف عن حالة الاتصال
function updateNetworkStatus() {
    setTimeout(() => {
        if (!navigator.onLine) {
            showToast("You're Offline, Reconnecting!", "warning");
        } else {
            showToast("You're Connected Now!", "success");
        }
    }, 100); 
};


window.addEventListener("load", updateNetworkStatus);


window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log("Service Worker Registered ✅"))
        .catch(err => console.log("Service Worker Failed ❌", err));
}
