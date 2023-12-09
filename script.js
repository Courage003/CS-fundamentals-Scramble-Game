let words = [
    {
        word : "algorithm",
        hint: "A step-by-step procedure or formula for solving a problem"

    },

    {
        word : "Binary",
        hint: "The numeral system with a base of 2, using only 0s and 1s"

    },
    {
        word : "Encryption",
        hint: "Converting data into a code to prevent unauthorized access"

    },
    {
        word : "Function",
        hint: "A reusable block of code that performs a specific task"

    },
    {
        word : "Interface",
        hint: "The point of interaction between a user and a system"

    },
    {
        word : "JavaScript",
        hint: "A scripting language for web development"

    },
    {
        word : "Kernel",
        hint: "The core component of an operating system"

    },
    {
        word : "Network",
        hint: "A collection of interconnected computers and devices"

    },
    {
        word : "Tuple",
        hint: "An ordered collection of elements, similar to a list"

    },
    {
        word : "Variable",
        hint: " A symbolic name assigned to a value or memory location"

    },
    {
        word : "Syntax",
        hint: "The set of rules that dictate the combination of symbols in a programming "

    }

];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
  };
  initGame();
  
  // Function to check the user's input word
  const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please enter the word to check!");
    if (userWord !== correctWord)
      return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
  };
  
  // Event listeners for the refresh and check buttons
  refreshBtn.addEventListener("click", initGame);
  checkBtn.addEventListener("click", checkWord);


