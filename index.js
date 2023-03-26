const questions = [
    {
      'que': 'which of the following is a markup language ?',
      'a': 'HTML',
      'b': 'CSS',
      'c': 'C',
      'd': 'PHP',
      'correct': 'a'
    },
    {
      'que': 'what year was javascript launched ?',
      'a': '1996',
      'b': '1995',
      'c': '1994',
      'd': '1854',
      'correct': 'b'
    },
    {
      'que': 'what does css stand for?',
      'a': 'hypertext markup language',
      'b': 'cascading style sheet',
      'c': 'jason object notation',
      'd': 'none of the above',
      'correct': 'b',
    },
    {
      'que': 'Javascript is an _______ language?',
      'a': 'Object Oriented',
      'b': 'Object based',
      'c': 'Procedural',
      'd': 'None of the above',
      'correct': 'a',
    },
    {
      'que': 'Which of the following keywords is used to define a variable in Javascript?',
      'a': 'Var',
      'b': 'let',
      'c': 'Both A & B',
      'd': 'None of the above',
      'correct': 'c',
    },
    {
      'que': 'How can a datatype be declared to be a constant type?',
      'a': 'const',
      'b': 'var',
      'c': 'let',
      'd': 'constant',
      'correct': 'a',
    },
    {
      'que': 'What keyword is used to check whether a given property is valid or not?',
      'a': 'in',
      'b': 'is in',
      'c': 'exists',
      'd': 'lies',
      'correct': 'a',
    },
    {
      'que': 'When an operators value is NULL, the typeof returned by the unary operator is',
      'a': 'Boolean',
      'b': 'Undefined',
      'c': 'Object',
      'd': 'Integer',
      'correct': 'c',
    },
    {
      'que': 'Which of the following is not a Javascript framework?',
      'a': 'Node',
      'b': 'Vue',
      'c': 'React',
      'd': 'Cassandra',
      'correct': 'd',
    },
    {
      'que': 'How to stop an interval timer in Javascript?',
      'a': 'clearInterval',
      'b': 'clearTimer',
      'c': 'intervalOvar',
      'd': 'None of the above',
      'correct': 'a',
    },
  ]
  let index = 0;
  let right = 0;
  wrong = 0;
  correct = 0;
  incorrect = 0;
  total = questions.length;
  const quesBox = document.getElementById("quesBox")
  const optionInputs = document.querySelectorAll('.options')
  
  var timeout = 60000;
  var startTime = Date.now();
  
  const loadQuestion = () => {
    if (index === total) {
      return endQuiz()
    }
    reset()
  
    console.log("/////", downloadTimer);
  
    const data = questions[index]
    console.log("///////////", data)
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
  }
  
  
  let allInputs = document.querySelectorAll("input[type='radio']")
  
  document.querySelector("#submit").addEventListener(
    "click",
    function() {
  
      const data = questions[index]
      const ans = getAnswer()
      if (ans === data.correct) {
        correct++;
      } else {
        incorrect++;
      }
      index++;
      loadQuestion()
      return data;
    }
  
  )
  console.log("****",correct)
  
  document.querySelector("#prev").addEventListener(
    "click",
  
    function() {
      const data = questions[index]
      if (index == 0) {
        alert("you are alredy on first question..!!")
      } else {
        index--;
        loadQuestion()
      }
    }
  )
  
  // timer
  
  const getAnswer = () => {
    var ans;
    allInputs.forEach(
      (input) => {
        if (input.checked) {
          ans = input.value;
        }
      }
    )
    return ans;
  console.log("))))))",ans)
  }
  
  //online code
  
  var timeleft = 60;
  
  var downloadTimer = setInterval(function() {
    if (timeleft < 0) {
      clearInterval(downloadTimer);
      document.getElementById("box").innerHTML = `<h1>Times Up and your score is ${correct}</h1>`;
      document.getElementById("box").style.background="orange";
    } else {
      document.getElementById("time").innerHTML = "Time :" + " " + timeleft + " sec";
    }
    timeleft -= 1;
  }, 1000);
  
  
  const reset = () => {
    optionInputs.forEach(
      (input) => {
        input.checked = false;
      }
    )
  }
  const endQuiz = () => {
    document.getElementById("box").innerHTML = `
      <h2> Thank you, Your Score is </h2>
       <h2> ${correct} / ${total} are correct</h2>
      `
  }
  
  //initial call
  loadQuestion();
  