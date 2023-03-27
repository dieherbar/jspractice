//mute an array declared with const
const s = [5, 7, 2];
console.log("valor original de s " + s);
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
s[0]=2;
s[1]=5;
s[2]=7;
return(s)
  // Only change code above this line
}
editInPlace();
console.log("valor de s luego de funcion " + editInPlace());

///Object.freeze makes values unmutable
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS);  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //arrow functions
  const magic = () => new Date();
  console.log("function magic = " + magic);
//arrow function with paramters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5, "a"]));
//arrow functions default parameters
const increment = (number, value = 1) => number + value;
//rest parameter in a function
const sum = (...args) => {
    //args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

  ///template literals
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = []; 
    arr.forEach(element => {
        failureItems.push(`<li class="text-warning">${[element]}</li>`)
    });
    //console.log(failureItems);
    // Only change code above this line
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  // function Lista(parentId,elementosLista){
  //   this.parentId = parentId;
  //   this.elementosLista = this.elementosLista;
  //   const imprimir = document.getElementById("demo");
  //   const lista = imprimir.innerHtml + "<ul>" + elementosLista + "</ul>";
  //   imprimir.innerHtml = lista;    
  // }
  // const miLista = new Lista("unorder",failuresList);

  let myApp = document.getElementById("unorder");
  myApp.innerHTML = failuresList;

  console.log("esta es la lista -> " + failuresList);

