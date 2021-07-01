function SubmitScore()
{
	
	var score = 0;
	var strMessage = "";
	
	//--- do your score validation 
	
	
	 var a=0;
 var b=0;
 var c=0;
 var d=0;
 var e=0;
 var f=0;
 var g=0;
 var h=0;
 var i=0;
 var j=0;
 var k=0;
 var l=0;
 var m=0;
 var n=0;
 var o=0;
 
 
 var q1=  $("#q1:checked").val();
 var q2=  $("#q2:checked").val();
 var q3=  $("#q3:checked").val();
 var q4=  $("#q4:checked").val();
 
 
 if (q1 != undefined)
 {
	
	 score += eval(q1);
	
 }


 if (q2 != undefined)
 {
	 
	 score += eval(q2);
	
 }



 if (q3 != undefined)
 {
	 score += eval(q3);
 }



 if (q4 != undefined)
 {
	 score += eval(q4);
 }


 if (q5 != undefined)
 {
	 score += eval(q5);
 }
 
 
 
  if (q6 != undefined)
 {
	 score += eval(q6);
 }



 if (q7 != undefined)
 {
	 score += eval(q7);
 }




 if (q8 != undefined)
 {
	 score += eval(q8);
 }


 if (q9 != undefined)
 {
	 score += eval(q9);
 }


 if (q10 != undefined)
 {
	 score += eval(q10);
 }


 if (q11 != undefined)
 {
	 score += eval(q11);
 }



 if (q12 != undefined)
 {
	score += eval(q12);
 }


 if (q13 != undefined)
 {
	 score += eval(q13);
 }


 if (q14 != undefined)
 {
	 score += eval(q14);
 }


 if (q15 != undefined)
 {
	 score += eval(q15);
 }



 
 

	
	
	
	//--- do your score validation 
	
	
	
	
	if(score == 0)
	{
	 strMessage = "<div class=\"alert alert-danger\" role='alert'><b>Error!</h><br>Please answer all questions.</div>";
	}else{
		strMessage = "<div class=\"alert alert-success\" role='alert'><b>Thank you!</h><br>Your Score is "+  score  +".</div>";
		if(score>=0 && score<=20) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You're Perfectly Alright</h></div> "}
		 else if(result>=20 && result<=25) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You're Good. You do not have any kind of Depression</h></div> "}
		 else if(score>=25 && score<=30) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You have Mild Depression. This can be Cured by socializing or sharing your thoughts with Others</h></div> "}
		 else if(score>=30 && score<=35) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You Have Moderate Depression. No need to Worry!!! Spend more time engaging in activities such as interacting with others.</h></div> "}
  		 else if(score>=35 && score<=40) {strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You have Severe Depression.</h></div> "}
    		 else if(score>=40 && score<=45) {strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You Have Severe Depression</h><br>Try to Consult a Doctor if Possible</div>";}
		else { strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You need to consult a Doctor</div>";} 

             }
	
	$("#result").html(strMessage);
	$("#result2").html(strMessage2);
}

function resetform()
{
	$("#result").html("");
        $("#result2").html("");
}
