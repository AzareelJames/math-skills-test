document.title = `Math Skills Test`;
var level = 1;
var x;
var y;
var ans;
var question;

function random(){
    return Math.floor(Math.random() * level)+1;
}

x = random();
y = random();
var mistakes = 0;
while (true){
    question = (
`Level: ${level}
Mistakes: ${mistakes}
(press "q" to quit)
${x} + ${y} = ?`
    );
    ans = prompt(question);
    if (ans.toLowerCase() === `q`){
        throw Error(`[Program Stopped]`);
    }

    if (Number(ans) === x+y){
        level += 1;
        x = random();
    y = random();
    } else {
        mistakes++
    }
}