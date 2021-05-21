function convertFahrToCelsius(fahr) {
  
  if (isNaN(fahr)){
   console.log( `${fahr} is not a valid number, but a/an ${typeof(fahr)}`);
  }
  else if (Array.isArray(fahr)){
    console.log( `${fahr} is not a valid number but a/an ${typeof(fahr)}`);
  }else{
    let x = parseFloat(fahr)
    let cel = ((x -32)*(5/9))

console.log(x)
console.log(cel.toFixed(4))

  }
}

convertFahrToCelsius(0);
convertFahrToCelsius('zara');
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius(null);





function checkYuGiOh(num) {
const array = [];
const newArray = [];
if(isNaN(num)){
for ( var i = 1; i <= num; i++){
  array.push(i)}
for(i in array){
 if (array[i] % 2 ===0 || array[i] % 3 ===0 || array[i] % 5 ===0) {
var str = "";
if (array[i] % 2 ===0){
  str += ("yu")
  }
if (array[i] % 3 ===0){
  if(str != ""){
    str += ("-gi")
  }else{
    str += ("gi")
  }
}
if (array[i] % 5 ===0){
 if(str != ""){
    str += ("-oh")
  }else{
    str += ("oh")
  }
}
newArray.push(str)
 }else {
   newArray.push(array[i]) 
   }
}
}else{
  console.log(`invalid parameter:` + `${JSON.stringify(num)};`)
  return `invalid parameter:` + `${JSON.stringify(num)};`
};
console.log(newArray);
return newArray;
};
checkYuGiOh(5 );



