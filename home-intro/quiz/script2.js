const quizData = [
 

{
    question: "1.Which algorithmic technique does Fibonacci search use?",
    a: "Brute force",
    b: "Divide and Conquer",
    c: " Greedy Technique",
    d: "Backtracking",
    correct: "b",
},
{
    question: "2.What is the time complexity of Fibonacci Search?",
    a: "O(logn)",
    b: "O(n)",
    c: "O(n2)",
    d: " O(nlogn)",
    correct: "a",
},
{
    question: "3.Breadth First Search is equivalent to which of the traversal in the Binary Trees?",
    a: "Pre-order Traversal",
    b: "Post-order Traversal",
    c: "Level-order Traversal",
    d: "In-order Traversal",
    correct: "c",
},
{
    question: "4.The Data structure used in standard implementation of Breadth First Search is?",
    a: "Stack",
    b: "Queue",
    c: "Linked List",
    d: "Tree",
    correct: "b",
},
{
    question: "5.Which of the following is not an application of Breadth First Search?",
    a: " Finding shortest path between two nodes",
    b: "Finding bipartiteness of a graph",
    c: " GPS navigation system",
    d: " Path Finding",
    correct: "d",
},
{
    question: "6.Depth First Search is equivalent to which of the traversal in the Binary Trees?",
    a: "Pre-order Traversal",
    b: " Post-order Traversal",
    c: "Level-order Traversal",
    d: " In-order Traversal",
    correct: "a",
},
{
    question: "7.The Depth First Search traversal of a graph will result into?",
    a: " Linked List",
    b: "Tree",
    c: "Graph with back edges",
    d: " Array",
    correct: "b",
},
{
    question: "8.Where can linear search be performed ?",
    a: "On letters",
    b: "On numbers",
    c: "Both",
    d: "None of these",
    correct: "c",
},
{
    question: "9.How many linear searches will it take to find the value 7 in the list [1,4,8,7,10,28]? ",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "c",
},
{
    question: "10.A linear search algorithm is also known as a... ?",
    a: "Binary search algorithm",
    b: "Bubble sort algorithm",
    c: "Sequential search algorithm",
    d: "linear search",
    correct: "c",
},
{
    question: "11.Which algorithmic technique does Fibonacci search use?",
    a: "Brute force",
    b: " Divide and Conquer",
    c: "Greedy Technique",
    d: "Backtracking",
    correct: "b",
},

{
    question: "12.Binary search algorithm cannot be applied to ...",
    a: "Sorted linked list",
    b: "Sorted binary trees",
    c: "Sorted linear array",
    d: "pointer array",
    correct: "a",
},

{
    question: "13.Complexity of linear search algorithm is...",
    a: "o(n)",
    b: "o(logn)",
    c: "o(n2)",
    d: "0(n logn)",
    correct: "a",
},

{
    question: "14.Interpolation search is a variation of?",
    a: "Linear search",
    b: "Binary search",
    c: "Jump search",
    d: "Exponential search",
    correct: "b",
},
{
    question: "15.What is the time complexity of interpolation search when the input array has uniformly distributed values and is sorted?",
    a: "o(n)",
    b: "o(log log n)",
    c: "o(n log n)",
    d: "o(log n)",
    correct: "b",
},
{
    question: "16.Jump search algorithm requires which of the following condition to be true?",
    a: "array should be sorted",
    b: "array should have not be sorted",
    c: "array should have a less than 64 elements",
    d: "array should be partially sorted",
    correct: "a",
},
{
    question: "17.What is the value of jump taken for maximum efficiency while implementing jump search?",
    a: "n/2",
    b: "n2",
    c: "n1/2",
    d: "log n",
    correct: "c",
},
{
    question: "18.Which of the following searching algorithm is fastest?",
    a: "jump search",
    b: "binary search",
    c: "linear search",
    d: "All are equally fast",
    correct: "b",
},
{
    question: "19.Exponential search algorithm requires which of the following condition to be true?",
    a: "array should be sorted",
    b: "array should have not be sorted",
    c: "array should have a less than 128 elements",
    d: "array should be partially sorted",
    correct: "a",
},
{
    question: "20.Best case of the exponential search will have time complexity of?",
    a: "O(1)",
    b: "O(n)",
    c: "o(log n)",
    d: "o(n log n)",
    correct: "a",
},

   
   ];
   
   const quiz= document.getElementById('quiz')
   const answerEls = document.querySelectorAll('.answer')
   const questionEl = document.getElementById('question')
   const a_text = document.getElementById('a_text')
   const b_text = document.getElementById('b_text')
   const c_text = document.getElementById('c_text')
   const d_text = document.getElementById('d_text')
   const submitBtn = document.getElementById('submit')
   
   
   let currentQuiz = 0
   let score = 0
   
   loadQuiz()
   
   function loadQuiz() {
   
       deselectAnswers()
   
       const currentQuizData = quizData[currentQuiz]
   
       questionEl.innerText = currentQuizData.question
       a_text.innerText = currentQuizData.a
       b_text.innerText = currentQuizData.b
       c_text.innerText = currentQuizData.c
       d_text.innerText = currentQuizData.d
   }
   
   function deselectAnswers() {
       answerEls.forEach(answerEl => answerEl.checked = false)
   }
   
   function getSelected() {
       let answer
       answerEls.forEach(answerEl => {
           if(answerEl.checked) {
               answer = answerEl.id
           }
       })
       return answer
   }
   
   
   submitBtn.addEventListener('click', () => {
       const answer = getSelected()
       if(answer) {
          if(answer === quizData[currentQuiz].correct) 
          {
              score++
          }
   
          currentQuiz++
   
          if(currentQuiz < quizData.length) 
          {
              loadQuiz()
          } else {
              quiz.innerHTML = `
              <img src="http://drive.google.com/uc?export=view&id=1-Fj-nRCap0dLVpxwTsSKpMPixxErHXTx" height="300px" width="300px">
              <h1>Score <br></h1>
                <h1>${score}/${quizData.length}</h1>
              <button onclick="location.reload()" style="background-color:transparent; color:white; font-weight:500; border:1px solid white; padding:.5rem">Reload</button>
              `
          }
       }
   })