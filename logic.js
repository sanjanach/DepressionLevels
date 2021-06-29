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
 
  if(q1=="AGREE") {a=3}
 else if(q1=="DO NOT AGREE") {a=1}
 else{a=2}
 
  if(q2=="AGREE") {b=3}
 else if(q2=="DO NOT AGREE") {b=1}
 else{b=2}

 if(q3=="AGREE") {c=3}
 else if(q3=="DO NOT AGREE") {c=1}
 else{c=2}

 if(q4=="AGREE") {d=3}
 else if(q4=="DO NOT AGREE") {d=1}
 else{d=2}

 if(q5=="AGREE") {e=3}
 else if(q5=="DO NOT AGREE") {e=1}
 else{e=2}

 if(q6=="AGREE") {f=3}
 else if(q6=="DO NOT AGREE") {f=1}
 else{f=2}

 if(q7=="AGREE") {g=3}
 else if(q7=="DO NOT AGREE") {g=1}
 else{g=2}

 if(q8=="AGREE") {h=3}
 else if(q8=="DO NOT AGREE") {h=1}
 else{h=2}

  if(q9=="AGREE") {i=3}
 else if(q9=="DO NOT AGREE") {i=1}
 else{i=2}

  if(q10=="AGREE") {j=3}
 else if(q10=="DO NOT AGREE") {j=1}
 else{j=2}

  if(q11=="AGREE") {k=3}
 else if(q11=="DO NOT AGREE") {k=1}
 else{k=2}

  if(q12=="AGREE") {l=3}
 else if(q12=="DO NOT AGREE") {l=1}
 else{l=2}

  if(q13=="AGREE") {m=3}
 else if(q13=="DO NOT AGREE") {m=1}
 else{m=2}

  if(q14=="AGREE") {n=3}
 else if(q14=="DO NOT AGREE") {n=1}
 else{n=2}

  if(q15=="AGREE") {o=3}
 else if(q15=="DO NOT AGREE") {o=1}
 else{o=2}
quiz.style.display="none";
 result=a+b+c+d+e+f+g+h+i+j+k+l+m+n+o;
  document.write("Your score is : ");
  document.write(result);
  document.write("\n Out of 45");

 if(result>=0 && result<=15) {document.write("\n\nYOU HAVE MILD DEPRESSION\n\n");} 
 else if(result>=15 && result<=30) {document.write("\n\nYOU HAVE MODERATE DEPRESSION\n\n");}
else {
  document.write("\n\nYOU HAVE SEVERE DEPRESSION\n\n");
}
} 