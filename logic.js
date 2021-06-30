function check() {
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
 var q1=document.QUIZ.q1.value;
 var q2=document.QUIZ.q2.value;
 var q3=document.QUIZ.q3.value;
 var q4=document.QUIZ.q4.value;
 var q5=document.QUIZ.q5.value;
 var q6=document.QUIZ.q6.value;
 var q7=document.QUIZ.q7.value;
 var q8=document.QUIZ.q8.value;
 var q9=document.QUIZ.q9.value;
 var q10=document.QUIZ.q10.value;
 var q11=document.QUIZ.q11.value;
 var q12=document.QUIZ.q12.value;
 var q13=document.QUIZ.q13.value;
 var q14=document.QUIZ.q14.value;
 var q15=document.QUIZ.q15.value;
 var result =document.getElementById('result');
 var quiz=document.getElementById('QUIZ')
 
  if(q1=="Agree") {a=3}
 else if(q1=="Do not agree") {a=1}
 else{a=2}
 
  if(q2=="Agree") {b=3}
 else if(q2=="Do not agree") {b=1}
 else{b=2}

 if(q3=="Dull and Lazy") {c=3}
 else if(q3=="Awesome") {c=1}
 else{c=2}

 if(q4=="I Always prefer Staying at Home") {d=3}
 else if(q4=="I Do not prefer Staying at Home") {d=1}
 else{d=2}

 if(q5=="Agree") {e=3}
 else if(q5=="Do not agree") {e=1}
 else{e=2}

 if(q6=="Agree") {f=3}
 else if(q6=="Do not agree") {f=1}
 else{f=2}

 if(q7=="Everyday") {g=3}
 else if(q7=="Not at all") {g=1}
 else{g=2}

 if(q8=="Agree") {h=3}
 else if(q8=="Do not agree") {h=1}
 else{h=2}

  if(q9=="No") {i=3}
 else if(q9=="Yes") {i=1}
 else{i=2}

  if(q10=="No") {j=3}
 else if(q10=="Yes") {j=1}
 else{j=2}

  if(q11=="Irregular sleep/ more or less than 8hrs") {k=3}
 else if(q11=="6-8hrs") {k=1}
 else{k=2}

  if(q12=="No") {l=3}
 else if(q12=="Yes") {l=1}
 else{l=2}

  if(q13=="Agree") {m=3}
 else if(q13=="Do not agree") {m=1}
 else{m=2}

  if(q14=="Most of the time") {n=3}
 else if(q14=="Not at all") {n=1}
 else{n=2}

  if(q15=="Most of the time") {o=3}
 else if(q15=="Not at all") {o=1}
 else{o=2}

 result=a+b+c+d+e+f+g+h+i+j+k+l+m+n+o;
 document.write("Your Score is:   ");
 document.write(result);
 document.write("\n Out of 45");

if(result>=0 && result<=20) {document.write("\n\nYOU ARE PERFECTLY ALRIGHT!\n\n");} 
 else if(result>=20 && result<=25) {document.write("\n\nYOU'RE GOOD\n\n");}
 else if(result>=25 && result<=30) {document.write("\n\nYOU HAVE MILD DEPRESSION\n\n");}
 else if(result>=30 && result<=35) {document.write("\n\nYOU HAVE MODERATE DEPRESSION...It can be cured with proper medication\n\n");}
else {
  document.write("\n\nYOU NEED TO CONSULT A DOCTOR\n\n");
}
