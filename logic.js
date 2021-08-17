function SubmitScore()
{
	
	var score = 0;
	var strMessage = "";
	var strMessage2 = "";
	var strErrMsg = "";
	//--- do your score validation 
	
	
	
 
 
 var q1 =  $("#q1:checked").val();
 var q2 =  $("#q2:checked").val();
 var q3 =  $("#q3:checked").val();
 var q4 =  $("#q4:checked").val();
 var q5 =  $("#q5:checked").val();
 var q6 =  $("#q6:checked").val();
 var q7 =  $("#q7:checked").val();
 var q8 =  $("#q8:checked").val();
 var q9 =  $("#q9:checked").val();
 var q10 =  $("#q10:checked").val();
 var q11 =  $("#q11:checked").val();
 var q12 =  $("#q12:checked").val();
 var q13 =  $("#q13:checked").val();
 var q14 =  $("#q14:checked").val();
 var q15 =  $("#q15:checked").val();
 
 
 
 if (q1 != undefined)
 {
	 score += eval(q1);
 }else{
	 strErrMsg += "<li>Please Answer for Question 1</li>";
 }


 if (q2 != undefined)
 {
	 score += eval(q2);
 }else{
	 strErrMsg += "<li>Please Answer for Question 2</li>";
 }



 if (q3 != undefined)
 {
	 score += eval(q3);
 }else{
	 strErrMsg += "<li>Please Answer for Question 3</li>";
 }



 if (q4 != undefined)
 {
	 score += eval(q4);
 }else{
	 strErrMsg += "<li>Please Answer for Question 4</li>";
 }


 if (q5 != undefined)
 {
	 score += eval(q5);
 }else{
	 strErrMsg += "<li>Please Answer for Question 5</li>";
 }
 
 
 
  if (q6 != undefined)
 {
	 score += eval(q6);
 }else{
	 strErrMsg += "<li>Please Answer for Question 6</li>";
 }



 if (q7 != undefined)
 {
	 score += eval(q7);
 }else{
	 strErrMsg += "<li>Please Answer for Question 7</li>";
 }




 if (q8 != undefined)
 {
	 score += eval(q8);
 }else{
	 strErrMsg += "<li>Please Answer for Question 8</li>";
 }


 if (q9 != undefined)
 {
	 score += eval(q9);
 }else{
	 strErrMsg += "<li>Please Answer for Question 9</li>";
 }


 if (q10 != undefined)
 {
	 score += eval(q10);
 }else{
	 strErrMsg += "<li>Please Answer for Question 10</li>";
 }


 if (q11 != undefined)
 {
	 score += eval(q11);
 }else{
	 strErrMsg += "<li>Please Answer for Question 11</li>";
 }



 if (q12 != undefined)
 {
	score += eval(q12);
 }else{
	 strErrMsg += "<li>Please Answer for Question 12</li>";
 }


 if (q13 != undefined)
 {
	 score += eval(q13);
 }else{
	 strErrMsg += "<li>Please Answer for Question 13</li>";
 }


 if (q14 != undefined)
 {
	 score += eval(q14);
 }else{
	 strErrMsg += "<li>Please Answer for Question 14</li>";
 }


 if (q15 != undefined)
 {
	 score += eval(q15);
 }else{
	 strErrMsg += "<li>Please Answer for Question 15</li>";
 }



 
 

	
	
	
	//--- do your score validation 
	
	
	
	if(strErrMsg == '')
	{	
	
			/*if(score == 0)
			{
			 strMessage = "<div class=\"alert alert-danger\" role='alert'><b>Error!</h><br>Please answer all questions.</div>";
			}else{
				strMessage = "<div class=\"alert alert-success\" role='alert'><b>Thank you!</h><br>Your Score is "+  score  +".</div>";
				if(score>=0 && score<=20) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You're Perfectly Alright</h></div> "}
						else if(score>20 && score<=25) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You're Good. You do not have any kind of Depression</h></div> "}
						else if(score>25 && score<=30) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You have Mild Depression. No need to Worry!!! Spend more time engaging in activities such as interacting with others.</h></div> "}
						else if(score>30 && score<=35) {strMessage2 = "<div class=\"alert alert-success\" role='alert'><b>You Have Moderate Depression. This can be Cured by socializing or sharing your thoughts with Others.<div class="alert alert-danger" role="alert">
 				for help <a href="#" class="alert-link">click here</a>. Give it a click if you like.
				</div></h></div> "}
				else if(score>35 && score<=40) {strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You have Severe Depression.</h></div> "}
				else if(score>40 && score<=45) {strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You Have Severe Depression</h><br>Try to Consult a Doctor if Possible</div>";}
				else{
						strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>You need to consult a Doctor</div>";
					} 
				}
	
	
	
			$("#result").html(strMessage);
			$("#result2").html(strMessage2);
		}else{
		strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>Error!</b><ul>"+ strErrMsg +"</ul></div>";
		$("#result").html("");
		$("#result2").html(strMessage2);
		}
		*/
	if(score == 0)
	{
	 strMessage = "<div class=\"alert alert-danger\" role='alert'><b>Error!</h><br>Please answer all questions.<br></div>";
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
	
}else{
		strMessage2 = "<div class=\"alert alert-danger\" role='alert'><b>Error!</b><ul>"+ strErrMsg +"</ul></div>";
		$("#result").html("");
		$("#result2").html(strMessage2);
		}

function resetform()
{
	$("#result").html("");
	$("#result2").html("");
}

