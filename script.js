var str="",strr="",final="";
var a="";
var c=0;
var d,m,s,su,res;
const clickSound = new Audio('Mouse Click Sound Effect.mp3');


var btn=document.querySelector(".innerbox");
    btn.addEventListener("click",function(){
      
 })
 var display=document.querySelector(".innerbox");
     

 var ac=document.querySelector(".ac");
  ac.addEventListener("click",function(){
  //  one.style.backgroundColor="red";
   display.textContent="";clickSound.play();
    str="";
    final="";
    strr="";
    c=0;
  });
 var lol=document.querySelector(".cut");
    lol.addEventListener("click",function(){
      clickSound.play();
  //  lol.style.backgroundColor="red"
  // str=str-str[str.length-1];
  // display.textContent=str;
    for(var i=0;i<(str.length-1);i++){
         a=a+str[i];
}
     str=a;
     a="";
     display.textContent=str;

 })
  
 var one=document.querySelector(".one");
 one.addEventListener("click",function(){
  //  one.style.backgroundColor="red";
   display.textContent+="1"
    str=str+"1"
    clickSound.play();
   
 })

 var two=document.querySelector(".two");
 two.addEventListener("click",function(){
  //  two.style.backgroundColor="red";
   display.textContent+="2"
    str=str+"2"
    clickSound.play(); })
  
 var three=document.querySelector(".three");
 three.addEventListener("click",function(){
  //  three.style.backgroundColor="red";
   display.textContent+="3"
    str=str+"3"
    clickSound.play();
 })

 var four=document.querySelector(".four");
 four.addEventListener("click",function(){
  //  four.style.backgroundColor="red";
   display.textContent+="4"
    str=str+"4"
    clickSound.play();
 })

 var five=document.querySelector(".five");
 five.addEventListener("click",function(){
  //  five.style.backgroundColor="red";
   display.textContent+="5"
   clickSound.play();
    str=str+"5"
 })

 var six=document.querySelector(".six");
 six.addEventListener("click",function(){
  //  six.style.backgroundColor="red";
   display.textContent+="6"
    str=str+"6"
    clickSound.play();
 })
  
 var seven=document.querySelector(".seven");
 seven.addEventListener("click",function(){
  //  seven.style.backgroundColor="red";
   display.textContent+="7"
   clickSound.play();
    str=str+"7"
 })
 var eight=document.querySelector(".eight");
 eight.addEventListener("click",function(){
  //  eight.style.backgroundColor="red"
   display.textContent+="8"
   clickSound.play();
    str=str+"8";
 })
 var nine=document.querySelector(".nine");
 nine.addEventListener("click",function(){
  //  nine.style.backgroundColor="red";
   console.log(nine.value);
   display.textContent+="9"
   clickSound.play();
    str=str+"9"
    
      })

 var zero=document.querySelector(".zero");
zero.addEventListener("click",function(){
        // one.style.backgroundColor="red";
        display.textContent+="0"
        clickSound.play();
         str=str+"0";
});
var dot=document.querySelector(".dot");
dot.addEventListener("click",function(){
        // one.style.backgroundColor="red";
        clickSound.play();
        c=c+1;
        if(c==1){
          display.textContent+="."
          str=str+".";
        }
        
});
      // for(var i=0;i<(str.length-1);i++){
      //          a=a+str[i];
      //   }
   
      var slash=document.querySelector(".slash");
      slash.addEventListener("click",function(){
              // one.style.backgroundColor="red";
              display.textContent="";
              strr=str;
              str="";
              d=1;
              clickSound.play();
              c=0;
              s=0;
              su=0;
              m=0;
      });

      var mul=document.querySelector(".mul");
      mul.addEventListener("click",function(){
              // one.style.backgroundColor="red";
              display.textContent="";
              strr=str;
              str="";
              m=1;
              clickSound.play();
              d=0;
              c=0;
              s=0;
              su=0;
              
      });
      var minus=document.querySelector(".minus");
      minus.addEventListener("click",function(){
              // one.style.backgroundColor="red";
              display.textContent="";
              strr=str;
              str="";
              
              s=1;d=0;
              c=0;
              clickSound.play();
              
              su=0;
              m=0;
      });
      var plus=document.querySelector(".plus");
      plus.addEventListener("click",function(){
              // one.style.backgroundColor="red";
              display.textContent="";
              strr=str;
              clickSound.play();
              str="";
              su=1;
              c=0;d=0;
              
              s=0;
              
              m=0;
      });
      var equal=document.querySelector(".equal");
      equal.addEventListener("click",function(){
         clickSound.play();
              // one.style.backgroundColor="red";
              if(d==1){
                 res= ((Number(strr))/(Number(str)));
                 
                 
              }
              if(m==1){
                res= ((Number(strr))*(Number(str)));
                
             }
             if(s==1){
              res= ((Number(strr))-(Number(str)));
              
             }
             if(su==1){
               res= ((Number(strr))+(Number(str)));
            
             }
            final=res;
            display.textContent=final;
            str=final;
            c=0;
      });
  
  
  
  
  
  