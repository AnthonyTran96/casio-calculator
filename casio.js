
 window.onload=function(){
  let display=document.querySelector(".display");
  let operator=document.querySelector(".operator");
  let number=document.querySelector(".number");
  let equal=document.querySelector(".equal");
  let check=false;
  
  function numberDisplay(node){
    node.childNodes.forEach(element => {
    if (element.nodeName!=="#text") {
      element.onclick=function(){
        if (check===true) display.innerText="";
        if (element.innerText==="C") display.innerText=null; 
        else
        if((element.innerText===".")&&(display.innerText[display.innerText.length-1]===".")) return;
          else display.innerText=display.innerText +element.innerText;
        check=false;
      }
    }});
  };

  function operatorDisplay(node){
    node.childNodes.forEach(element => {
      if (element.nodeName!=="#text") {
        element.onclick=function(){
            if (check===true) display.innerText="";
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
            check=false;
        }
    }});
  };

  function Equal(){
    equal.onclick=function(){
      switch(display.innerText[display.innerText.length-1]){
        case "+":
        case "-":
        case "*":
        case "/": {display.innerText="ERROR!!"; break;}
        default: display.innerText=parse(display.innerText);
      }
      check=true; 
    }
  }

  function parse(inputString){
    let result= new Function (`return (${inputString})`);
    return result();
  };
  Equal(); 
  operatorDisplay(operator);
  numberDisplay(number);
 
 }