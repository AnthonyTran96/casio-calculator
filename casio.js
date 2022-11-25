
 window.onload=function(){
  let display=document.querySelector(".display");
  let operator=document.querySelector(".operator");
  let number=document.querySelector(".number");
  let equal=document.querySelector(".equal");
  // console.log(display);
  // console.log(operator);
  // console.log(number);
  // console.log(equal);
  function numberDisplay(node){
    node.childNodes.forEach(element => {
    if (element.nodeName!=="#text") {
      element.onclick=function(){
        if (element.innerText==="C") display.innerText=null; 
        else
        if((element.innerText===".")&&(display.innerText[display.innerText.length-1]===".")) return;
          else display.innerText=display.innerText +element.innerText;
      }
  }});
  };

  function operatorDisplay(node){
    node.childNodes.forEach(element => {
      if (element.nodeName!=="#text") {
        element.onclick=function(){
            switch(display.innerText[display.innerText.length-1]){
              case "+":
              case "-":
              case "*":
              case "/": 
                {
                  display.innerText=display.innerText.slice(0,length-1)+element.innerText;
                  break;
                }
              default:  display.innerText=display.innerText +element.innerText;
            }
        }
    }});
  };

  function Equal(){
    equal.onclick=function(){
      console.log(Mathdisplay.innerText));
    }
  }

  operatorDisplay(operator);
  numberDisplay(number);
  Equal();
 }