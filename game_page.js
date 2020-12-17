 player1_name= localStorage.getItem("player1 name");
 player2_name=localStorage.getItem("player2 name");
 player1_score=0;
 player2_score=0;
 document.getElementById("player1_name").innerHTML= player1_name+":";
 document.getElementById("player2_name").innerHTML=player2_name+":";
 document.getElementById("player2_score").innerHTML=player2_score;
 document.getElementById("player1_score").innerHTML=player1_score;
 document.getElementById("player_question").innerHTML="question turn-"+player1_name;
 document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
var answer=0;
 function send(){
   var number1=document.getElementById("Number1").value;
   var number2=document.getElementById("Number2").value;
   answer= number1* number2;
 var question_word="<h4 id= 'word_display'>Q. "+ number1+"X"+ number2 + "</h4>";
 var input_box="<br> answer: <input type='text' id='input_check_box'>" ;
check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
 }
  var question_turn="player1";
  var answer_turn="player2";
  function check(){
      var get_answer=document.getElementById("input_check_box").value;
      console.log(answer);
      if(answer==get_answer){
          if(answer_turn=="player1"){
              player1_score=player1_score+1;
              document.getElementById("player1_score").innerHTML=player1_score;
          }
          else if ( answer_turn=="player2"){
              player2_score=player2_score+1;
              document.getElementById("player2_score").innerHTML=player2_score;
          }
      }
      if(question_turn=="player1"){
          question_turn="player2";
          document.getElementById("player_question").innerHTML="question turn-"+player2_name;
      }
      else if( question_turn=="player2"){
          question_turn="player1";
          document.getElementById("player_question").innerHTML="question turn-"+player1_name;
          
      }

      if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
    }
    else if(answer_turn=="player2"){
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
        
    }
    document.getElementById("output").innerHTML="";
  }