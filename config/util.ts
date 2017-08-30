export function tap(x: any, w?: string) {
  console.log(`%c***** ${ w ? w : ''} *****`,
    `border:1px solid grey;
    border-radius: 5px 5px;
    padding:0 10px;
    background-color:black;
    color:lime;
    font-style:bold;`, x);
  return x;
};
