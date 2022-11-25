function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

 window.onload=function(){
  let display=document.querySelector(".display");
  let operator=document.querySelector(".operator");
  let number=document.querySelector(".number");
  let equal=document.querySelector(".equal");
  // console.log(display);
  // console.log(operator);
  // console.log(number);
  // console.log(equal);
  function getdisplay(node){
    node.childNodes.forEach(element => {
    if (element.nodeName!=="#text") {
      element.onclick=function(){
        display.innerText=display.innerText + " " +element.innerText;
      }
  }});
  };
  getdisplay(operator);
  getdisplay(number);

 }