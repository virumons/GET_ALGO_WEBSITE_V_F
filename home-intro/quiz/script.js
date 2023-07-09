const quizData = [
 {
        question: "1.Counting sort is often used as a sub routine for radix sort.",
        a: "true",
        b: "False",
        correct: "a",
    },
{
        question: "2.Bucket sort is a generalization of which of the following sort?",
        a: "LSD radix sort",
        b: " Pigeonhole sort",
        c: "counting sort",
        d: "MSD radix sort",
        correct: "b",
    },
{
        question: "3. How many passes does an insertion sort algorithm consist of?",
        a: "N",
        b: "N-1",
        c: "N+1",
        d: "N2",
        correct: "b",
    },
{
        question: "4.In C, what are the basic loops required to perform an insertion sort?",
        a: "do- while",
        b: "if else",
        c: " for and while",
        d: " for and if",
        correct: "c",
    },

{
        question: "5.What is the advantage of selection sort over other sorting techniques?",
        a: "It requires no additional storage space",
        b: "It is scalable",
        c: "It works best for inputs which are already sorted",
        d: "It is faster than any other sorting technique",
        correct: "a",
    },
{
        question: "6.What will be the recurrence relation of the code of recursive selection sort?",
        a: "T(n) = 2T(n/2) + n",
        b: "T(n) = 2T(n/2) + c",
        c: "T(n) = T(n-1) + n",
        d: "T(n) = T(n-1) + c",
        correct: "c",
    },
{
        question: "7.What is the worst case complexity of bubble sort?",
        a: "O(nlogn)",
        b: "O(logn)",
        c: "O(n)",
        d: "O(n2)",
        correct: "d",
    },
{
        question: "8.What is the average case complexity of bubble sort?",
        a: " O(nlogn)",
        b: "O(logn)",
        c: " O(n)",
        d: "O(n2)",
        correct: "d",
    },
{
        question: "9.What is the auxiliary space complexity of merge sort?",
        a: " O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        correct: "c",
    },
    
{
        question: "10. In heap sort, after deleting the last minimum element, the array will contain elements in?",
        a: "increasing sorting order",
        b: "decreasing sorting order",
        c: "tree inorder",
        d: "javascript",
        correct: "b",
    },
    
    {
        question: "11.What is the average time complexity of counting sort?",
        a: " O(n)",
        b: "O(n+k) k=range of input",
        c: "O(n2)",
        d: "O(n log n)",
        correct: "b",
    },
    
{
        question: "12.What is the average running time of a quick sort algorithm?",
        a: "O(N2)",
        b: "O(N)",
        c: " O(N log N)",
        d: "O(log N)",
        correct: "c",
    },
    {
        question: "13.Which of the following sorting algorithms is used along with quick sort to sort the sub arrays?",
        a: " Merge sort",
        b: "Shell sort",
        c: " Insertion sort",
        d: "Bubble sort",
        correct: "c",
    },
{
        question: "14. Heap sort is an extremely stable algorithm.",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "15.Why is Shell sort called as a generalization of Insertion sort?",
        a: " Shell sort allows an exchange of far items whereas insertion sort moves elements by one position",
        b: "Improved lower bound analysis",
        c: " Insertion is more efficient than any other algorithms",
        d: " Shell sort performs internal sorting",
        correct: "a",
    },
    {
        question: "16.What is the worst case running time of shell sort using Hibbard’s increments?",
        a: "O(N)",
        b: "O(N2)",
        c: "O(N1/2)",
        d: "O(N3/2)",
        correct: "d",
    },
    {
        question: "17.What is the average time complexity of MSD radix sort (w= bits required to store each key)?",
        a: " O(n + w)",
        b: "O(n.w)",
        c: "O(n2)",
        d: "O(n log n)",
        correct: "b",
    },
   {
        question: "18. What is the alternate name of bucket sort?",
        a: "group sort",
        b: "radix sort",
        c: "bin sort",
        d: "uniform sort",
        correct: "c",
    },
{
        question: "19.Counting sort is often used as a sub routine for radix sort.",
        a: "true",
        b: "False",
        correct: "a",
    },
{
        question: "20.Bucket sort is a generalization of which of the following sort?",
        a: "LSD radix sort",
        b: " Pigeonhole sort",
        c: "counting sort",
        d: "MSD radix sort",
        correct: "b",
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
           <h1>Score <br>${score}/${quizData.length}</h1>

           <button onclick="location.reload()" style="background-color:transparent; color:white; font-weight:500; border:1px solid white; padding:.5rem">Reload</button>
           `
       }
    }
})