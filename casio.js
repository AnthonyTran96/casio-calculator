function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

  let a="1+2+3*3";
  console.log(parse(a))