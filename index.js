const readlineSync = require("readline-sync");
const chalk = require('chalk');

function welcome(){


console.log(chalk.bgCyan.bold.white("An IPL Quiz App - by Souvik Das"));

console.log();

console.log(chalk.cyanBright("Hey,Are you a true IPL Fan?"));

console.log(chalk.cyanBright("Play this quiz to test yourself!"));

console.log();

var userName = readlineSync.question("What's your name? ");

console.log(chalk.cyanBright(("Welcome "+userName + "!")));
console.log();
console.log(chalk.yellowBright("The quiz is related to all time IPL seasons!Be Prepared."))
console.log();
}

var highScores = [
  {
    name: "Souvik",
    score: 9,
  },

  {
    name: "Sandeep",
    score: 7,
  },
]


var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  userAnswer = userAnswer.toLowerCase();
  
    if(userAnswer==answer){
      console.log(chalk.greenBright(("Yayy You are correct!")));
      score = score + 1;
    }
    else{
      console.log(chalk.redBright(("Oops You are wrong.")));
      //score = score - 1;
    }
    console.log("Current Score : "+score);
    console.log("************************");
}


var questions = [{
  question: "Who has the most runs in IPL?\n a)Rohit Sharma\n b)Suresh Raina\n c)Virat Kohli\n d)David Warner ",
  answer : "c"
},{
  question: "Who hit most sixes?\n a)AB de Villiers\n b)Rohit Sharma\n c)MS Dhoni\n d)Chris Gayle ",
  answer : "d"
},{
  question: "What is the highest individual score in IPL?\n a)175\n b)183\n c)189\n d)196 ",
  answer: "a"
},
{
  question: "Who is having best batting strike rate?\n a)Hardik Pandya\n b)Virender Sehwag\n c)Andre Russell\n d)Kieron Pollard ",
  answer: "c"
},
{
  question: "Which player has taken most hat-tricks in the IPL so far?\n a)Yuvraj Singh\n b)Sunil Narine\n c)Andrew Tye\n d)Amit Mishra ",
  answer : "d"
},
{
  question: "Which player has taken most wickets?\n a)Harbhajan Singh\n b)Sunil Narine\n c)Lasith Malinga\n d)Amit Mishra ",
  answer : "c"
},
{
  question: "Which player has the best bowling economy?\n a)Rashid Khan\n b)Anil Kumble\n c)Lasith Malinga\n d)Glenn McGrath ",
  answer : "a"
},
{
  question: "Which player has bowled most dots in IPL?\n a)Sunil Narine\n b)Harbhajan Singh\n c)Bhuvneshwar Kumar\n d)Amit Mishra ",
  answer : "b"
},
{
  question: "Which team is the most successful in IPL?\n a)KKR\n b)MI\n c)CSK\n d)RCB ",
  answer : "b"
},
]
function game(){
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
}
function showScores() {
  console.log(chalk.cyanBright(("YAY! You SCORED: " + score)));

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  for(let i=0;i<highScores.length;i++){
    console.log(highScores[i].name, " : ", highScores[i].score);

  }
  //highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();