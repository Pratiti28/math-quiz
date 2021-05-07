player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name+":";
document.getElementById("player2name").innerHTML=player2name+":";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="questions turn="+player1name;
document.getElementById("playeranswer").innerHTML="answer turn="+player2name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1)*parseInt(number2);
    console.log(actualanswer);

    questionnumber="<h4>"+number1+"x"+number2+"</h4>";
    input_box="<br>answer= <input type='text' id='textinput1'>";
    checkbutton="<br><br><button>check</button>"
    row=questionnumber+input_box+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
