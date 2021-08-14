const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  let resarray = [];
  createArrayOfArrays(countries);
function createArrayOfArrays(countries){
       countries.map((item,index) => {
           const start = item.split("").splice(0,3).join("");
           const countrieslength = item.length;

           return resarray.push([item + " " + start +" " + countrieslength])
       });
}
console.log(resarray);