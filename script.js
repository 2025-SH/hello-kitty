const Questions = [
    {
        q:"Fill in the blank : Hello Kitty was created in______.",
        a: [{text: "1975", isCorrect: true},
            {text: "2001", isCorrect: false},
            {text: "1988", isCorrect: false},
            {text: "2004", isCorrect: false},
           ],
    }, 
    {
        q:"Fill in the blank : Hello Kitty was created by ______.",
        a: [{text: "Ginhun-sukam", isCorrect: false},
            {text: "Yuko-Shimiziu", isCorrect: true},
            {text: "Chen-linamin", isCorrect: false},
            {text: "Xiang-Haotao", isCorrect: false},
           ],
    }, 
    {
        q:"Fill in the blank : Kitty White lives in ______.",
        a: [{text: "China", isCorrect: false},
            {text: "America", isCorrect: false},
            {text: "England", isCorrect: true},
            {text: "Mexico", isCorrect: false},
           ],
    }, 
    {
        q:"Fill in the blank : All are Sanrio characters except ______.",
        a: [{text: "Keroppi", isCorrect: false},
            {text: "MyMelody", isCorrect: false},
            {text: "Kuromi", isCorrect: false},
            {text: "Pikachu", isCorrect: true},
           ],
    }, 
    {
        q:"Fill in the blank : Hello Kitty is supposed to be ______.",
        a: [{text: "Eight years old", isCorrect: true},
            {text: "Sixteen years old", isCorrect: false},
            {text: "Twenty-Four years old", isCorrect: false},
            {text: "Ten years old", isCorrect: false},
           ],
    }, 
];


let currQuestion = 0 ;
let score = 0;


function loadQues()
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
    for(  let i = 0; i < Questions[ currQuestion] .a.length;i++)
    {
        const choicesDiv = document.createElement("div");
        const choice  = document.createElement("input");
        const choiceLabel = document.createElement("Label");

        choice.type ="radio";
        choice.name ="answer";
        choice.value =i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();
function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if(Questions[currQuestion].a[selectedAns].isCorrect )
    {
        score++;
        console.log("Correct");
        nextquestion();
    }
    else
    {
        nextquestion();
    }
}

function loadScore()
{
 const totalScore = document.getElementById("score")   
 totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}
function nextquestion ()
{
    if (currQuestion < Questions.length -1)
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
