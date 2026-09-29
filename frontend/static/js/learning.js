const steps = document.querySelectorAll(".lesson-step");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const stepLabel = document.getElementById("stepLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const listenButton = document.getElementById("listenButton");

let currentStep = 0;
let isSpeaking = false;

const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const romanNames = {
    I: "I",
    V: "V",
    X: "X",
    L: "L",
    C: "C",
    D: "D",
    M: "M"
};

function updateLesson() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    const number = currentStep + 1;
    const percentage = Math.round((number / steps.length) * 100);

    stepLabel.textContent = `Etapa ${number} de ${steps.length}`;
    progressPercent.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;

    previousButton.disabled = currentStep === 0;

    nextButton.textContent =
        currentStep === steps.length - 1
            ? "Recomeçar ↻"
            : "Próxima etapa →";
}

function getRoman() {
    const element = document.querySelector(".roman-result");

    return element
        ? element.textContent.trim().toUpperCase()
        : "";
}

function getResult() {
    const element = document.querySelector(".decimal-result");

    return element
        ? element.textContent.trim()
        : "";
}

function getValueName(value) {
    return value === 1
        ? "1"
        : value === 5
            ? "5"
            : value === 10
                ? "10"
                : value === 50
                    ? "50"
                    : value === 100
                        ? "100"
                        : value === 500
                            ? "500"
                            : "1000";
}

function generateSymbolExplanation(roman) {
    const parts = [];

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];
        const currentValue = romanValues[currentSymbol];

        if (i === roman.length - 1) {
            parts.push(
                `Por último, ${romanNames[currentSymbol]} vale ${getValueName(currentValue)}. Como não existe outro símbolo depois dele, adicionamos ${getValueName(currentValue)}.`
            );

            continue;
        }

        const nextSymbol = roman[i + 1];
        const nextValue = romanValues[nextSymbol];

        if (currentValue < nextValue) {
            parts.push(
                `${romanNames[currentSymbol]} vale ${getValueName(currentValue)} e o próximo símbolo, ${romanNames[nextSymbol]}, vale ${getValueName(nextValue)}. Como ${getValueName(currentValue)} é menor que ${getValueName(nextValue)}, fazemos uma subtração: menos ${getValueName(currentValue)}.`
            );
        } else {
            parts.push(
                `${romanNames[currentSymbol]} vale ${getValueName(currentValue)}. Como ${getValueName(currentValue)} é maior ou igual ao próximo valor, adicionamos ${getValueName(currentValue)}.`
            );
        }
    }

    return parts.join(" ");
}

function generateFullExplanation() {
    const roman = getRoman();
    const result = getResult();

    if (!roman || !result) {
        return "";
    }

    const explanation = generateSymbolExplanation(roman);

    return `Vamos analisar o número romano ${roman}, passo a passo. ${explanation} Somando todas essas operações, chegamos ao resultado ${result}. Portanto, ${roman} corresponde a ${result}.`;
}

function generateShortExplanation() {
    const roman = getRoman();
    const result = getResult();

    if (!roman || !result) {
        return "";
    }

    const operations = [];

    for (let i = 0; i < roman.length; i++) {
        const currentValue = romanValues[roman[i]];

        if (
            i + 1 < roman.length &&
            currentValue < romanValues[roman[i + 1]]
        ) {
            operations.push(`menos ${currentValue}`);
        } else {
            operations.push(`mais ${currentValue}`);
        }
    }

    return `O número ${roman} é calculado assim: ${operations.join(", ")}. O resultado é ${result}.`;
}

function getExplanation() {
    const roman = getRoman();
    const result = getResult();

    if (!roman || !result) {
        return "";
    }

    if (currentStep === 0) {
        return `Vamos começar pelo número ${roman}. Cada símbolo romano possui um valor. I vale 1, V vale 5, X vale 10, L vale 50, C vale 100, D vale 500 e M vale 1000. Agora vamos analisar os símbolos de ${roman}, um por um.`;
    }

    if (currentStep === 1) {
        return generateFullExplanation();
    }

    return `Agora vamos conferir o resultado. ${generateShortExplanation()} Portanto, ${roman} corresponde ao número ${result}.`;
}

function stopSpeech() {
    window.speechSynthesis.cancel();

    isSpeaking = false;

    if (listenButton) {
        listenButton.textContent = "Ouvir explicação";
    }
}

function findBrazilianVoice() {
    const voices = window.speechSynthesis.getVoices();

    return (
        voices.find(voice =>
            voice.lang.toLowerCase() === "pt-br"
        ) ||
        voices.find(voice =>
            voice.lang.toLowerCase().startsWith("pt-br")
        ) ||
        voices.find(voice =>
            voice.lang.toLowerCase().startsWith("pt")
        )
    );
}

function speakExplanation() {
    if (!listenButton) {
        return;
    }

    if (isSpeaking) {
        stopSpeech();
        return;
    }

    const text = getExplanation();

    if (!text) {
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-BR";
    speech.rate = 0.72;
    speech.pitch = 1;
    speech.volume = 1;

    const voice = findBrazilianVoice();

    if (voice) {
        speech.voice = voice;
    }

    speech.onstart = () => {
        isSpeaking = true;
        listenButton.textContent = "Parar narração";
    };

    speech.onend = () => {
        isSpeaking = false;
        listenButton.textContent = "Ouvir explicação";
    };

    speech.onerror = () => {
        isSpeaking = false;
        listenButton.textContent = "Ouvir explicação";
    };

    window.speechSynthesis.speak(speech);
}

nextButton.addEventListener("click", () => {
    stopSpeech();

    if (currentStep === steps.length - 1) {
        currentStep = 0;
    } else {
        currentStep++;
    }

    updateLesson();
});

previousButton.addEventListener("click", () => {
    stopSpeech();

    if (currentStep > 0) {
        currentStep--;
    }

    updateLesson();
});

if (listenButton) {
    listenButton.addEventListener("click", speakExplanation);
}

window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

updateLesson();